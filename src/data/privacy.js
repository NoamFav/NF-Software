import {
    Eye,
    Database,
    FileText,
    Globe,
    Shield,
    Lock,
    Clock,
} from "lucide-react";

export const sections = [
    {
        number: "1",
        title: "Overview",
        icon: Eye,
        content:
            "This Privacy Policy explains how NF Software collects, uses, and protects personal information submitted through this website (nf-software.com) and related services.",
    },
    {
        number: "2",
        title: "What Data We Collect",
        icon: Database,
        content: "When you submit the contact form, we may collect:",
        list: [
            "Name (if provided)",
            "Email address",
            "Project details or message content",
            "Company / Team size / Budget (if provided)",
        ],
        note: "No account creation is required. No tracking of sensitive personal data is performed.",
    },
    {
        number: "3",
        title: "How We Use This Data",
        icon: FileText,
        content: "We use the submitted information solely to:",
        list: [
            "Respond to inquiries",
            "Prepare project proposals or estimates",
            "Communicate regarding ongoing work",
        ],
        negativeList: {
            title: "We do not:",
            items: [
                "Sell personal data",
                "Share personal data with advertisers",
                "Use personal data for automated decision-making",
            ],
        },
    },
    {
        number: "4",
        title: "Where Data Is Stored",
        icon: Globe,
        content:
            "Form submissions may be processed via NF Software's backend server hosted in Europe (CET/CEST region). Emails are stored in a private business inbox managed by the owner.",
    },
    {
        number: "5",
        title: "Who Has Access",
        icon: Lock,
        content:
            "Only the owner (Noam Favier) has access to the stored communication. No employees or third-party contractors have access unless explicitly required for a client project, and only with permission.",
    },
    {
        number: "6",
        title: "Analytics",
        icon: Eye,
        content:
            "This website may use a privacy-friendly analytics tool (such as Plausible or Umami), which collects:",
        list: ["Page views", "Browser/device type", "Referring pages"],
        note: "It does not collect identifying information, IP addresses, or cookies. No tracking for advertising or behavioral profiling is performed.",
    },
    {
        number: "7",
        title: "Cookies",
        icon: Shield,
        content:
            "This website does not use tracking cookies. If analytics are enabled, they are cookie-free.",
    },
    {
        number: "8",
        title: "Data Retention",
        icon: Clock,
        content:
            "Emails and project inquiries may be stored for future reference. You may request deletion at any time.",
        cta: {
            text: "To request deletion, email:",
            email: "contact@nf-software.com",
        },
    },
    {
        number: "9",
        title: "Your Rights (EU GDPR)",
        icon: Shield,
        content: "If you are located in the EU, you have the right to:",
        list: [
            "Request access to your stored data",
            "Request correction or deletion",
            "Restrict or object to processing",
            "Request data export (where applicable)",
        ],
    },
    {
        number: "10",
        title: "Third-Party Links",
        icon: Globe,
        content:
            "Some pages may link to GitHub, product documentation, or demos. External websites are not covered by this Privacy Policy.",
    },
    {
        number: "11",
        title: "Changes",
        icon: FileText,
        content:
            "Any updates to this Privacy Policy will be posted on this page with a revised date.",
    },
];
