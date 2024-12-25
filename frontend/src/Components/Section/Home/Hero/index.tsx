import { urlFor } from "@/lib/imageUrlBuilder";
import { HeroData } from "@/types";
import Image from "next/image";

const Hero = (item: HeroData) => {
    const { name, description, buttonText, heroImage } = item || {};

    return (
        <section className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16 px-4 sm:px-8">
            <div className="container mx-auto flex flex-col-reverse sm:flex-row items-center justify-between gap-8">
                <div className="text-center sm:text-left sm:w-1/2">
                    <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
                        {name || "Welcome to Our Website"}
                    </h1>
                    <p className="text-lg sm:text-xl mb-8">
                        {description || "Description"}
                    </p>
                    <a
                        href="#explore"
                        className="bg-white text-blue-600 py-3 px-8 rounded-full text-xl font-semibold hover:bg-blue-100 transition-colors"
                    >
                        {buttonText ? buttonText : "Explore"}
                    </a>
                </div>

                {heroImage?.asset && (
                    <div className="sm:w-1/2 w-full relative">
                        <Image
                            src={urlFor(heroImage?.asset).url() || ""}
                            alt={name || "Hero Image"}
                            className="object-cover rounded-lg shadow-lg"
                            layout="responsive"
                            width={1200}
                            height={800}
                        />
                    </div>
                )}
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30"></div>
        </section>
    );
};

export default Hero;
