import constants from "@/constants";
import Image from "next/image";

export default function FooterSection() {
    const data = {
        "description": "Play on Your Own Terms!",
        // "products": ["Cloudy Pad Core", "Cloudy Pad Gamer"],
        // "legal": ["Privacy Policy", "Terms of Service"],
        "social": [
            {
                "name": "GitHub",
                "url": constants.URLs.social.github,
            },
            {
                "name": "Discord",
                "url": constants.URLs.social.discord,
            },
        ],
        "copyright": "© 2025 • Cloudy Pad All rights reserved."
    }


    return <>
        <footer className="bg-card py-8 sm:py-12 border-t border-border">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
                    <div className="flex flex-col items-center sm:items-start">
                        <div className="flex items-center space-x-2 mb-2 sm:mb-4">
                            <Image
                                src="/crafteo-logo.png"
                                alt="CloudyPad Logo"
                                width={32}
                                height={32}
                            />
                            <span className="font-semibold text-neon-blue">{constants.name}</span>
                        </div>
                        <p className="text-muted-foreground text-sm sm:text-base text-center sm:text-left">{data.description}</p>
                    </div>
                    <div></div>
                    <div></div>
                    <div className="flex flex-col items-center sm:items-start">
                        <h3 className="font-semibold mb-2 sm:mb-4 text-neon-blue">Social</h3>
                        <div className="flex space-x-2 sm:space-x-4 justify-center sm:justify-start w-full">
                            {data.social.map((social, index) => (
                                <a
                                    key={index}
                                    target="_blank" href={social.url}
                                    className="text-muted-foreground hover:text-neon-green transition-colors text-sm sm:text-base"
                                >
                                    {social.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="border-t border-border mt-8 sm:mt-12 pt-4 sm:pt-8 text-center text-muted-foreground text-xs sm:text-base">
                    <p>
                        {data.copyright}
                        {" "}|{" "}
                        <a href="/privacy" className="link" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
                    </p>
                </div>
            </div>
        </footer>
    </>
}