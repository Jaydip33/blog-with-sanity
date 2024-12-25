import Link from "next/link";

export default function Custom404() {
    return (
        <div>
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
                <div className="text-center px-4 sm:px-8">
                    <h1 className="text-6xl font-bold mb-4 animate__animated animate__fadeIn">
                        404
                    </h1>
                    <p className="text-2xl mb-4 animate__animated animate__fadeIn animate__delay-1s">
                        Oops! The page you&apos;re looking for doesn&apos;t exist.
                    </p>
                    <Link
                        href="/"
                        className="inline-block px-6 py-3 mt-4 text-lg font-semibold text-indigo-800 bg-white rounded-lg hover:bg-gray-200 transition-all duration-300"
                    >
                        Go back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
