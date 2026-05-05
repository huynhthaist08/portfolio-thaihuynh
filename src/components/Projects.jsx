import { Link } from "react-router-dom";
import { HiArrowUpRight } from "react-icons/hi2";
import { PROJECTS } from "../data/projects";

function ProjectCard({ project }) {
    const { slug, title, image, role } = project;

    return (
        <Link
            to={`/projects/${slug}`}
            className="group block overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm dark:border-white/10 dark:bg-bg-card"
        >
            {/* image */}
            <div className="relative aspect-video w-full overflow-hidden">
                <img
                    src={image.replace("../../public", "")}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <span className="absolute left-4 top-4 rounded-md bg-black/40 px-2 py-0.5 text-[10px] font-bold tracking-widest text-white/80 backdrop-blur-sm">
                    {role}
                </span>
            </div>

            {/* content */}
            <div className="flex items-center justify-between gap-4 p-4 sm:p-5">
                <div>
                    <p className="text-[10px] font-semibold tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
                        CLICK TO VIEW DETAILS
                    </p>
                    <p className="mt-1 text-sm font-bold tracking-wider text-neutral-900 dark:text-white">
                        {title}
                    </p>
                </div>

                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-neutral-700 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-blue-500 group-hover:text-blue-500 dark:border-white/10 dark:text-white dark:group-hover:border-blue-400 dark:group-hover:text-blue-400">
                    <HiArrowUpRight size={16} />
                </span>
            </div>
        </Link>
    );
}

export default function Projects() {
    return (
        <section
            id="projects"
            className="relative flex items-center justify-center min-h-screen px-4 py-20 sm:px-6 lg:px-8"
        >
            <div className="w-full max-w-5xl mx-auto">
                <h2 className="text-3xl font-extrabold tracking-wider text-center sm:text-4xl">
                    <span className="text-gradient-blue">PROJECTS</span>
                </h2>

                <div className="grid grid-cols-1 gap-6 mt-10 sm:gap-8 md:grid-cols-2">
                    {PROJECTS.map((p) => (
                        <ProjectCard key={p.id} project={p} />
                    ))}
                </div>
            </div>
        </section>
    );
}
