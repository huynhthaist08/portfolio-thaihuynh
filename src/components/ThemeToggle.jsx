import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
    // lấy theme hiện tại và hàm toggle
    const { theme, toggle } = useTheme();

    // tạo biến isDark để kiểm tra dark mode
    const isDark = theme === "dark";

    // tạo biến label dùng cho accessibility (screen reader + tooltip)
    const label = isDark ? "Chuyển qua light mode" : "Chuyển qua dark mode";

    return (
        <button
            type="button"
            // click để đổi theme
            onClick={toggle}
            // hỗ trợ accessibility
            aria-label={label}
            title={label}
            className="fixed z-40 inline-flex items-center justify-center transition-all duration-300 border rounded-full shadow-lg bottom-5 left-5 h-11 w-11 border-black/10 bg-white/80 text-neutral-700 backdrop-blur hover:scale-110 hover:text-blue-500 active:scale-95 sm:bottom-6 sm:left-6 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:text-blue-400"
        >
            <span
                className={`absolute transition-all duration-300 ${
                    isDark
                        ? "rotate-0 scale-100 opacity-100"
                        : "-rotate-90 scale-0 opacity-0"
                }`}
            >
                <HiOutlineMoon size={20} />
            </span>
            <span
                className={`absolute transition-all duration-300 ${
                    isDark
                        ? "rotate-90 scale-0 opacity-0"
                        : "rotate-0 scale-100 opacity-100"
                }`}
            >
                <HiOutlineSun size={20} />
            </span>
        </button>
    );
};

export default ThemeToggle;
