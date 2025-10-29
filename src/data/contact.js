// ============================================================================
// FILE: src/data/contact.js
// ============================================================================
import { Globe, Smartphone, Database, Code, Zap } from "lucide-react";

export const projectTypes = [
    { value: "web-app", label: "Web Application", icon: Globe },
    { value: "mobile-app", label: "Mobile App", icon: Smartphone },
    { value: "api", label: "API/Backend", icon: Database },
    { value: "fullstack", label: "Full-Stack Solution", icon: Code },
    { value: "other", label: "Other", icon: Zap },
];

export const commonFeatures = [
    "User Authentication",
    "Payment Integration",
    "Admin Dashboard",
    "Real-time Updates",
    "API Integration",
    "Database Design",
    "Cloud Deployment",
    "Mobile Responsive",
    "Analytics",
    "Email Notifications",
    "CMS Integration",
    "Third-party APIs",
];

export const teamSizes = [
    { value: "", label: "Select team size" },
    { value: "solo", label: "Solo Founder" },
    { value: "small", label: "2-10 people" },
    { value: "medium", label: "11-50 people" },
    { value: "large", label: "50+ people" },
];

export const timeframes = [
    { value: "", label: "Select timeframe" },
    { value: "urgent", label: "ASAP (1-2 weeks)" },
    { value: "short", label: "Short-term (1-2 months)" },
    { value: "medium", label: "Medium-term (3-6 months)" },
    { value: "long", label: "Long-term (6+ months)" },
    { value: "flexible", label: "Flexible" },
];

export const budgetRanges = [
    { value: "", label: "Select budget range" },
    { value: "micro", label: "€20 - €500 (Micro Project)" },
    { value: "tiny", label: "€500 - €1,000 (Small Script/Tool)" },
    { value: "small", label: "€1,000 - €5,000" },
    { value: "medium", label: "€5,000 - €15,000" },
    { value: "large", label: "€15,000 - €50,000" },
    { value: "enterprise", label: "€50,000+" },
    { value: "discuss", label: "Prefer to discuss" },
];

export const designOptions = [
    { value: "no", label: "No, need full design" },
    { value: "partial", label: "Have wireframes/mockups" },
    { value: "yes", label: "Complete design ready" },
];

export const hostingOptions = [
    { value: "unsure", label: "Not sure yet" },
    { value: "yes", label: "Yes, full deployment" },
    { value: "no", label: "No, I'll handle it" },
];

export const faqData = [
    {
        question: "What's included in your proposal?",
        answer: "You'll receive a detailed breakdown including project timeline with milestones, comprehensive feature list, technology stack recommendations, pricing in EUR (with payment schedule options), and estimated delivery dates. I also include potential challenges and how we'll address them.",
    },
    {
        question: "How do you calculate pricing?",
        answer: "Pricing is based on project complexity, required features, timeline, and ongoing support needs. I offer both fixed-price packages for well-defined projects and flexible hourly rates for evolving requirements. All prices are in EUR and include regular check-ins and revisions.",
    },
    {
        question:
            "What information helps you provide the most accurate estimate?",
        answer: "The more details, the better! Specific feature requirements, user flow descriptions, design references, technical constraints, target launch date, and any existing systems to integrate with. Wireframes or mockups are incredibly helpful but not required.",
    },
    {
        question: "Do you work with startups on equity/revenue share?",
        answer: "I primarily work on paid projects, but I'm open to discussing hybrid arrangements (partial payment + equity) for exceptional early-stage startups with strong potential. This is evaluated case-by-case.",
    },
    {
        question: "What's your development process?",
        answer: "I follow an agile approach with 1-2 week sprints, regular demos, and iterative feedback. You'll have access to staging environments, GitHub repositories, and regular progress updates. Communication is key - I use Slack, email, and video calls as needed.",
    },
    {
        question: "Do you provide post-launch support?",
        answer: "Yes! I offer flexible maintenance packages including bug fixes, security updates, performance optimization, and feature additions. We can discuss ongoing support needs during the proposal phase.",
    },
    {
        question: "Can you work with my existing development team?",
        answer: "Absolutely! I'm experienced in collaborating with in-house teams, providing technical leadership, code reviews, or handling specific components. I adapt to your team's workflow and tools.",
    },
    {
        question: "What if my project requirements change?",
        answer: "Change is natural in software development. For fixed-price projects, we'll discuss scope adjustments and pricing impacts. For hourly projects, you have full flexibility to pivot as needed. Clear communication ensures we stay aligned.",
    },
    {
        question: "What about micro projects and automation scripts?",
        answer: "I absolutely take on smaller projects! Whether it's a simple automation script (€20-200), a browser extension (€200-500), or a quick data processing tool, I'm happy to help. These projects typically have a faster turnaround (1-7 days) and are perfect for testing the waters before larger commitments.",
    },
];

export const contactInfo = {
    email: "contact@nf-software.com",
    github: "https://github.com/NoamFav",
    responseTime: "24-48 hours",
    location: "Europe (CET/CEST)",
};

// Form submission endpoint - replace with your actual endpoint
export const FORM_ENDPOINT = "https://nf-software-server.fly.dev/submit";
