import { createContext, useContext, useEffect, useState } from "react";

// key để lưu theme vào localStorage
const STORAGE_KEY = "portfolio-theme";

// tạo context để chia sẽ theme toàn app
const ThemeContext = createContext(null);

// hàm lấy theme ban đầu
function getInitialTheme() {
    // nếu chạy ở server (SSR) thì mặc định dark
    if (typeof window === "undefined") return "dark";

    // lấy theme đã lưu trước đó
    const stored = window.localStorage.getItem(STORAGE_KEY);

    // nếu đã có trong localStorage thì dùng luôn
    if (stored === "light" || stored === "dark") return stored;

    // nếu chưa có -> lấy theo hệ điều hành user
    return window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark";
}

// component bọc toàn app để cung cấp theme
export function ThemeProvider({ children }) {
    // state lưu theme hiện tại
    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        // lấy thẻ <html />
        const root = document.documentElement;

        // thêm/xoá class dark hoặc light
        root.classList.toggle("dark", theme === "dark");
        root.classList.toggle("light", theme === "light");

        // lưu theme vào localStorage
        window.localStorage.setItem(STORAGE_KEY, theme);
    }, [theme]); // chạy khi theme thay đổi

    // hàm toggle giữa dark và light
    const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

    return (
        // cung cấp theme + function cho toàn app
        <ThemeContext.Provider value={{ theme, toggle, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

// custom hook để dùng theme dễ hơn
export function useTheme() {
    const ctx = useContext(ThemeContext);

    // nếu dùng ngoài ThemeProvider thì báo lỗi
    if (!ctx) throw new Error("useTheme phải dùng trong ThemeProvider");

    return ctx; // trả về {theme, toggle, setTheme}
}

// theme context -> là nguồn dữ liệu trung tâm (global state), quản lý state theme, lưu theme vào localStorage, cung cấp {theme, toggle, setTheme}
// theme toggle -> gọi toggle() từ theme context để đổi theme
// background -> đọc theme từ theme context để hiển thị background tương ứng
