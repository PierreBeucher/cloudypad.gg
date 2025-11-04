import constants from "@/constants";
import Image from "next/image";

import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import clsx from "clsx";
function LogoComponent() {
    return <div className="flex">
        <div>
            <Image src="/crafteo-logo-transparent.png" alt="Cloudy Pad Logo" width={32} height={32} className="m-auto" />
            <span className="text-neon-blue font-bold text-xl tracking-wider">{constants?.name}</span>
        </div>
    </div>;
}
function FancyButton({ children }: { children: React.ReactNode }) {
    const buttonClass = "cyberpunk-card neon-white neon-border transition-all duration-300 px-3 py-2 text-lg"
    return <Button size={"lg"} variant={"secondary"} className={clsx(buttonClass)}>
        {children}
    </Button>
}

export default function HeaderSection() {
    const links = [
        {
            "title": "🎮 Get started",
            "url": constants.URLs.cta,
        },
        {
            "title": "FAQ",
            "url": "#faq",
        },
        {
            "title": "Pricing",
            "url": constants.URLs.pricing,
        },
        {
            "title": "Documentation",
            "url": constants.URLs.docs,
        },
        {
            "title": "GitHub",
            "url": constants.URLs.social.github,
            "useIcon": "github",
            "imageLink": "/github.svg",
        },
        {
            "title": "Discord",
            "url": constants.URLs.social.discord,
            "imageLink": "https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/636e0a69f118df70ad7828d4_icon_clyde_blurple_RGB.svg"
        }
    ]

    return <nav className="py-4 border-b">
        <div className="flex items-center sm:container md:w-4/5 m-auto">
            <LogoComponent />
            {/* navigations */}
            <div className="text-xl flex ml-auto gap-5 items-center ">

                <a href={constants.URLs.cta}> <FancyButton>🎮  Log in or Sign up</FancyButton> </a>
                <a href="/#faq" className="hidden sm:block"> <FancyButton>FAQ</FancyButton> </a>
                <a href={constants.URLs.pricing} className="hidden sm:block">
                    <FancyButton>Pricing</FancyButton>
                </a>
                <a href={constants.URLs.docs} className="hidden md:block">
                    <FancyButton>Documentation</FancyButton>
                </a>

                <a href={constants.URLs.social.github} className="hidden lg:block ">
                    <FancyButton>
                        <Image src="/github.svg" alt="Github" width={20} height={20} className="filter invert" />
                        <span className="inline">Github</span>
                    </FancyButton>
                </a>
                <a href={constants.URLs.social.discord} className="hidden lg:block">
                    <FancyButton>
                        <Image src="/discord.svg" alt="Discord" width={20} height={20} />
                        <span className="inline">Discord</span>
                    </FancyButton>
                </a>
            </div>
            {/* Mobile Navigation */}
            <DropdownMenu >
                <DropdownMenuTrigger className="lg:hidden"><Menu className="w-16 my-2" /></DropdownMenuTrigger>
                <DropdownMenuContent >
                    {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
                    <DropdownMenuSeparator />
                    {
                        links.map(_link =>
                            <a href={_link.url} key={_link.title}>
                                <DropdownMenuItem className="text-lg">{_link.title}</DropdownMenuItem>
                            </a>
                        )
                    }
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    </nav >
}