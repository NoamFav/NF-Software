// ============================================================================
// FILE: src/pages/Blog.jsx
// ============================================================================
import { useState } from "react";
import {
    Calendar,
    Clock,
    ArrowRight,
    Sparkles,
    BookOpen,
    Tag,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useDarkMode } from "../hooks/useDarkMode";
import { getTheme } from "../utils/theme";
import { blogPosts, categories } from "../data/blog";

const Blog = () => {
    const { darkMode } = useDarkMode();
    const theme = getTheme(darkMode);
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredPosts =
        selectedCategory === "All"
            ? blogPosts
            : blogPosts.filter((post) => post.category === selectedCategory);

    const featuredPost = blogPosts.find((post) => post.featured);

    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div
                        className="absolute inset-0 opacity-30"
                        style={{
                            backgroundImage: `radial-gradient(circle at 50% 50%, ${darkMode ? "rgba(99, 102, 241, 0.15)" : "rgba(99, 102, 241, 0.08)"}, transparent 50%)`,
                        }}
                    />
                    <div
                        className={`absolute top-1/4 left-1/4 w-96 h-96 ${theme.blobBlue} rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob`}
                    />
                    <div
                        className={`absolute top-1/3 right-1/4 w-96 h-96 ${theme.blobPurple} rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000`}
                    />
                    <div
                        className={`absolute bottom-1/4 left-1/2 w-96 h-96 ${theme.blobPink} rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000`}
                    />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <div
                            className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${theme.badgeGradient} rounded-full border ${theme.blobBlue}/20 mb-6 animate-fade-in`}
                        >
                            <Sparkles
                                className={`w-4 h-4 ${theme.textBlue} animate-pulse`}
                            />
                            <span className="text-sm font-medium">
                                Insights & Updates
                            </span>
                        </div>
                        <h1
                            className={`text-5xl md:text-6xl font-bold ${theme.text} mb-6`}
                        >
                            Blog
                        </h1>
                        <p
                            className={`text-xl ${theme.textSecondary} max-w-3xl mx-auto`}
                        >
                            Technical deep dives, product updates, and thoughts
                            on building better software.
                        </p>
                    </div>
                </div>
            </section>

            {/* Featured Post */}
            {featuredPost && (
                <section className="px-6 pb-12">
                    <div className="max-w-7xl mx-auto">
                        <Link
                            to={`/blog/${featuredPost.slug}`}
                            data-animate
                            className={`block ${theme.cardBg} rounded-3xl overflow-hidden border ${theme.border} hover:border-blue-500/50 transition-all duration-300 group`}
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                                <div className="relative h-64 lg:h-auto overflow-hidden">
                                    <img
                                        src={featuredPost.image}
                                        alt={featuredPost.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold rounded-full">
                                            Featured
                                        </span>
                                    </div>
                                </div>
                                <div className="p-8 lg:p-12 flex flex-col justify-center">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span
                                            className={`px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20`}
                                        >
                                            {featuredPost.category}
                                        </span>
                                        <div
                                            className={`flex items-center gap-2 text-sm ${theme.textSecondary}`}
                                        >
                                            <Calendar className="w-4 h-4" />
                                            {new Date(
                                                featuredPost.date,
                                            ).toLocaleDateString("en-US", {
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric",
                                            })}
                                        </div>
                                    </div>
                                    <h2
                                        className={`text-3xl md:text-4xl font-bold ${theme.text} mb-4 group-hover:text-blue-500 transition-colors`}
                                    >
                                        {featuredPost.title}
                                    </h2>
                                    <p
                                        className={`text-lg ${theme.textSecondary} mb-6`}
                                    >
                                        {featuredPost.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <div
                                            className={`flex items-center gap-2 text-sm ${theme.textSecondary}`}
                                        >
                                            <Clock className="w-4 h-4" />
                                            {featuredPost.readTime}
                                        </div>
                                        <div className="flex items-center gap-2 text-blue-500 font-medium group-hover:gap-4 transition-all">
                                            Read More
                                            <ArrowRight className="w-5 h-5" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </section>
            )}

            {/* Category Filter */}
            <section className="px-6 pb-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                                    selectedCategory === category
                                        ? `bg-gradient-to-r ${theme.gradientPrimary} text-white shadow-lg`
                                        : `${theme.cardBg} ${theme.textSecondary} border ${theme.border} ${theme.hoverBg}`
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="px-6 pb-32">
                <div className="max-w-7xl mx-auto">
                    {filteredPosts.length === 0 ? (
                        <div
                            className={`text-center py-20 ${theme.textSecondary}`}
                        >
                            <BookOpen className="w-16 h-16 mx-auto mb-4 opacity-50" />
                            <p className="text-lg">
                                No posts found in this category.
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredPosts.map((post, index) => (
                                <Link
                                    key={post.id}
                                    to={`/blog/${post.slug}`}
                                    data-animate
                                    className={`${theme.cardBg} rounded-2xl overflow-hidden border ${theme.border} hover:border-blue-500/50 transition-all duration-300 group flex flex-col`}
                                    style={{
                                        animationDelay: `${index * 100}ms`,
                                    }}
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        {post.featured && (
                                            <div className="absolute top-3 left-3">
                                                <span className="px-2 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold rounded-full">
                                                    Featured
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span
                                                className={`px-2 py-1 rounded-md text-xs font-medium bg-blue-500/10 text-blue-400`}
                                            >
                                                {post.category}
                                            </span>
                                            <div
                                                className={`flex items-center gap-1.5 text-xs ${theme.textSecondary}`}
                                            >
                                                <Calendar className="w-3.5 h-3.5" />
                                                {new Date(
                                                    post.date,
                                                ).toLocaleDateString("en-US", {
                                                    year: "numeric",
                                                    month: "short",
                                                    day: "numeric",
                                                })}
                                            </div>
                                        </div>
                                        <h3
                                            className={`text-xl font-bold ${theme.text} mb-3 group-hover:text-blue-500 transition-colors line-clamp-2`}
                                        >
                                            {post.title}
                                        </h3>
                                        <p
                                            className={`text-sm ${theme.textSecondary} mb-4 line-clamp-3 flex-grow`}
                                        >
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-800">
                                            <div
                                                className={`flex items-center gap-1.5 text-xs ${theme.textSecondary}`}
                                            >
                                                <Clock className="w-3.5 h-3.5" />
                                                {post.readTime}
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-blue-500 font-medium group-hover:gap-3 transition-all">
                                                Read
                                                <ArrowRight className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Newsletter CTA */}
            <section data-animate className="relative py-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <div
                        className={`${theme.cardBg} rounded-3xl p-12 text-center border ${theme.border} relative overflow-hidden`}
                    >
                        <div className="absolute inset-0 opacity-10">
                            <div
                                className="absolute inset-0"
                                style={{
                                    backgroundImage: `radial-gradient(circle at 2px 2px, ${darkMode ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.1)"} 1px, transparent 0)`,
                                    backgroundSize: "32px 32px",
                                }}
                            />
                        </div>

                        <div className="relative z-10">
                            <div
                                className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${theme.badgeGradient} rounded-full border border-blue-500/20 mb-6`}
                            >
                                <BookOpen className="w-4 h-4 text-blue-500" />
                                <span className="text-sm font-medium">
                                    Stay Updated
                                </span>
                            </div>

                            <h2
                                className={`text-3xl md:text-4xl font-bold ${theme.text} mb-4`}
                            >
                                Never miss a post
                            </h2>

                            <p
                                className={`text-lg ${theme.textSecondary} max-w-2xl mx-auto mb-8`}
                            >
                                Get notified when we publish new technical
                                articles, product updates, and deep dives.
                            </p>

                            <Link
                                to="/contact"
                                className={`inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r ${theme.gradientPrimary} text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105`}
                            >
                                Get in Touch
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Blog;
