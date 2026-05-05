import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { OWNER_EMAIL, sendContactEmail } from "../lib/email";
import {
    HiOutlineClock,
    HiOutlineDeviceMobile,
    HiOutlineLocationMarker,
    HiOutlineMail,
} from "react-icons/hi";
import Button from "./ui/Button";
import { contactSchema } from "../lib/contactSchema";

const PHONE = "0867 925 270";
const LOCATION = "Ho Chi Minh City, Vietnam";
const AVAILABILITY = "Always available";

const SOCIALS = [
    {
        Icon: FaFacebook,
        label: "Facebook",
        href: "https://www.facebook.com/thaihuynhhh",
    },
    {
        Icon: FaGithub,
        label: "GitHub",
        href: "https://github.com/huynhthaist08",
    },
    {
        Icon: FaLinkedinIn,
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/huynh-thai-thach-lam-05968336a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    },
];

function InfoRow({ Icon, children }) {
    return (
        <li className="flex items-start gap-3">
            <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center text-blue-500 dark:text-blue-400">
                <Icon size={20} />
            </span>
            <span className="text-sm leading-6 text-neutral-700 sm:text-base dark:text-neutral-200">
                {children}
            </span>
        </li>
    );
}

export default function Contact() {
    const [status, setStatus] = useState({ type: "idle", message: "" });

    const {
        register,
        handleSubmit,
        reset,
        clearErrors,
        formState: { errors, isSubmitting, isValid, touchedFields },
    } = useForm({
        resolver: zodResolver(contactSchema),
        mode: "onTouched",
    });

    useEffect(() => {
        const hasErrors = Object.keys(errors).length > 0;
        if (!hasErrors) return;

        const timer = setTimeout(() => {
            clearErrors();
        }, 3000);

        return () => clearTimeout(timer);
    }, [errors, clearErrors]);

    const onSubmit = async (data) => {
        setStatus({ type: "idle", message: "" });

        try {
            await sendContactEmail(data);

            setStatus({
                type: "success",
                message: "Message sent successfully!",
            });

            // clear sau 5s
            setTimeout(() => {
                setStatus({ type: "idle", message: "" });
            }, 3000);

            reset();
        } catch (err) {
            const fallback = "Failed to send. Try again.";
            const msg = err?.message?.includes("EmailJS is not configured")
                ? "Email service is not configured yet. Please contact me directly."
                : fallback;

            setStatus({ type: "error", message: msg });
        }
    };

    const baseInputClass =
        "w-full rounded-xl border bg-transparent px-5 py-4 text-sm text-neutral-900 placeholder:text-blue-700/60 focus:outline-none focus:ring-2 dark:text-white dark:placeholder:text-blue-300/60";

    const inputClassFor = (field) => {
        const hasError = Boolean(touchedFields[field] && errors[field]);

        return `${baseInputClass} ${
            hasError
                ? "border-red-500/80 focus:border-red-400 focus:ring-red-500/60"
                : "border-blue-500/70 focus:border-blue-400 focus:ring-blue-500/60"
        }`;
    };

    const fieldErrorId = (field) => `contact-${field}-error`;

    return (
        <section
            id="contact"
            className="relative flex flex-col min-h-screen px-4 pt-20 pb-6 sm:px-6 lg:px-8"
        >
            <div className="flex items-center justify-center flex-1 w-full">
                <div className="w-full max-w-5xl mx-auto">
                    <h2 className="text-3xl font-extrabold tracking-tight text-center sm:text-4xl">
                        <span className="text-gradient-blue">CONTACT</span>
                    </h2>

                    <div className="grid grid-cols-1 gap-10 mt-12 md:grid-cols-2 md:gap-12">
                        <div className="flex flex-col justify-between gap-10 items-center md:items-start text-center md:text-left">
                            <ul className="flex flex-col gap-5 md:items-start">
                                <InfoRow Icon={HiOutlineMail}>
                                    <a
                                        href={`mailto:${OWNER_EMAIL}`}
                                        className="break-all hover:text-blue-500 dark:hover:text-blue-400"
                                    >
                                        {OWNER_EMAIL}
                                    </a>
                                </InfoRow>

                                <InfoRow Icon={HiOutlineDeviceMobile}>
                                    <a
                                        href={`tel:${PHONE.replace(/\s/g, "")}`}
                                        className="hover:text-blue-500 dark:hover:text-blue-400"
                                    >
                                        {PHONE}
                                    </a>
                                </InfoRow>

                                <InfoRow Icon={HiOutlineLocationMarker}>
                                    {LOCATION}
                                </InfoRow>

                                <InfoRow Icon={HiOutlineClock}>
                                    {AVAILABILITY}
                                </InfoRow>
                            </ul>

                            <ul className="flex items-center justify-center md:justify-start gap-4">
                                {SOCIALS.map(({ Icon, label, href }) => (
                                    <li key={label}>
                                        <a
                                            href={href}
                                            target="_blank"
                                            rel="noreferrer noopener"
                                            aria-label={label}
                                            className="inline-flex items-center justify-center h-9 w-9 rounded-full text-neutral-700 transition-all hover:scale-110 hover:text-blue-500 dark:text-neutral-200 dark:hover:text-blue-400"
                                        >
                                            <Icon size={22} />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            noValidate
                            className="flex flex-col gap-5"
                        >
                            <div className="flex flex-col gap-1.5">
                                <input
                                    type="text"
                                    placeholder="Names"
                                    autoComplete="name"
                                    disabled={isSubmitting}
                                    {...register("name")}
                                    className={inputClassFor("name")}
                                />
                                {errors.name && (
                                    <p className="px-1 text-xs font-medium text-red-500 dark:text-red-400">
                                        {errors.name.message}
                                    </p>
                                )}
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    autoComplete="email"
                                    disabled={isSubmitting}
                                    {...register("email")}
                                    className={inputClassFor("email")}
                                />
                                {errors.email && (
                                    <p className="px-1 text-xs font-medium text-red-500 dark:text-red-400">
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <textarea
                                    rows={6}
                                    placeholder="Message"
                                    disabled={isSubmitting}
                                    {...register("message")}
                                    className={`${inputClassFor("message")} resize-y`}
                                />
                                {errors.message && (
                                    <p className="px-1 text-xs font-medium text-red-500 dark:text-red-400">
                                        {errors.message.message}
                                    </p>
                                )}
                            </div>

                            {status.message && (
                                <p
                                    className={`text-sm font-medium ${
                                        status.type === "success"
                                            ? "text-emerald-500"
                                            : "text-red-500"
                                    }`}
                                >
                                    {status.message}
                                </p>
                            )}

                            <div className="flex justify-center mt-2">
                                <Button
                                    type="submit"
                                    size="lg"
                                    disabled={isSubmitting || !isValid}
                                >
                                    {isSubmitting
                                        ? "Sending..."
                                        : "Send Message"}
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
