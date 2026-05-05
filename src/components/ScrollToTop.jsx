import { useEffect, useState } from "react";
import { HiArrowUp } from "react-icons/hi";

export default function ScrollToTop() {
    // state kiểm soát việc hiển thị nút
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // hàm chạy khi user scroll
        // nếu scroll quá 360px -> hiện nút
        const onScroll = () => setVisible(window.scrollY > 360);

        // gọi 1 lần khi mount để set trạng thái ban đầu
        onScroll();

        // lắng nghe sự kiện scroll
        // passive: true giúp scroll mượt hơn (không block main thread)
        window.addEventListener("scroll", onScroll, { passive: true });

        // cleanup khi component unmount (tránh memory leak)
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    // kiểm tra user có bật chế độ giảm animation (accessibility)
    const onClick = () => {
        const reduced = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;

        // scroll lên đầu trang
        // nếu user ko thích animation -> scroll ngay lập tức
        // ngược lại -> scroll mượt
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
