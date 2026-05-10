import { useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useEffect } from "react";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Certifications from "../components/Certifications";

const HomePage = () => {
    // lấy phần hash trong URL (viL /#projects -> has = "#projects")
    const { hash } = useLocation();

    useEffect(() => {
        // nếu không có hash thì không làm gì
        if (!hash) return;
        // hash.slice(1) => bỏ dấu "#" để lấy id (vd: "projects")
        document
            .getElementById(hash.slice(1))
            ?.scrollIntoView({ behavior: "smooth" });
    }, [hash]); // chạy mỗi lần hash thay đổi

    return (
        <>
            <NavBar />
            <main>
                <Hero />
                <Projects />
                <Experience />
                <Certifications />
                <Contact />
            </main>
            <Footer />
        </>
    );
};

export default HomePage;
