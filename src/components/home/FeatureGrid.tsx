import constants from "@/constants";
import { Boxes, Gamepad2, LaptopMinimalCheck, Library, MonitorSmartphone, Wrench, Zap } from "lucide-react";

export default function FeatureGridSection() {
    return <section className="py-12 sm:py-20 md:py-24 bg-background text-foreground">
        <div className="max-w-7xl mx-auto px-4">

            {/* Description */}
            <div className="text-center mb-12 sm:mb-16">
                <p className="text-xl sm:text-2xl text-foreground max-w-6xl mx-auto">
                    <b>Play all your games anywhere, on any device - powered by high-performance Cloud GPU</b>
                </p>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
                {/* Game launcher */}
                <div className="cyberpunk-card neon-border p-6">
                    <div className="icon-container flex justify-center mb-4">
                        <Boxes className="w-12 h-12 text-neon-red" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-center text-white">Steam, Epic, GOG, Amazon Prime Games and more</h3>
                    <p className="text-foreground text-center">
                        Play your own Steam, Epic Games, GOG, Amazon Prime Games and more in the Cloud.
                    </p>
                </div>

                {/* Complete Game Library */}
                <div className="cyberpunk-card neon-border p-6">
                    <div className="icon-container flex justify-center mb-4">
                        <Library className="w-12 h-12 text-neon-green" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-center text-white">Your Entire Game Library</h3>
                    <p className="text-foreground text-center">
                        Your entire game library is available - no pre-defined game list limitations!
                    </p>
                </div>

                {/* High Performance */}
                <div className="cyberpunk-card neon-border p-6">
                    <div className="icon-container flex justify-center mb-4">
                        <Zap className="w-12 h-12 text-neon-yellow" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-center text-white">Ultra Performance</h3>
                    <p className="text-foreground text-center">
                        <b>4K, 120 FPS</b> or <b>1080p, 60 FPS</b> ? You choose ! Powered by high-end Cloud GPU.
                    </p>
                </div>

                {/* Cross Platform */}
                <div className="cyberpunk-card neon-border p-6">
                    <div className="icon-container flex justify-center mb-4">
                        <MonitorSmartphone className="w-12 h-12 text-neon-blue" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-center text-white">All Major Platforms Supported</h3>
                    <p className="text-foreground text-center">
                        <b>MacOS</b>, <b>Windows</b>, <b>Linux</b>, SmartTV, Android, iOS, Phone, Tablet - all supported!
                    </p>
                </div>

                {/* No Hardware Required */}
                <div className="cyberpunk-card neon-border p-6">
                    <div className="icon-container flex justify-center mb-4">
                        <LaptopMinimalCheck className="w-12 h-12 text-neon-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-center text-white">No Gaming PC Needed</h3>
                    <p className="text-foreground text-center">
                        Works with <b>low-end devices</b> - no expensive PC or hardware required.
                    </p>
                </div>
                {/* Mods and Tools */}
                <div className="cyberpunk-card neon-border transition-all duration-300 p-6">
                    <div className="icon-container flex justify-center mb-4">
                        <Wrench className="w-12 h-12 text-neon-purple" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-center text-white">Mods, Tools and Softwares</h3>
                    <p className="text-foreground text-center">
                        Install your game mods, custom tools and any software to enhance your gaming experience.
                    </p>
                </div>

            </div>

            {/* Call to Action */}
            <div className="text-center">
                <a href={constants.URLs.cta} target="_blank" rel="noopener noreferrer" className="block cyberpunk-card neon-border neon-blue shadow-neon-blue hover:shadow-neon-white max-w-md mx-auto transform hover:scale-105 transition-all cursor-pointer p-6">
                    <div className="flex justify-center mb-4">
                        <Gamepad2 className="w-12 h-12 text-neon-blue" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-center text-neon-white">Start Playing Now</h3>
                    <h4 className="text-lg font-semibold mb-2 text-center text-neon-blue">Free Trial Available !</h4>
                    <p className="text-sm text-neon-white text-center">
                        <b>Get up to 5 hours free</b> by joining the Beta
                    </p>
                </a>
            </div>
        </div>
    </section>
}