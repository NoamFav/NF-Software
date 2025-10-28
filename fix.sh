#!/usr/bin/env bash
# scripts/brandify.sh
set -euo pipefail

DIR="${1:-src}"

# Grab JS/TS/JSX/TSX files tracked by git (falls back to find if not a git repo)
if git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
    mapfile -t FILES < <(git ls-files "$DIR" | grep -E '\.(jsx?|tsx?)$')
else
    mapfile -t FILES < <(find "$DIR" -type f -regex '.*\.\(js\|jsx\|ts\|tsx\)')
fi

[[ ${#FILES[@]} -eq 0 ]] && {
    echo "No files found in $DIR"
    exit 0
}

echo "Brandifying ${#FILES[@]} files…"

for f in "${FILES[@]}"; do
    # 1) Gradients:  bg-gradient-to-r from-blue-500 [via-…] to-purple-500  ->  bg-gradient-to-r ${theme.gradient}
    perl -0777 -i -pe 's/bg-gradient-to-r\s+from-blue-500(?:\s+via-[^\s]+)?\s+to-purple-500/bg-gradient-to-r \${theme.gradient}/g' "$f"

    # 2) Success badge trio -> ${theme.successBadge}
    perl -0777 -i -pe 's/\bborder-green-500\/50\s+text-green-500\s+bg-green-500\/10/\${theme.successBadge}/g' "$f"

    # 3) Retint hero blobs ONLY on lines that have animate-blob
    #    bg-blue-500   -> bg-brand-500
    #    bg-purple-500 -> bg-brand-700
    #    bg-pink-500   -> bg-brand-400
    perl -0777 -i -pe 's/^(.*animate-blob.*)\bbg-blue-500\b/$1bg-brand-500/gm' "$f"
    perl -0777 -i -pe 's/^(.*animate-blob.*)\bbg-purple-500\b/$1bg-brand-700/gm' "$f"
    perl -0777 -i -pe 's/^(.*animate-blob.*)\bbg-pink-500\b/$1bg-brand-400/gm' "$f"
done

echo "Done. Review the diff:"
git diff --stat || true
