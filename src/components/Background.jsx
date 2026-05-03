import { useTheme } from "../context/ThemeContext";

const DARK_BG = {
    background:
        "radial-gradient(125% 125% at 50% 90%, #000000 40%, #0d1a36 100%)",
};

const LIGHT_BG = {
    background: "radial-gradient(125% 125% at 50% 10%, #fff 40%, #475569 100%)",
};

export default function Background() {
    const { theme } = useTheme();
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
