export default function Avatar({
    size = 160,
    src = "/images/avatar.jpg",
    alt = "Thach Lam Huynh Thai",
}) {
    return (
        <div
            className="relative animate-floaty"
            style={{ width: size, height: size }}
        >
            <div className="absolute inset-0 rounded-full ring-gradient blur-[2px]" />
            <div className="absolute inset-0.75 overflow-hidden rounded-full bg-bg-card shadow-soft">
                <img
                    src={src}
                    alt={alt}
                    width={size}
                    height={size}
                    loading="eager"
                    className="object-cover object-center w-full h-full rounded-full"
                />
            </div>
        </div>
    );
}
