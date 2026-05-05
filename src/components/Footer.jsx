const Footer = () => {
    return (
        <div className="w-full max-w-5xl pt-6 mx-auto mt-12 mb-10 text-xs text-center border-t border-black/10 text-neutral-500 dark:border-white/10">
            © {new Date().getFullYear()} Thaihuynh. All rights reserved.
        </div>
    );
};

export default Footer;
