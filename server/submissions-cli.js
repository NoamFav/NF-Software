#!/usr/bin/env node

import { Command } from 'commander';
import chalk from 'chalk';
import ora from 'ora';
import Table from 'cli-table3';
import prompts from 'prompts';
import fs from 'node:fs';
import path from 'node:path';

const program = new Command();

// Configuration
const CONFIG_FILE = path.join(process.env.HOME || process.env.USERPROFILE, '.submissions-cli.json');

function loadConfig() {
    try {
        if (fs.existsSync(CONFIG_FILE)) {
            return JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf8'));
        }
    } catch (e) {
        // ignore
    }
    return { url: 'http://localhost:8080', password: '' };
}

function saveConfig(config) {
    fs.writeFileSync(CONFIG_FILE, JSON.stringify(config, null, 2));
}

const config = loadConfig();

// Helper to create auth header
function getAuthHeader(password) {
    const pw = password || config.password;
    if (!pw) {
        console.error(chalk.red('Error: No password configured. Use "config set password <pw>" first.'));
        process.exit(1);
    }
    return 'Basic ' + Buffer.from(':' + pw).toString('base64');
}

// Helper to make authenticated requests
async function apiRequest(endpoint, options = {}) {
    const url = `${config.url}${endpoint}`;
    const headers = {
        'Authorization': getAuthHeader(options.password),
        ...options.headers
    };

    try {
        const response = await fetch(url, {
            ...options,
            headers
        });

        if (response.status === 401) {
            throw new Error('Authentication failed. Check your password.');
        }

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
            return await response.json();
        }

        return await response.text();
    } catch (error) {
        throw new Error(`Request failed: ${error.message}`);
    }
}

// Format helpers
function formatDate(date) {
    return new Date(date + 'Z').toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

function formatBudget(value) {
    const labels = {
        micro: '€20 - €500',
        tiny: '€500 - €1K',
        small: '€1K - €5K',
        medium: '€5K - €15K',
        large: '€15K - €50K',
        enterprise: '€50K+',
        discuss: 'TBD'
    };
    return labels[value] || value;
}

function formatTimeframe(value) {
    const labels = {
        urgent: '1-2 weeks',
        short: '1-2 months',
        medium: '3-6 months',
        long: '6+ months',
        flexible: 'Flexible'
    };
    return labels[value] || value;
}

function formatFileSize(bytes) {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}

function truncate(str, len = 50) {
    if (!str) return '';
    return str.length > len ? str.substring(0, len) + '...' : str;
}

function wrapText(text, width = 80, indent = 2) {
    if (!text) return '';
    const indentStr = ' '.repeat(indent);
    const words = text.split(/\s+/);
    const lines = [];
    let currentLine = '';

    for (const word of words) {
        if ((currentLine + word).length > width - indent) {
            if (currentLine) lines.push(indentStr + currentLine.trim());
            currentLine = word + ' ';
        } else {
            currentLine += word + ' ';
        }
    }
    if (currentLine) lines.push(indentStr + currentLine.trim());
    
    return lines.join('\n');
}

function printSection(title, content, color = 'white') {
    console.log('\n' + chalk.bold[color](`┌─ ${title}`));
    if (content) {
        console.log(content);
    }
    console.log(chalk[color]('└' + '─'.repeat(title.length + 3)));
}

function printField(label, value, options = {}) {
    if (value === null || value === undefined || value === '') {
        if (!options.showEmpty) return;
        value = chalk.gray('(not provided)');
    }
    const formattedLabel = chalk.gray(`  ${label.padEnd(options.labelWidth || 25)}`);
    console.log(formattedLabel + value);
}

function printDivider() {
    console.log(chalk.gray('─'.repeat(80)));
}

function formatValue(value) {
    if (value === null || value === undefined || value === '') {
        return chalk.gray('(empty)');
    }
    if (Array.isArray(value)) {
        return value.length > 0 ? value.join(', ') : chalk.gray('(empty)');
    }
    return value;
}

// Commands

program
    .name('submissions')
    .description('CLI tool for managing submission server')
    .version('1.0.0');

// Config command
const configCmd = program
    .command('config')
    .description('Configure CLI settings');

configCmd
    .command('set <key> <value>')
    .description('Set configuration value (url or password)')
    .action((key, value) => {
        if (key !== 'url' && key !== 'password') {
            console.error(chalk.red('Error: Key must be "url" or "password"'));
            process.exit(1);
        }
        config[key] = value;
        saveConfig(config);
        console.log(chalk.green(`✓ Set ${key} = ${key === 'password' ? '***' : value}`));
    });

configCmd
    .command('show')
    .description('Show current configuration')
    .action(() => {
        console.log(chalk.bold('\nCurrent Configuration:'));
        console.log(chalk.gray('URL:     ') + config.url);
        console.log(chalk.gray('Password:') + (config.password ? ' ***' : ' (not set)'));
        console.log(chalk.gray('\nConfig file:') + CONFIG_FILE);
    });

// List command
program
    .command('list')
    .alias('ls')
    .description('List all submissions')
    .option('-l, --limit <number>', 'Limit number of results', '50')
    .option('-o, --offset <number>', 'Offset for pagination', '0')
    .option('--json', 'Output as JSON')
    .action(async (options) => {
        const spinner = ora('Fetching submissions...').start();

        try {
            const data = await apiRequest(
                `/submissions?limit=${options.limit}&offset=${options.offset}`
            );

            spinner.stop();

            if (options.json) {
                console.log(JSON.stringify(data, null, 2));
                return;
            }

            if (!data.items || data.items.length === 0) {
                console.log(chalk.yellow('\nNo submissions found.'));
                return;
            }

            console.log('\n' + chalk.bold.cyan('SUBMISSIONS') + chalk.gray(` (${data.items.length} results)`));
            printDivider();

            data.items.forEach((item, idx) => {
                console.log('\n' + chalk.bold.white(`╔═══ SUBMISSION ${idx + 1} ═══`));
                
                // System Info
                console.log(chalk.bold.gray('║ SYSTEM'));
                console.log(chalk.gray('║   ID:         ') + chalk.white(item.id));
                console.log(chalk.gray('║   Created:    ') + formatDate(item.created_at));
                
                // Contact Info
                console.log(chalk.bold.cyan('║ CONTACT'));
                console.log(chalk.gray('║   Name:       ') + formatValue(item.name));
                console.log(chalk.gray('║   Email:      ') + chalk.white.bold(item.email));
                console.log(chalk.gray('║   Phone:      ') + formatValue(item.phone));
                console.log(chalk.gray('║   Company:    ') + formatValue(item.company));
                console.log(chalk.gray('║   Website:    ') + formatValue(item.website));
                
                // Business Info
                console.log(chalk.bold.yellow('║ BUSINESS'));
                console.log(chalk.gray('║   Industry:   ') + formatValue(item.industry));
                console.log(chalk.gray('║   Team Size:  ') + formatValue(item.team_size));
                
                // Project Overview
                console.log(chalk.bold.magenta('║ PROJECT'));
                console.log(chalk.gray('║   Type:       ') + formatValue(item.project_type));
                console.log(chalk.gray('║   Budget:     ') + (item.budget ? chalk.green(formatBudget(item.budget)) : chalk.gray('(empty)')));
                console.log(chalk.gray('║   Timeline:   ') + (item.timeframe ? chalk.magenta(formatTimeframe(item.timeframe)) : chalk.gray('(empty)')));
                console.log(chalk.gray('║   Has Design: ') + formatValue(item.has_design));
                console.log(chalk.gray('║   Hosting:    ') + formatValue(item.needs_hosting));
                
                // Project Details
                console.log(chalk.bold.white('║ DETAILS'));
                console.log(chalk.gray('║   Description:') + (item.description ? '\n║     ' + truncate(item.description, 70) : ' ' + chalk.gray('(empty)')));
                console.log(chalk.gray('║   Goals:      ') + (item.goals ? truncate(item.goals, 70) : chalk.gray('(empty)')));
                console.log(chalk.gray('║   Target Aud: ') + (item.target_audience ? truncate(item.target_audience, 70) : chalk.gray('(empty)')));
                console.log(chalk.gray('║   Tech Req:   ') + (item.technical_requirements ? truncate(item.technical_requirements, 70) : chalk.gray('(empty)')));
                console.log(chalk.gray('║   Design Pref:') + (item.design_preferences ? truncate(item.design_preferences, 70) : chalk.gray('(empty)')));
                
                // Features
                const featureCount = (item.features && item.features.length > 0) ? item.features.length : 0;
                if (featureCount > 0) {
                    console.log(chalk.gray('║   Features:   ') + chalk.green(`${featureCount} selected`) + chalk.gray(' - ') + truncate(item.features.join(', '), 50));
                } else {
                    console.log(chalk.gray('║   Features:   ') + chalk.gray('(none)'));
                }
                
                // Files
                const fileCount = (item.files && item.files.length > 0) ? item.files.length : 0;
                if (fileCount > 0) {
                    console.log(chalk.gray('║   Files:      ') + chalk.green(`📎 ${fileCount} attachment${fileCount > 1 ? 's' : ''}`));
                    item.files.forEach((f, fidx) => {
                        console.log(chalk.gray('║     ') + chalk.white(`${fidx + 1}. ${f.filename}`) + chalk.gray(` (${formatFileSize(f.size)})`));
                    });
                } else {
                    console.log(chalk.gray('║   Files:      ') + chalk.gray('(none)'));
                }
                
                // Priority indicators
                if (item.timeframe === 'urgent' || item.budget === 'enterprise' || item.budget === 'large') {
                    console.log(chalk.bold.red('║ ⚠️  PRIORITY'));
                    if (item.timeframe === 'urgent') console.log(chalk.red('║   → URGENT PROJECT'));
                    if (item.budget === 'enterprise' || item.budget === 'large') console.log(chalk.green('║   → HIGH VALUE'));
                }
                
                console.log(chalk.bold.white('╚═══════════════════'));
            });

            console.log('\n' + chalk.gray(`Showing ${data.items.length} submissions (limit: ${options.limit}, offset: ${options.offset})`));
            console.log(chalk.gray('Use "submissions show <id>" for full details\n'));
        } catch (error) {
            spinner.fail(chalk.red(error.message));
            process.exit(1);
        }
    });

// Show command
program
    .command('show <id>')
    .description('Show detailed information for a submission')
    .option('--json', 'Output as JSON')
    .action(async (id, options) => {
        const spinner = ora('Fetching submission...').start();

        try {
            const data = await apiRequest(`/submissions/${id}`);
            spinner.stop();

            if (options.json) {
                console.log(JSON.stringify(data, null, 2));
                return;
            }

            // Header
            console.log('\n' + chalk.bold.cyan('═'.repeat(80)));
            console.log(chalk.bold.white.bgCyan(` ${data.name || 'Anonymous'} `));
            if (data.company) console.log(chalk.cyan(`  ${data.company}`));
            console.log(chalk.bold.cyan('═'.repeat(80)));

            // Priority indicators
            const indicators = [];
            if (data.timeframe === 'urgent') indicators.push(chalk.red.bold('⚠  URGENT PROJECT'));
            if (data.budget === 'enterprise' || data.budget === 'large') indicators.push(chalk.green.bold('★  HIGH VALUE'));
            if (indicators.length > 0) {
                console.log('\n' + indicators.join('  '));
            }

            // System Fields
            printSection('SYSTEM INFORMATION', null, 'gray');
            printField('Submission ID:', data.id);
            printField('Created At:', formatDate(data.created_at));

            // Contact Information - ALL FIELDS
            printSection('CONTACT INFORMATION', null, 'cyan');
            printField('Name:', data.name || chalk.gray('(not provided)'));
            printField('Email:', chalk.white.bold(data.email));
            printField('Phone:', data.phone || chalk.gray('(not provided)'));
            printField('Company:', data.company || chalk.gray('(not provided)'));
            printField('Website:', data.website ? chalk.blue(data.website) : chalk.gray('(not provided)'));
            printField('Industry:', data.industry || chalk.gray('(not provided)'));
            printField('Team Size:', data.team_size || chalk.gray('(not provided)'));

            // Project Overview - ALL FIELDS
            printSection('PROJECT OVERVIEW', null, 'yellow');
            printField('Project Type:', chalk.white.bold(data.project_type || chalk.gray('(not provided)')));
            printField('Budget:', chalk.green.bold(data.budget ? formatBudget(data.budget) : chalk.gray('(not provided)')));
            printField('Timeline:', chalk.magenta.bold(data.timeframe ? formatTimeframe(data.timeframe) : chalk.gray('(not provided)')));
            printField('Has Design:', data.has_design === 'yes' ? chalk.green('✓ Complete design ready') : 
                                      data.has_design === 'partial' ? chalk.yellow('⚠ Wireframes available') : 
                                      data.has_design === 'no' ? chalk.red('✗ Full design needed') :
                                      chalk.gray('(not provided)'));
            printField('Needs Hosting:', data.needs_hosting === 'yes' ? chalk.green('Required') : 
                                        data.needs_hosting === 'no' ? chalk.gray('Not needed') : 
                                        data.needs_hosting === 'maybe' ? chalk.yellow('TBD') :
                                        chalk.gray('(not provided)'));

            // Description
            if (data.description && data.description.trim()) {
                printSection('PROJECT DESCRIPTION', null, 'white');
                console.log(wrapText(data.description, 76, 2));
            } else {
                printSection('PROJECT DESCRIPTION', null, 'white');
                console.log(chalk.gray('  (not provided)'));
            }

            // Goals
            if (data.goals && data.goals.trim()) {
                printSection('GOALS & SUCCESS METRICS', null, 'white');
                console.log(wrapText(data.goals, 76, 2));
            } else {
                printSection('GOALS & SUCCESS METRICS', null, 'white');
                console.log(chalk.gray('  (not provided)'));
            }

            // Target Audience
            if (data.target_audience && data.target_audience.trim()) {
                printSection('TARGET AUDIENCE', null, 'white');
                console.log(wrapText(data.target_audience, 76, 2));
            } else {
                printSection('TARGET AUDIENCE', null, 'white');
                console.log(chalk.gray('  (not provided)'));
            }

            // Technical Requirements
            if (data.technical_requirements && data.technical_requirements.trim()) {
                printSection('TECHNICAL REQUIREMENTS', null, 'white');
                console.log(wrapText(data.technical_requirements, 76, 2));
            } else {
                printSection('TECHNICAL REQUIREMENTS', null, 'white');
                console.log(chalk.gray('  (not provided)'));
            }

            // Design Preferences
            if (data.design_preferences && data.design_preferences.trim()) {
                printSection('DESIGN PREFERENCES', null, 'white');
                console.log(wrapText(data.design_preferences, 76, 2));
            } else {
                printSection('DESIGN PREFERENCES', null, 'white');
                console.log(chalk.gray('  (not provided)'));
            }

            // Features
            if (data.features && data.features.length > 0) {
                printSection(`REQUIRED FEATURES (${data.features.length})`, null, 'white');
                data.features.forEach(f => {
                    console.log(chalk.green('  ✓ ') + f);
                });
            } else {
                printSection('REQUIRED FEATURES', null, 'white');
                console.log(chalk.gray('  (none specified)'));
            }

            // Attachments
            if (data.files && data.files.length > 0) {
                printSection(`ATTACHMENTS (${data.files.length})`, null, 'green');
                data.files.forEach((f, idx) => {
                    console.log(chalk.white(`  ${idx + 1}. `) + chalk.bold(f.filename));
                    console.log(chalk.gray('     Size: ') + formatFileSize(f.size) + 
                               chalk.gray(' | Type: ') + f.type);
                    console.log(chalk.blue('     ' + config.url + f.url));
                    if (idx < data.files.length - 1) console.log();
                });
            } else {
                printSection('ATTACHMENTS', null, 'green');
                console.log(chalk.gray('  (no attachments)'));
            }

            // Raw JSON dump of all fields
            printSection('ALL RAW FIELDS', null, 'gray');
            console.log(chalk.gray('  (Showing all database fields including empty ones)\n'));
            const allFields = [
                ['id', data.id],
                ['created_at', data.created_at],
                ['name', data.name],
                ['email', data.email],
                ['phone', data.phone],
                ['company', data.company],
                ['website', data.website],
                ['project_type', data.project_type],
                ['industry', data.industry],
                ['team_size', data.team_size],
                ['timeframe', data.timeframe],
                ['budget', data.budget],
                ['description', data.description],
                ['goals', data.goals],
                ['technical_requirements', data.technical_requirements],
                ['design_preferences', data.design_preferences],
                ['target_audience', data.target_audience],
                ['has_design', data.has_design],
                ['needs_hosting', data.needs_hosting],
                ['features', JSON.stringify(data.features)],
                ['files', JSON.stringify(data.files)]
            ];

            allFields.forEach(([field, value]) => {
                const displayValue = (value === null || value === undefined || value === '') 
                    ? chalk.gray('null') 
                    : typeof value === 'string' && value.length > 100 
                        ? truncate(value, 100) 
                        : value;
                console.log(chalk.gray(`  ${field.padEnd(30)}`), displayValue);
            });

            console.log('\n' + chalk.bold.cyan('═'.repeat(80)) + '\n');
        } catch (error) {
            spinner.fail(chalk.red(error.message));
            process.exit(1);
        }
    });

// Delete command
program
    .command('delete <ids...>')
    .alias('rm')
    .description('Delete one or more submissions')
    .option('-f, --force', 'Skip confirmation')
    .action(async (ids, options) => {
        if (!options.force) {
            const response = await prompts({
                type: 'confirm',
                name: 'confirmed',
                message: `Delete ${ids.length} submission(s)?`,
                initial: false
            });

            if (!response.confirmed) {
                console.log(chalk.yellow('Cancelled.'));
                return;
            }
        }

        const spinner = ora('Deleting submissions...').start();

        try {
            const data = await apiRequest('/remove', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ids })
            });

            spinner.succeed(chalk.green(`✓ Deleted ${data.removed.length} submission(s)`));
        } catch (error) {
            spinner.fail(chalk.red(error.message));
            process.exit(1);
        }
    });

// Stats command
program
    .command('stats')
    .description('Show submission statistics')
    .action(async () => {
        const spinner = ora('Calculating statistics...').start();

        try {
            const data = await apiRequest('/submissions?limit=500');
            spinner.stop();

            const items = data.items || [];

            const stats = {
                total: items.length,
                byBudget: {},
                byTimeframe: {},
                byProjectType: {},
                byIndustry: {},
                byTeamSize: {},
                byHasDesign: {},
                byNeedsHosting: {},
                withAttachments: items.filter(i => i.files && i.files.length > 0).length,
                urgent: items.filter(i => i.timeframe === 'urgent').length,
                highValue: items.filter(i => i.budget === 'enterprise' || i.budget === 'large').length,
                withPhone: items.filter(i => i.phone).length,
                withWebsite: items.filter(i => i.website).length,
                withCompany: items.filter(i => i.company).length,
            };

            items.forEach(item => {
                stats.byBudget[item.budget || 'unspecified'] = (stats.byBudget[item.budget || 'unspecified'] || 0) + 1;
                stats.byTimeframe[item.timeframe || 'unspecified'] = (stats.byTimeframe[item.timeframe || 'unspecified'] || 0) + 1;
                stats.byProjectType[item.project_type || 'unspecified'] = (stats.byProjectType[item.project_type || 'unspecified'] || 0) + 1;
                stats.byIndustry[item.industry || 'unspecified'] = (stats.byIndustry[item.industry || 'unspecified'] || 0) + 1;
                stats.byTeamSize[item.team_size || 'unspecified'] = (stats.byTeamSize[item.team_size || 'unspecified'] || 0) + 1;
                stats.byHasDesign[item.has_design || 'unspecified'] = (stats.byHasDesign[item.has_design || 'unspecified'] || 0) + 1;
                stats.byNeedsHosting[item.needs_hosting || 'unspecified'] = (stats.byNeedsHosting[item.needs_hosting || 'unspecified'] || 0) + 1;
            });

            console.log('\n' + chalk.bold.cyan('═'.repeat(60)));
            console.log(chalk.bold.white.bgCyan(' SUBMISSION STATISTICS '));
            console.log(chalk.bold.cyan('═'.repeat(60)) + '\n');

            // Overview
            console.log(chalk.bold.white('OVERVIEW'));
            console.log(chalk.gray('  Total Submissions:  ') + chalk.white.bold(stats.total));
            console.log(chalk.gray('  With Company:       ') + chalk.white(stats.withCompany));
            console.log(chalk.gray('  With Phone:         ') + chalk.white(stats.withPhone));
            console.log(chalk.gray('  With Website:       ') + chalk.white(stats.withWebsite));
            console.log(chalk.gray('  With Attachments:   ') + chalk.green(stats.withAttachments));
            console.log(chalk.gray('  Urgent Projects:    ') + chalk.red.bold(stats.urgent));
            console.log(chalk.gray('  High-Value (€15K+): ') + chalk.green.bold(stats.highValue));

            // By Budget
            console.log('\n' + chalk.bold.yellow('BY BUDGET'));
            Object.entries(stats.byBudget)
                .sort((a, b) => b[1] - a[1])
                .forEach(([key, val]) => {
                    const bar = '█'.repeat(Math.ceil(val / stats.total * 30));
                    console.log(chalk.gray(`  ${(key === 'unspecified' ? key : formatBudget(key)).padEnd(20)}`), 
                               chalk.green(bar), chalk.white.bold(val));
                });

            // By Timeline
            console.log('\n' + chalk.bold.magenta('BY TIMELINE'));
            Object.entries(stats.byTimeframe)
                .sort((a, b) => b[1] - a[1])
                .forEach(([key, val]) => {
                    const bar = '█'.repeat(Math.ceil(val / stats.total * 30));
                    console.log(chalk.gray(`  ${(key === 'unspecified' ? key : formatTimeframe(key)).padEnd(20)}`), 
                               chalk.magenta(bar), chalk.white.bold(val));
                });

            // By Project Type
            console.log('\n' + chalk.bold.cyan('BY PROJECT TYPE'));
            Object.entries(stats.byProjectType)
                .sort((a, b) => b[1] - a[1])
                .forEach(([key, val]) => {
                    const bar = '█'.repeat(Math.ceil(val / stats.total * 30));
                    console.log(chalk.gray(`  ${key.padEnd(20)}`), 
                               chalk.cyan(bar), chalk.white.bold(val));
                });

            // By Industry
            console.log('\n' + chalk.bold.blue('BY INDUSTRY'));
            Object.entries(stats.byIndustry)
                .sort((a, b) => b[1] - a[1])
                .forEach(([key, val]) => {
                    const bar = '█'.repeat(Math.ceil(val / stats.total * 30));
                    console.log(chalk.gray(`  ${key.padEnd(20)}`), 
                               chalk.blue(bar), chalk.white.bold(val));
                });

            // By Team Size
            console.log('\n' + chalk.bold.green('BY TEAM SIZE'));
            Object.entries(stats.byTeamSize)
                .sort((a, b) => b[1] - a[1])
                .forEach(([key, val]) => {
                    const bar = '█'.repeat(Math.ceil(val / stats.total * 30));
                    console.log(chalk.gray(`  ${key.padEnd(20)}`), 
                               chalk.green(bar), chalk.white.bold(val));
                });

            // By Design Status
            console.log('\n' + chalk.bold.yellow('BY DESIGN STATUS'));
            Object.entries(stats.byHasDesign)
                .sort((a, b) => b[1] - a[1])
                .forEach(([key, val]) => {
                    const bar = '█'.repeat(Math.ceil(val / stats.total * 30));
                    console.log(chalk.gray(`  ${key.padEnd(20)}`), 
                               chalk.yellow(bar), chalk.white.bold(val));
                });

            // By Hosting Needs
            console.log('\n' + chalk.bold.magenta('BY HOSTING NEEDS'));
            Object.entries(stats.byNeedsHosting)
                .sort((a, b) => b[1] - a[1])
                .forEach(([key, val]) => {
                    const bar = '█'.repeat(Math.ceil(val / stats.total * 30));
                    console.log(chalk.gray(`  ${key.padEnd(20)}`), 
                               chalk.magenta(bar), chalk.white.bold(val));
                });

            console.log('\n' + chalk.bold.cyan('═'.repeat(60)) + '\n');
        } catch (error) {
            spinner.fail(chalk.red(error.message));
            process.exit(1);
        }
    });

// Export command
program
    .command('export <file>')
    .description('Export submissions to JSON file')
    .option('-l, --limit <number>', 'Limit number of results', '500')
    .action(async (file, options) => {
        const spinner = ora('Exporting submissions...').start();

        try {
            const data = await apiRequest(`/submissions?limit=${options.limit}`);
            fs.writeFileSync(file, JSON.stringify(data.items, null, 2));
            spinner.succeed(chalk.green(`✓ Exported ${data.items.length} submissions to ${file}`));
        } catch (error) {
            spinner.fail(chalk.red(error.message));
            process.exit(1);
        }
    });

// Health check command
program
    .command('health')
    .description('Check server health')
    .action(async () => {
        const spinner = ora('Checking server...').start();

        try {
            const response = await fetch(`${config.url}/health`);
            const data = await response.json();

            if (data.ok) {
                spinner.succeed(chalk.green('✓ Server is healthy'));
            } else {
                spinner.warn(chalk.yellow('Server responded but status is not OK'));
            }
        } catch (error) {
            spinner.fail(chalk.red(`Server unreachable: ${error.message}`));
            process.exit(1);
        }
    });

program.parse();