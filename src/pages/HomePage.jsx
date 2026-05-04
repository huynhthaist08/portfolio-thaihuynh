import { useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useEffect } from "react";

const HomePage = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (!hash) return;
        document
            .getElementById(hash.slice(1))
            ?.scrollIntoView({ behavior: "smooth" });
    }, [hash]);

    return (
        <>
            <NavBar />
        </>
    );
};

export default HomePage;
