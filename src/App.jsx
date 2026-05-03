import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Background from "./components/Background";
import ThemeToggle from "./components/ThemeToggle";

function App() {
    return (
        <div className="relative min-h-screen transition-colors duration-300 text-neutral-900 dark:text-white">
            <Background />

            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>

            <ThemeToggle />
        </div>
    );
}

export default App;
