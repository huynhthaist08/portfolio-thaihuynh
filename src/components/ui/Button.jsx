// style base dùng chung cho mọi button
const BASE =
    "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all hover:scale-[1.03] active:scale-100 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100";

// các biến thể style của button
const VARIANTS = {
    // button chính
    primary:
        "bg-white text-neutral-900 shadow-soft hover:shadow-lg dark:bg-white dark:text-neutral-900",
    // button dạng viền
    outline:
        "border border-neutral-300 bg-transparent text-neutral-900 hover:bg-black/5 dark:border-white/30 dark:text-white dark:hover:bg-white/5",
};

// các kích thước button
const SIZES = {
    md: "px-6 py-3",
    lg: "px-7 py-3",
};

export default function Button({
    // cho phép đổi tag (button, a, div,...)
    as: Component = "button",

    // chọn kiểu button
    variant = "primary",

    // chọn kích thước
    size = "md",

    // thêm class từ ngoài vào
    className = "",

    // nhận các props còn lại (onClick, href, type,...)
    ...props
}) {
    // gộp tất cả class lại thành 1 string
    const classes =
        `${BASE} ${VARIANTS[variant]} ${SIZES[size]} ${className}`.trim();

    // render component tương ứng với tag được truyền vào
    return <Component className={classes} {...props} />;
}

//
