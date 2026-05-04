import { useTheme } from "../context/ThemeContext";

// object chứa style cho background dark mode và light mode
const DARK_BG = {
    background:
        // radial-gradient tạo hiệu ứng nền lan toả từ 1 điểm
        "radial-gradient(125% 125% at 50% 90%, #000000 40%, #0d1a36 100%)",
};

const LIGHT_BG = {
    // gradient sáng hơn, điểm sáng ở phía trên
    background: "radial-gradient(125% 125% at 50% 10%, #fff 40%, #475569 100%)",
};

export default function Background() {
    // lấy giá trị theme từ context (dark hoặc light)
    const { theme } = useTheme();
    // tạo biến kiểm tra có phải dark mode không
    const isDark = theme === "dark";

    return (
        <div
            aria-hidden="true"
            className="fixed inset-0 pointer-events-none -z-10"
        >
            <div
                className="absolute inset-0 transition-opacity duration-500 ease-out"
                style={{ ...DARK_BG, opacity: isDark ? 1 : 0 }}
            />
            <div
                className="absolute inset-0 transition-opacity duration-500 ease-out"
                style={{ ...LIGHT_BG, opacity: isDark ? 0 : 1 }}
            />
        </div>
    );
}

// fixed + inset-0 -> full màn hình
// pointer-events-none -> không chặn click
// -z-10 -> nằm phía sau tất cả
// layer background luôn render nhưng sẽ fade in/out bằng opacity
// dùng spread operator để merge object style
