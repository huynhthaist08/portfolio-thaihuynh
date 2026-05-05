export const PROJECTS = [
    {
        id: "airbnb",
        slug: "airbnb-clone-app",
        title: "Aibnb Clone",
        subtitle: "Airbnb Clone - Project Capstone CyberSoft",
        image: "/images/airbnb.png",
        description:
            "A comprehensive vacation rental web application designed to replicate the Airbnb user experience. As a Capstone Project for the Frontend Bootcamp at Cybersoft Academy, it focuses on managing complex data flows, integrating smart search, location-based filtering, and real-time booking processes. The project leverages a robust RESTful API system, fetching and synchronizing data from a provided Swagger backend.",
        tech: [
            "TypeScript",
            "React",
            "TailwindCSS",
            "RESTful APIs",
            "Other libraries and frameworks",
        ],
        role: "Frontend",
        teamSize: "2",
        liveUrl: "https://project-capstone-airbnb.vercel.app/",
        repoUrl: "https://github.com/huynhthaist08/project_capstone_airbnb",
    },
    {
        id: "todox",
        slug: "todox-app",
        title: "Todo X",
        subtitle: "Todo X App - Todo List App",
        image: "/images/todox.png",
        description:
            "A full-featured task management application built using the MERN stack. The project implements secure user authentication, personalized task dashboards, and full CRUD functionality. It demonstrates proficiency in database schema design with MongoDB and seamless state synchronization between the React frontend and Express backend.",
        tech: [
            "JavaScript",
            "Node.js",
            "Express",
            "MongoDB",
            "React",
            "TailwindCSS",
            "Other libraries and frameworks",
        ],
        role: "Fullstack",
        teamSize: "1",
        liveUrl: "https://todox-mern-stack-app.onrender.com/",
        repoUrl: "https://github.com/huynhthaist08/todox-mern-stack-app",
    },
    {
        id: "teastationlandingpage",
        slug: "tea-station-landing-page",
        title: "Tea Station",
        subtitle: "Tea Staion - Landing Page",
        image: "/images/tea-stating-landingpage.png",
        description:
            "A visually elegant landing page for a boutique tea shop, focusing on high-fidelity UI implementation and smooth user interactions. This project showcases advanced CSS techniques, responsive design patterns to ensure a seamless experience across all screen sizes, and the integration of jQuery for polished interactive elements.",
        tech: [
            "HTML",
            "CSS",
            "TailwindCSS",
            "JavaScript",
            "JQuery",
            "Responsive design",
        ],
        role: "Frontend",
        teamSize: "1",
        liveUrl: "https://huynhthaist08.github.io/tea-station-landingpage/",
        repoUrl: "https://github.com/huynhthaist08/tea-station-landingpage",
    },
];

export function getProjectBySlug(slug) {
    return PROJECTS.find((p) => p.slug === slug);
}
