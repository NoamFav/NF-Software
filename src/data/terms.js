import {
    FileText,
    Package,
    XCircle,
    Wrench,
    AlertTriangle,
    Shield,
    Scale,
} from "lucide-react";

export const sections = [
    {
        number: "1",
        title: "Overview",
        icon: FileText,
        content:
            "By using this website or purchasing any product, you agree to these Terms. Software provided by NF Software is built for professional use and should be used with technical awareness.",
    },
    {
        number: "2",
        title: "Licensing",
        icon: Package,
        content:
            "Unless stated otherwise, NF Software products are licensed, not sold.",
        subtitle: "A license grants you:",
        list: [
            "Permission to install and use the software on the number of devices included in your plan",
            "Access to updates within your license period (if annual), or the purchased version (if one-time license)",
        ],
        negativeList: {
            title: "You may not:",
            items: [
                "Re-sell, share, or redistribute licenses",
                "Repackage or rebrand NF Software products",
                "Reverse-engineer or bypass license verification mechanisms",
            ],
        },
    },
    {
        number: "3",
        title: "No Refunds",
        icon: XCircle,
        important: true,
        content:
            "Due to the nature of digital software delivery, all sales are final. Once a license or download key has been issued, no refunds or cancellations are provided.",
        note: "If you experience a technical issue, contact support — issues will be addressed promptly.",
    },
    {
        number: "4",
        title: "Support",
        icon: Wrench,
        content:
            "Support is offered through email and GitHub issue tracking where applicable. Response time is typically 24–48 hours.",
    },
    {
        number: "5",
        title: "Product Changes",
        icon: Package,
        content:
            "NF Software may update or modify products over time to improve performance, stability, or usability. Features may change or evolve — no guarantee is made that any specific feature will remain available indefinitely.",
    },
    {
        number: "6",
        title: "Disclaimer",
        icon: AlertTriangle,
        content:
            'NF Software is provided "as is" without warranties of any kind.',
        subtitle: "No guarantee is made regarding:",
        list: [
            "Uninterrupted access",
            "Correctness or reliability of results",
            "Compatibility with specific hardware or environments",
        ],
        note: "You are responsible for backing up your data and environments.",
    },
    {
        number: "7",
        title: "Limitation of Liability",
        icon: Shield,
        content: "To the fullest extent permitted by law:",
        list: [
            "NF Software is not liable for any direct, indirect, incidental, or consequential damages",
            "Use of the software is at your own risk",
        ],
    },
    {
        number: "8",
        title: "Governing Law",
        icon: Scale,
        content:
            "These Terms are governed by the laws of France and The Netherlands, depending on the registered point of contract. Disputes will be resolved through informal negotiation before any legal action.",
    },
];
