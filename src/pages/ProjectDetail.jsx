import { useEffect } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { getProjectBySlug } from "../data/projects";
import Navbar from "../components/NavBar";
import { HiArrowLeft } from "react-icons/hi";
import { HiChevronLeft } from "react-icons/hi2";
import { FiGithub } from "react-icons/fi";
import Button from "../components/ui/Button";

const ProjectDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const project = getProjectBySlug(slug);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
    }, [slug]);

    if (!project) return <Navigate to="/" replace />;

    const {
        title,
        subtitle,
        image,
        description,
        tech,
        liveUrl,
        repoUrl,
        role,
        teamSize,
    } = project;

    const goBack = () => navigate(-1);

    return (
        <>
            <Navbar />

            <main className="px-4 pt-28 pb-20 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    <button
                        onClick={goBack}
                        className="group inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-2 text-sm font-medium text-neutral-700 backdrop-blur transition-all hover:-translate-x-0.5 hover:border-black/20 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-neutral-200 dark:hover:bg-white/10"
                    >
                        <HiArrowLeft
                            size={16}
                            className="transition-transform group-hover:-translate-x-0.5"
                        />
                        Back
                    </button>

                    <div className="relative mt-6 aspect-video overflow-hidden rounded-2xl border border-black/10 shadow-soft dark:border-white/10">
                        <img
                            src={image}
                            alt={title}
                            className="absolute inset-0 w-full h-full object-cover"
                            onError={(e) => {
                                e.currentTarget.style.display = "none";
                            }}
                        />
                    </div>

                    <div className="mt-8">
                        <p className="text-xs font-semibold tracking-[0.25em] text-neutral-500 dark:text-neutral-400">
                            {subtitle}
                        </p>

                        <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
                            <span className="text-gradient-blue">{title}</span>
                        </h1>
                    </div>

                    <section className="mt-8">
                        <h2 className="text-lg font-bold sm:text-xl">
                            About this project
                        </h2>

                        <p className="mt-3 text-sm text-neutral-700 sm:text-base dark:text-neutral-300">
                            {description}
                        </p>

                        <div className="mt-3 flex items-center gap-2 text-sm text-neutral-700 sm:text-base dark:text-neutral-300">
                            <p>Role: {role}</p>
                            <span className="opacity-50">|</span>
                            <p>Team size: {teamSize}</p>
                        </div>
                    </section>

                    {tech?.length ? (
                        <section className="mt-8">
                            <h2 className="text-lg font-bold sm:text-xl">
                                Tech stack
                            </h2>

                            <ul className="mt-3 flex flex-wrap gap-2">
                                {tech.map((t) => (
                                    <li
                                        key={t}
                                        className="rounded-full border border-blue-500/40 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-700 dark:text-blue-300"
                                    >
                                        {t}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    ) : null}

                    <section className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
                        {liveUrl && (
                            <Button
                                as="a"
                                href={liveUrl}
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                Live Demo
                            </Button>
                        )}

                        {repoUrl && (
                            <Button
                                as="a"
                                href={repoUrl}
                                target="_blank"
                                rel="noreferrer noopener"
                                variant="outline"
                            >
                                <FiGithub size={16} />
                                Source Code
                            </Button>
                        )}
                    </section>

                    <div className="mt-12 text-center">
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:underline dark:text-blue-400"
                        >
                            <HiChevronLeft size={16} />
                            Back to home
                        </Link>
                    </div>
                </div>
            </main>
        </>
    );
};

export default ProjectDetail;
