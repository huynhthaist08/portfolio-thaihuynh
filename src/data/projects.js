export const PROJECTS = [
    {
        id: "airbnb",
        slug: "airbnb-clone-app",
        title: "Aibnb Project Capstone Cybersoft",
        subtitle: "Airbnb Clone Project Capstone CyberSoft",
        image: "../../public/images/airbnb.png",
        description:
            "A complete walkthrough of modern HTML — from semantic markup and accessibility best practices to forms, media, and the latest HTML5 APIs. The course focuses on building production-ready, SEO-friendly pages by mastering the building blocks every front-end engineer needs.",
        tech: [
            "TypeScript",
            "React",
            "Responsive",
            "Other libraries and framework",
        ],
        liveUrl: "#",
        repoUrl: "#",
    },
    {
        id: "todox",
        slug: "todox-app",
        title: "Todo X App",
        subtitle: "Todo X App",
        image: "../../public/images/todox.png",
        description:
            "Go beyond the basics of CSS and master modern layout, animation and theming. We cover Flexbox, CSS Grid, custom properties, container queries and responsive design patterns used by the most polished websites today, with plenty of hands-on examples.",
        tech: [
            "JavaScript",
            "Node.js",
            "Express",
            "React",
            "MongoDB",
            "Other libraries and framework",
        ],
        liveUrl: "#",
        repoUrl: "#",
    },
    {
        id: "teastationlandingpage",
        slug: "tea-station-landing-page",
        title: "Tea Station Landing Page",
        subtitle: "Tea Staion Landing Page",
        image: "../../public/images/tea-stating-landingpage.png",
        description:
            "Go beyond the basics of CSS and master modern layout, animation and theming. We cover Flexbox, CSS Grid, custom properties, container queries and responsive design patterns used by the most polished websites today, with plenty of hands-on examples.",
        tech: ["HTML", "CSS", "TailwindCSS", "JavaScript", "JQuery"],
        liveUrl: "#",
        repoUrl: "#",
    },
];

export function getProjectBySlug(slug) {
    return PROJECTS.find((p) => p.slug === slug);
}
