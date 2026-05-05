import { EXPERIENCES } from "../data/experiences";

function ExperienceItem({ item }) {
    const { role, level, date, description, Icon } = item;
    return (
        <article className="group rounded-2xl border border-transparent p-4 transition-all hover:border-black/10 hover:bg-black/5 sm:p-6 dark:hover:border-white/10 dark:hover:bg-white/3">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-center gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center">
                        <Icon size={28} />
                    </span>
                    <div className="flex items-center gap-3 text-base font-bold sm:text-lg">
                        <h3>{role}</h3>
                        <span className="opacity-50">|</span>
                        <p>{level}</p>
                    </div>
                </div>
                <p className="text-xs ml-14 text-neutral-500 sm:ml-0 sm:text-sm dark:text-neutral-400">
                    {date}
                </p>
            </div>
            <p className="mt-3 text-sm leading-relaxed ml-14 text-neutral-600 dark:text-neutral-400">
                {description}
            </p>
        </article>
    );
}

const Experience = () => {
    return (
        <section
            id="experience"
            className="relative flex items-center justify-center min-h-screen px-4 py-20 sm:px-6 lg:px-8"
        >
            <div className="w-full max-w-4xl mx-auto">
                <h2 className="text-3xl font-extrabold tracking-wider text-center sm:text-4xl">
                    <span className="text-gradient-blue">EXPERIENCE</span>
                </h2>

                <div className="flex flex-col gap-2 mt-10 sm:gap-4">
                    {EXPERIENCES.map((item) => (
                        <ExperienceItem key={item.company} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
