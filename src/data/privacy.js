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
            "This policy explains how NF Software handles information submitted through this website (nf-software.com) and related communication channels.",
    },
    {
        number: "2",
        title: "Data We Collect  ",
        icon: Database,
        content:
            "If you submit a contact or project inquiry form, we may collect:",
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
        title: "How the Data Is Used",
        icon: FileText,
        content: "Information is used only to:",
        list: [
            "Respond to inquiries",
            "Prepare project proposals or estimates",
            "Communicate regarding ongoing work",
        ],
        negativeList: {
            title: "We do not:",
            items: [
                "Sell data",
                "Share data with advertisers",
                "Use data for automated decision-making",
            ],
        },
    },
    {
        number: "4",
        title: "Storage",
        icon: Globe,
        content:
            "Form submissions and communication records are stored in a private business inbox and/or secure server infrastructure located in the EU.",
    },
    {
        number: "5",
        title: "Access",
        icon: Lock,
        content:
            "Access is limited to the owner (Noam Favier). If external collaboration is required, access is granted only with your explicit permission.",
    },
    {
        number: "6",
        title: "Analytics",
        icon: Eye,
        content:
            "This website may use a privacy-friendly analytics tool (e.g., Plausible or Umami) to measure page usage.",
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
        content: "If you are in the EU, you may:",
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
