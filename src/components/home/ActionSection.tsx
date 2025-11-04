import constants from "@/constants";

export default function ActionSection() {
    return <section className="py-10 sm:py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 text-neon-white">Get Started with Cloudy Pad</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-16">
                <a href={constants.URLs.docs} className="block cyberpunk-card neon-border neon-blue shadow-neon-blue hover:shadow-neon-white transition-all duration-300 p-4 sm:p-6 md:p-8 text-center transform hover:scale-105">
                    <h3 className="font-bold text-neon-white mb-4 text-lg">
                        DIY with Cloudy Pad CLI
                    </h3>
                    <p className="text-foreground text-sm sm:text-base">Use Cloudy Pad CLI, a Free and Open Source project to deploy your own instance</p>
                </a>

                <a href={constants.URLs.cta} className="block cyberpunk-card neon-border neon-blue shadow-neon-blue hover:shadow-neon-white transition-all duration-300 p-4 sm:p-6 md:p-8 text-center transform hover:scale-105">
                    <h3 className="font-bold text-neon-white mb-4 text-xl">
                        Start Playing Now
                    </h3>
                    <p className="text-foreground text-sm sm:text-base">Deploy your instance in a few clicks and play your own Steam games</p>
                </a>

                <a href={constants.URLs.social.discord} className="block cyberpunk-card neon-border neon-blue shadow-neon-blue hover:shadow-neon-white transition-all duration-300 p-4 sm:p-6 md:p-8 text-center transform hover:scale-105">
                    <h3 className="font-bold text-neon-white mb-4 text-lg">
                        Join the Community
                    </h3>
                    <p className="text-foreground text-sm sm:text-base">Join our community on Discord to get support and help from other Cloudy Pad users.</p>
                </a>
            </div>
        </div>
    </section>
}