// ============================================================================
// FILE: src/pages/BlogPost.jsx
// ============================================================================
import { useParams, Link, Navigate } from "react-router-dom";
import {
    Calendar,
    Clock,
    ArrowLeft,
    Tag,
    Share2,
    User,
    ChevronRight,
} from "lucide-react";
import { useDarkMode } from "../hooks/useDarkMode";
import { getTheme } from "../utils/theme";
import { blogPosts } from "../data/blog";

const BlogPost = () => {
    const { darkMode } = useDarkMode();
    const theme = getTheme(darkMode);
    const { slug } = useParams();

    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    // Get related posts (same category, exclude current)
    const relatedPosts = blogPosts
        .filter((p) => p.category === post.category && p.id !== post.id)
        .slice(0, 3);

    // Format content with proper markdown-style rendering
    const formatContent = (content) => {
        const lines = content.trim().split("\n");
        const formatted = [];
        let inCodeBlock = false;
        let codeLines = [];

        lines.forEach((line, index) => {
            // Code blocks
            if (line.trim().startsWith("```")) {
                if (inCodeBlock) {
                    formatted.push(
                        <pre
                            key={`code-${index}`}
                            className={`${darkMode ? "bg-gray-900" : "bg-gray-100"} rounded-xl p-6 overflow-x-auto my-6 border ${theme.border}`}
                        >
                            <code
                                className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-700"}`}
                            >
                                {codeLines.join("\n")}
                            </code>
                        </pre>,
                    );
                    codeLines = [];
                    inCodeBlock = false;
                } else {
                    inCodeBlock = true;
                }
                return;
            }

            if (inCodeBlock) {
                codeLines.push(line);
                return;
            }

            // Headers
            if (line.startsWith("# ")) {
                formatted.push(
                    <h1
                        key={index}
                        className={`text-4xl md:text-5xl font-bold ${theme.text} mb-6 mt-8`}
                    >
                        {line.substring(2)}
                    </h1>,
                );
            } else if (line.startsWith("## ")) {
                formatted.push(
                    <h2
                        key={index}
                        className={`text-3xl md:text-4xl font-bold ${theme.text} mb-4 mt-8`}
                    >
                        {line.substring(3)}
                    </h2>,
                );
            } else if (line.startsWith("### ")) {
                formatted.push(
                    <h3
                        key={index}
                        className={`text-2xl font-bold ${theme.text} mb-3 mt-6`}
                    >
                        {line.substring(4)}
                    </h3>,
                );
            }
            // Lists
            else if (line.trim().startsWith("- ")) {
                formatted.push(
                    <li
                        key={index}
                        className={`${theme.textSecondary} mb-2 ml-6`}
                    >
                        {line.substring(2)}
                    </li>,
                );
            }
            // Paragraphs
            else if (line.trim()) {
                formatted.push(
                    <p
                        key={index}
                        className={`text-lg ${theme.textSecondary} leading-relaxed mb-6`}
                    >
                        {line}
                    </p>,
                );
            }
            // Empty lines
            else {
                formatted.push(<div key={index} className="h-4" />);
            }
        });

        return formatted;
    };

    return (
        <>
            {/* Header */}
            <section className="relative pt-32 pb-12 px-6 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div
                        className="absolute inset-0 opacity-20"
                        style={{
                            backgroundImage: `radial-gradient(circle at 50% 50%, ${darkMode ? "rgba(99, 102, 241, 0.15)" : "rgba(99, 102, 241, 0.08)"}, transparent 50%)`,
                        }}
                    />
                </div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <Link
                        to="/blog"
                        className={`inline-flex items-center gap-2 ${theme.textSecondary} hover:${theme.text} transition mb-8`}
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Blog
                    </Link>

                    <div className="flex flex-wrap items-center gap-3 mb-6">
                        <span
                            className={`px-4 py-1.5 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20`}
                        >
                            {post.category}
                        </span>
                        <div
                            className={`flex items-center gap-2 text-sm ${theme.textSecondary}`}
                        >
                            <Calendar className="w-4 h-4" />
                            {new Date(post.date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}
                        </div>
                        <div
                            className={`flex items-center gap-2 text-sm ${theme.textSecondary}`}
                        >
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                        </div>
                    </div>

                    <h1
                        className={`text-4xl md:text-5xl lg:text-6xl font-bold ${theme.text} mb-6`}
                    >
                        {post.title}
                    </h1>

                    <p className={`text-xl ${theme.textSecondary} mb-8`}>
                        {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pb-8 border-b border-gray-200 dark:border-gray-800">
                        <div className="flex items-center gap-3">
                            <div
                                className={`w-12 h-12 rounded-full bg-gradient-to-r ${theme.gradientPrimary} flex items-center justify-center`}
                            >
                                <User className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <div className={`font-semibold ${theme.text}`}>
                                    {post.author}
                                </div>
                                <div
                                    className={`text-sm ${theme.textSecondary}`}
                                >
                                    Developer & Founder
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={() => {
                                if (navigator.share) {
                                    navigator.share({
                                        title: post.title,
                                        text: post.excerpt,
                                        url: window.location.href,
                                    });
                                }
                            }}
                            className={`p-3 ${theme.cardBg} border ${theme.border} rounded-full hover:border-blue-500/50 transition`}
                            aria-label="Share post"
                        >
                            <Share2 className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Featured Image */}
            <section className="px-6 pb-12">
                <div className="max-w-5xl mx-auto">
                    <div className="rounded-3xl overflow-hidden">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="px-6 pb-12">
                <div className="max-w-4xl mx-auto">
                    <article
                        className={`prose prose-lg ${darkMode ? "prose-invert" : ""} max-w-none`}
                    >
                        {formatContent(post.content)}
                    </article>

                    {/* Tags */}
                    {post.tags && post.tags.length > 0 && (
                        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
                            <div className="flex items-center gap-3 flex-wrap">
                                <Tag
                                    className={`w-5 h-5 ${theme.textSecondary}`}
                                />
                                {post.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className={`px-3 py-1 ${theme.cardBg} rounded-lg text-sm ${theme.textSecondary} border ${theme.border}`}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
                <section className="px-6 pb-32">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-8">
                            <h2
                                className={`text-3xl font-bold ${theme.text} mb-2`}
                            >
                                Related Posts
                            </h2>
                            <p className={`${theme.textSecondary}`}>
                                More from {post.category}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {relatedPosts.map((relatedPost) => (
                                <Link
                                    key={relatedPost.id}
                                    to={`/blog/${relatedPost.slug}`}
                                    className={`${theme.cardBg} rounded-2xl overflow-hidden border ${theme.border} hover:border-blue-500/50 transition-all duration-300 group`}
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={relatedPost.image}
                                            alt={relatedPost.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <div
                                            className={`flex items-center gap-2 text-xs ${theme.textSecondary} mb-3`}
                                        >
                                            <Calendar className="w-3.5 h-3.5" />
                                            {new Date(
                                                relatedPost.date,
                                            ).toLocaleDateString("en-US", {
                                                year: "numeric",
                                                month: "short",
                                                day: "numeric",
                                            })}
                                        </div>
                                        <h3
                                            className={`text-lg font-bold ${theme.text} mb-2 group-hover:text-blue-500 transition-colors line-clamp-2`}
                                        >
                                            {relatedPost.title}
                                        </h3>
                                        <p
                                            className={`text-sm ${theme.textSecondary} line-clamp-2 mb-4`}
                                        >
                                            {relatedPost.excerpt}
                                        </p>
                                        <div className="flex items-center gap-2 text-sm text-blue-500 font-medium group-hover:gap-3 transition-all">
                                            Read More
                                            <ChevronRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default BlogPost;
