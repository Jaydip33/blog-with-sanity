import Image from 'next/image';

export default function About() {
    return (
        <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center py-10">
            <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg">
                <div className="flex justify-center mb-6">
                    <Image
                        src="/profile.jpg"
                        alt="Profile Picture"
                        width={150}
                        height={150}
                        className="rounded-full border-4 border-gray-300"
                    />
                </div>
                <h1 className="text-4xl font-semibold text-center text-gray-800 mb-4">About Me</h1>
                <p className="text-lg text-gray-700 text-center mb-6">
                    Welcome to my blog! I&apos;am [Your Name], and I created this blog to share my thoughts, ideas, and
                    experiences on [topic you blog about]. My goal is to [brief description of what your blog aims to do].
                </p>
                <p className="text-lg text-gray-700 text-center mb-6">
                    I&apos;m passionate about [insert passions or topics of interest], and I hope this blog serves as a
                    place for readers to learn and engage with me. If you have any questions or want to collaborate,
                    feel free to reach out!
                </p>
                <div className="text-center mt-6">
                    <a
                        href="mailto:youremail@example.com"
                        className="inline-block px-6 py-3 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition duration-300"
                    >
                        Contact Me
                    </a>
                </div>
            </div>
        </div>
    );
}
