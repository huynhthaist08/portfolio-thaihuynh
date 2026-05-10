import {
    SiClaude,
    SiCss,
    SiExpress,
    SiGithub,
    SiHtml5,
    SiJavascript,
    SiMongodb,
    SiNextdotjs,
    SiNodedotjs,
    SiPostgresql,
    SiReact,
    SiTailwindcss,
    SiTypescript,
} from "react-icons/si";
import Avatar from "./Avatar";
import Button from "./ui/Button";
import { useEffect, useState } from "react";

const ADAPTIVE_ICON_CLASS = "text-neutral-900 dark:text-white";

const TECH_ICONS = [
    { Icon: SiHtml5, label: "HTML5", color: "#e34f26" },
    { Icon: SiCss, label: "CSS3", color: "#1572b6" },
    { Icon: SiJavascript, label: "JavaScript", color: "#f7df1e" },
    { Icon: SiTypescript, label: "TypeScript", color: "#3178c6" },
    { Icon: SiTailwindcss, label: "TailwindCSS", color: "#38bdf8" },
    { Icon: SiReact, label: "React", color: "#61dafb" },
    { Icon: SiNextdotjs, label: "Next.js", className: ADAPTIVE_ICON_CLASS },
    { Icon: SiGithub, label: "GitHub", className: ADAPTIVE_ICON_CLASS },
    { Icon: SiNodedotjs, label: "Node.js", color: "#5fa04e" },
    { Icon: SiExpress, label: "Express.js", className: ADAPTIVE_ICON_CLASS },
    { Icon: SiMongodb, label: "MongoDB", color: "#47a248" },
    { Icon: SiPostgresql, label: "PostgreSQL", color: "#4169e1" },
    { Icon: SiClaude, label: "Claude", color: "#d97757" },
];

const Hero = () => {
    const [open, setOpen] = useState(false);

    // xử lý disable scroll khi mở popup download
    useEffect(() => {
        if (open) {
            // khóa scroll
            document.body.style.overflow = "hidden";
        } else {
            // mở lại scroll
            document.body.style.overflow = "";
        }
        // cleanup (tránh bug khi unmount)
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <section
            id="home"
            className="relative flex items-center justify-center min-h-screen px-4 pb-20 pt-28 sm:px-6 lg:px-8"
        >
            <div className="flex flex-col items-center w-full max-w-3xl mx-auto text-center">
                <Avatar size={220} />

                <h1 className="mt-10 animate-fadeUp text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
                    I do code and
                    <br />
                    make content{" "}
                    <span className="text-gradient-blue">about it!</span>
                </h1>

                <p className="max-w-xl mt-6 text-sm leading-relaxed animate-fadeUp text-neutral-600 sm:text-base dark:text-neutral-400">
                    Hi, I’m{" "}
                    <span className="text-gradient-emerald-sea">
                        Thach Lam Huynh Thai
                    </span>
                    , a{" "}
                    <span className="text-gradient-emerald-sea-2">
                        Front-End Developer
                    </span>{" "}
                    based in Ho Chi Minh City, Vietnam. I’m always learning,
                    turning ideas into modern, user-friendly interfaces, and
                    growing through real projects.
                </p>

                <div className="flex flex-col items-center gap-3 mt-8 sm:flex-row sm:gap-4">
                    <Button as="a" href="#contact" size="lg">
                        Get In Touch
                    </Button>

                    <Button
                        variant="outline"
                        size="lg"
                        onClick={() => setOpen(true)}
                    >
                        Download CV
                    </Button>

                    {open && (
                        <div
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
                            onClick={() => setOpen(false)}
                        >
                            {/* modal */}
                            <div
                                onClick={(e) => e.stopPropagation()}
                                className="w-full max-w-sm p-4 rounded-xl border shadow-2xl  bg-white/80 backdrop-blur-xl  dark:bg-neutral-900/80 dark:border-white/10 sm:max-w-md sm:p-6sm:rounded-2xl"
                            >
                                {/* title */}
                                <h3 className="text-base font-semibold text-neutral-900 sm:text-lg dark:text-white">
                                    Download CV
                                </h3>

                                {/* description */}
                                <p className="mt-2 text-xs text-neutral-600 sm:text-sm dark:text-neutral-400">
                                    Are you sure you want to download this CV?
                                </p>

                                {/* actions */}
                                <div className="flex flex-col-reverse gap-2 mt-5 sm:flex-row sm:justify-end sm:gap-3 sm:mt-6">
                                    {/* cancel */}
                                    <Button
                                        variant="outline"
                                        onClick={() => setOpen(false)}
                                        className="w-full sm:w-auto"
                                    >
                                        Cancel
                                    </Button>

                                    {/* confirm */}
                                    <Button
                                        onClick={() => {
                                            const link =
                                                document.createElement("a");
                                            link.href =
                                                "/pdf/THACH-LAM-HUYNH-THAI-FRONTEND-CV.pdf";
                                            link.download =
                                                "THACH-LAM-HUYNH-THAI-FRONTEND-CV.pdf";
                                            link.click();

                                            setOpen(false);
                                        }}
                                        className="w-full sm:w-auto"
                                    >
                                        Download
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* <Button
                        as="a"
                        href="../../public/pdf/THACH-LAM-HUYNH-THAI-FRESHER-FRONTEND-DEVELOPER-CV-2026.pdf"
                        download=""
                        target="_blank"
                        variant="outline"
                        size="lg"
                        // onClick={(e) => e.preventDefault()}
                    >
                        Download CV
                    </Button> */}
                </div>

                <div className="w-full mt-16">
                    <p className="mb-6 text-xs font-semibold tracking-[0.25em] text-neutral-500 dark:text-neutral-400">
                        EXPERIENCE WITH
                    </p>
                    <ul className="flex flex-wrap items-center justify-center gap-3 sm:gap-5">
                        {TECH_ICONS.map(({ Icon, label, color, className }) => (
                            <li key={label}>
                                <span
                                    title={label}
                                    aria-label={label}
                                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-black/10 bg-white shadow-sm transition-transform hover:-translate-y-0.5 hover:scale-105 sm:h-14 sm:w-14 dark:border-white/10 dark:bg-bg-card"
                                >
                                    <Icon
                                        size={24}
                                        color={color}
                                        className={className}
                                    />
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Hero;
