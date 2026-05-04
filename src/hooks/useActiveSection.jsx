import { useEffect, useState } from "react";

// custom hook để xác định section nào đang active trên màn hình
export default function useActiveSection(ids, enabled = true) {
    // state lưu id của section đang active (mặc định là phần tử đầu tiên)
    const [active, setActive] = useState(ids[0]);

    useEffect(() => {
        // nếu không bật thì không làm gì cả
        if (!enabled) return;

        // tạo IntersectionObserver để theo dõi các section
        const observer = new IntersectionObserver(
            (entries) => {
                // entries = danh sách các section đang được observe
                entries.forEach((entry) => {
                    // nếu section đang nằm trong vùng viewport -> cập nhật id của section active
                    if (entry.isIntersecting) setActive(entry.target.id);
                });
            },
            // điều chỉnh vùng trigger (thu nhỏ vùng giữa màn hình)
            // chỉ khi section đi vào vùng giữa thì mới được tính là active
            // threshold: 0 -> chỉ cần chạm vào là trigger
            { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
        );

        // duyệt qua danh sách id
        ids.forEach((id) => {
            const el = document.getElementById(id);

            // nếu tìm thấy element thì bắt đầu observe
            if (el) observer.observe(el);
        });

        // cleanup: ngắt observe khi unmount hoặc deps thay đổi
        return () => observer.disconnect();
    }, [ids, enabled]);

    // trả về id của section đang active
    return active;
}

// Scroll trang
//    ↓
// IntersectionObserver theo dõi section
//    ↓
// Section nào vào vùng giữa màn hình
//    ↓
// setActive(id của section đó)
//    ↓
// Component nhận active → highlight menu / nav
