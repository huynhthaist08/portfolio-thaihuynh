export const PROJECTS = [
    {
        id: "airbnb",
        slug: "airbnb-clone-app",
        title: "Aibnb Clone",
        subtitle: "Airbnb Clone - Project Capstone CyberSoft",
        image: "../../public/images/airbnb.png",
        description:
            "A complete walkthrough of modern HTML — from semantic markup and accessibility best practices to forms, media, and the latest HTML5 APIs. The course focuses on building production-ready, SEO-friendly pages by mastering the building blocks every front-end engineer needs.",
        tech: [
            "TypeScript",
            "React",
            "Responsive",
            "Other libraries and frameworks",
        ],
        role: "Frontend",
        teamSize: "2",
        liveUrl: "#",
        repoUrl: "#",
    },
    {
        id: "todox",
        slug: "todox-app",
        title: "Todo X",
        subtitle: "Todo X App - Todo List App",
        image: "../../public/images/todox.png",
        description:
            "Go beyond the basics of CSS and master modern layout, animation and theming. We cover Flexbox, CSS Grid, custom properties, container queries and responsive design patterns used by the most polished websites today, with plenty of hands-on examples.",
        tech: [
            "JavaScript",
            "Node.js",
            "Express",
            "React",
            "MongoDB",
            "Other libraries and frameworks",
        ],
        role: "Fullstack",
        teamSize: "1",
        liveUrl: "#",
        repoUrl: "#",
    },
    {
        id: "teastationlandingpage",
        slug: "tea-station-landing-page",
        title: "Tea Station",
        subtitle: "Tea Staion - Landing Page",
        image: "../../public/images/tea-stating-landingpage.png",
        description:
            "Go beyond the basics of CSS and master modern layout, animation and theming. We cover Flexbox, CSS Grid, custom properties, container queries and responsive design patterns used by the most polished websites today, with plenty of hands-on examples.",
        tech: ["HTML", "CSS", "TailwindCSS", "JavaScript", "JQuery"],
        role: "Frontend",
        teamSize: "1",
        liveUrl: "#",
        repoUrl: "#",
    },
];

export function getProjectBySlug(slug) {
    return PROJECTS.find((p) => p.slug === slug);
}
