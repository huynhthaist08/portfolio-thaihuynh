const Certifications = () => {
    return (
        <div
            id="certifications"
            className="relative flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8"
        >
            <div className="w-full max-w-4xl mx-auto">
                <h2 className="text-3xl font-extrabold tracking-wider text-center sm:text-4xl">
                    <span className="text-gradient-blue">CERTIFICATIONS</span>
                </h2>

                <div className="flex flex-col md:flex-row items-center justify-center mt-10 gap-6">
                    <img
                        src="/images/cer_fe.png"
                        alt="Frontend Certification"
                        className="w-full max-w-sm rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2"
                    />

                    <img
                        src="/images/cer_jspro.png"
                        alt="HTML CSS Pro Certification"
                        className="w-full max-w-sm rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2"
                    />
                    <img
                        src="/images/cer_htmlcsspro.png"
                        alt="HTML CSS Pro Certification"
                        className="w-full max-w-sm rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2"
                    />
                </div>
            </div>
        </div>
    );
};

export default Certifications;
