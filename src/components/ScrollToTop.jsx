import { useEffect, useState } from "react";
import { HiArrowUp } from "react-icons/hi";

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 360);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onClick = () => {
        const reduced = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;
        window.scrollTo({ top: 0, behavior: reduced ? "instant" : "smooth" });
    };

    return (
        <button
            type="button"
            onClick={onClick}
            aria-label="Scroll to top"
            className={`fixed bottom-5 right-5 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full text-white shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 sm:bottom-6 sm:right-6 ${
                visible
                    ? "translate-y-0 opacity-100"
                    : "pointer-events-none translate-y-3 opacity-0"
            }`}
            style={{
                background:
                    "linear-gradient(135deg, #38bdf8 0%, #3b82f6 50%, #6366f1 100%)",
            }}
        >
            <HiArrowUp size={18} />
        </button>
    );
}
