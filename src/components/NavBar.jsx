import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import useActiveSection from "../hooks/useActiveSection";

// danh sách link navbar
const NAV_LINKS = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact" },
];

// lấy danh sách id (['home', 'projects',...])
const NAV_IDS = NAV_LINKS.map((l) => l.id);

// component logo (click để về top)
function Logo({ isHome, onClick }) {
    return (
        <Link
            to="/"
            aria-label="Go to top"
            onClick={(e) => {
                // đóng menu mobile nếu có
                onClick?.();

                // nếu đang ở trang home -> scroll lên top thay vì reload
                if (isHome) {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                }
            }}
            className="flex items-center gap-2"
        >
            <span
                style={{ fontFamily: "'Pacifico', cursive" }}
                className="text-2xl tracking-tight text-neutral-900 dark:text-white"
            >
                thaihuynh
            </span>
        </Link>
    );
}

// component từng item trong navbar
function NavItem({ link, isHome, isActive, onNavigate, className }) {
    return (
        <Link
            // link dạng anchor (#section)
            to={`/#${link.id}`}
            // nếu đang ở home thì replace history (tránh push thêm)
            replace={isHome}
            onClick={(e) => {
                // đóng menu mobile
                onNavigate?.();
                // nếu đang ở home -> scroll mượt tới section
                if (isHome) {
                    e.preventDefault();
                    document
                        .getElementById(link.id)
                        ?.scrollIntoView({ behavior: "smooth" });
                }
            }}
            // class phụ thuộc active hay không
            className={className(isActive)}
        >
            {link.label}
        </Link>
    );
}

// class dành cho desktop
const desktopItemClass = (active) =>
    `text-sm font-medium transition-colors ${
        active
            ? "text-neutral-900 dark:text-white"
            : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
    }`;

// class cho mobile
const mobileItemClass = (active) =>
    `block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
        active
            ? "bg-black/5 text-neutral-900 dark:bg-white/5 dark:text-white"
            : "text-neutral-600 hover:bg-black/5 dark:text-neutral-300 dark:hover:bg-white/5"
    }`;

export default function Navbar() {
    // lấy path hiện tại (/ hoặc /about...)
    const { pathname } = useLocation();

    // kiểm tra có phải trang home không
    const isHome = pathname === "/";

    // state kiểm tra đã scroll chưa (để đổi background navbar)
    const [scrolled, setScrolled] = useState(false);

    // state mở/đóng menu mobile
    const [open, setOpen] = useState(false);

    // lấy section active (chỉ khi đang ở home)
    const active = useActiveSection(NAV_IDS, isHome);

    useEffect(() => {
        // khi scroll xuống -> 8px -> đổi trạng thái
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();

        // lắng nghe scroll (passive để tối ưu performance)
        window.addEventListener("scroll", onScroll, { passive: true });

        // cleanup
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // đóng menu mobile
    const closeMenu = () => setOpen(false);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter] duration-300 ${
                scrolled
                    ? "bg-white/70 backdrop-blur-md dark:bg-black/40"
                    : "bg-transparent"
            }`}
        >
            <nav className="flex items-center justify-between h-16 max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
                <Logo isHome={isHome} onClick={closeMenu} />

                <ul className="items-center hidden gap-8 md:flex">
                    {NAV_LINKS.map((link) => (
                        <li key={link.id}>
                            <NavItem
                                link={link}
                                isHome={isHome}
                                isActive={isHome && active === link.id}
                                className={desktopItemClass}
                            />
                        </li>
                    ))}
                </ul>

                <button
                    type="button"
                    aria-label="Toggle menu"
                    aria-expanded={open}
                    onClick={() => setOpen((v) => !v)}
                    className="inline-flex items-center justify-center w-10 h-10 border rounded-lg border-black/10 text-neutral-700 hover:bg-black/5 md:hidden dark:border-white/10 dark:text-white dark:hover:bg-white/5"
                >
                    {open ? <HiX size={20} /> : <HiMenu size={20} />}
                </button>
            </nav>

            <div
                className={`overflow-hidden border-t border-black/5 bg-white/95 backdrop-blur-md transition-[max-height,opacity] duration-300 md:hidden dark:border-white/5 dark:bg-black/80 ${
                    open ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <ul className="flex flex-col gap-1 px-4 py-3">
                    {NAV_LINKS.map((link) => (
                        <li key={link.id}>
                            <NavItem
                                link={link}
                                isHome={isHome}
                                isActive={isHome && active === link.id}
                                onNavigate={closeMenu}
                                className={mobileItemClass}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}

// Navbar này làm 4 việc chính:

// 1. Hiển thị menu (desktop + mobile)
// 2. Scroll spy → highlight section đang xem (useActiveSection)
// 3. Smooth scroll khi click link
// 4. Đổi style khi scroll (transparent → blur background)

// Scroll trang
//    ↓
// useActiveSection detect section
//    ↓
// Navbar highlight item

// Click menu
//    ↓
// scrollIntoView
//    ↓
// UI update + đóng menu (mobile)
