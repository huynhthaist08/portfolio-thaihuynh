import { Link } from "react-router-dom";
import Button from "../components/ui/Button";

const NotFound = () => {
    return (
        <main className="flex items-center justify-center min-h-screen px-4 py-20">
            <div className="max-w-md mx-auto text-center">
                <p className="text-sm font-semibold tracking-[0.25em] text-blue-500 dark:text-blue-400">
                    ERROR 404
                </p>
                <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
                    <span className="text-gradient-blue">Page not found</span>
                </h1>
                <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
                    The page you are looking for doesn't exist or has been
                    moved.
                </p>
                <Button as={Link} to="/" className="mt-8">
                    Back to home
                </Button>
            </div>
        </main>
    );
};

export default NotFound;
