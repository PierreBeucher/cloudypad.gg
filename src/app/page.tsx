"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Library, Zap, Wrench, Gamepad2, MonitorSmartphone, LaptopMinimalCheck, Boxes } from "lucide-react";
import { CyberpunkButton } from "@/components/ui/cyberpunk-button";

const callToActionUrl = "https://app.cloudypad.gg";
const documentationUrl = "https://docs.cloudypad.gg";
const githubUrl = "https://github.com/PierreBeucher/cloudypad";
const discordUrl = "https://discord.com/invite/QATA3b9TTa";
const pricingUrl = "https://app.cloudypad.gg/pricing";

export default function Home() {
  const data = {
    "name": "CLOUDY PAD",
    "navLinks": [
      {
        "title": "Login",
        "url": callToActionUrl,
      },
      {
        "title": "FAQ",
        "url": "#faq",
      },
      {
        "title": "Pricing",
        "url": pricingUrl,
      },
      {
        "title": "Documentation",
        "url": documentationUrl,
      },
      {
        "title": "GitHub",
        "url": githubUrl,
        "useIcon": "github"
      },
      {
        "title": "Discord",
        "url": discordUrl,
        "imageLink": "https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/636e0a69f118df70ad7828d4_icon_clyde_blurple_RGB.svg"
      }
    ],
    "heroSection": {
      "title": "CLOUDY PAD",
      "subtitle": "Play On Your Own Terms",
    },
    "features": [
      {
        "title": "How it Works",
        "descriptions": [
          {
            "title": "Signup and create your instance",
            "content": "Choose from a range of powerful cloud machines matching your needs and budget"
          },
          {
            "title": "Connect and install your games",
            "content": "Connect to instance to access your remote desktop. Steam, GOG, Epic and more launchers are pre-installed. Download your own games and start playing, your entire library is available !"
          },
          {
            "title": "Enjoy Playing in High Resolution",
            "content": "The game runs on your powerful cloud machine and streams at home to your device. As simple as watching a YouTube video !"
          },
          {
            "title": "Join the Community",
            "content": `Get support directly from the Founder and the community on <b><a href='${discordUrl}' class='link'>Discord</a></b> and <b><a href='${githubUrl}' class='link'>GitHub</a></b>`
          }
        ]
      },
      // {
      //   "title": "Also available as a Free & Open Source DIY solution",
      //   "descriptions": [
      //     {
      //       "title": "Deploy your own instance",
      //       "content": `<b><a href='${githubUrl}' class='link'>Cloudy Pad CLI</a></b> is a Free and Open Source tool to deploy on your own Cloud provider account`
      //     },
      //     {
      //       "title": "Supports various Cloud providers",
      //       "content": "Play using powerful machines on AWS, Azure, Google Cloud, Paperspace or Scaleway."
      //     },
      //     {
      //       "title": "Get Support from the Community",
      //       "content": `Join our community on <b><a href='${discordUrl}' class='link'>Discord</a></b> and <b><a href='${githubUrl}' class='link'>GitHub</a></b> to get help setting up your instance`
      //     },
      //     {
      //       "title": "Based on Open Source solutions",
      //       "content": "Cloudy Pad is based on Open Source solutions like <b><a href='https://github.com/moonlight-stream' class='link'>Moonlight</a></b> and <b><a href='https://github.com/LizardByte/Sunshine' class='link'>Sunshine</a></b>"
      //     },
      //   ]
      // },
    ],

    "faq": {
      "title": "FAQ",
      "questions": [
        {
          "question": "Where is the service available ?",
          "answer": "Worldwide! Europe (France, Poland), America (Seattle, Chicago), Asia (Singapore, Mumbai). More locations are added regularly, keep in touch!"
        },
        {
          "question": "What are the requirements to use Cloudy Pad?",
          "answer": "You need a stable internet connection (minimum 10Mbps), a device to play on (Windows PC, Mac, Linux, SmartTV, Phone, or Tablet) on which you'll be able to install <b><a href='https://moonlight-stream.org/' class='link'>Moonlight client</a></b>, and a Steam account with your games."
        },
                {
          "question": "Do I need a powerful machine or gaming PC for cloud gaming?",
          "answer": "<b>No, you don't need a powerful machine or gaming PC for cloud gaming with CloudyPad</b>. Your games run on our powerful cloud gaming servers and stream to any device - phones, tablets, Chromebooks, or low-end laptops work perfectly."
        },
        {
          "question": "Do you offer a free trial?",
          "answer": `During the Beta new users are elligible to a few hours of <b>free trial</b>. Just <b><a href='${callToActionUrl}' class='link'>Create an account</a></b> and follow the instructions to get your free trial !`
        },
        {
          "question": "What games are supported?",
          "answer": "Any Steam, Epic or GOG game working on Linux or with Proton. <b>Vast majority of Windows games are supported</b>. See <b><a href='https://www.protondb.com/' class='link'>ProtonDB</a></b> for a list of supported Windows games."
        },
        {
          "question": "Are Controllers supported ?",
          "answer": "Yes, controllers are supported (Xbox, Sony DualSense / DualShock, etc.). You can use your controller to play your games on Cloudy Pad. "
        },
        {
          "question": "Are my game data and saves games persisted across sessions?",
          "answer": "Of course ! Your game data and saves are persisted when you stop your instance. As most Steam games support Cloud sync, you'll also be able to pick up where you left off from another machine."
        },
        {
          "question": "Will my existing game saves be available on Cloudy Pad ?",
          "answer": "Most games support Cloud sync - in which case your saves will be available on Cloudy Pad after you installed your game. If your game doesn't support Cloud sync, you can still import your saves from your local machine."
        },
        {
          "question": "What game launchers are supported ?",
          "answer": "Steam, Epic, GOG, Amazon Prime Games are supported with their respective clients available natively on Cloudy Pad. " +
           "You can also install additional game runners thanks to <b><a href='https://lutris.net/' class='link'>Lutris</a></b>."
        },        
        
      ]
    },
    "footer": {
      "description": "Play on Your Own Terms!",
      // "products": ["Cloudy Pad Core", "Cloudy Pad Gamer"],
      // "legal": ["Privacy Policy", "Terms of Service"],
      "social": [
        {
          "name": "GitHub", 
          "url": githubUrl,
        },
        {
          "name": "Discord", 
          "url": discordUrl,
        },
      ],
      "copyright": "© 2025 • Cloudy Pad All rights reserved."
    }
  };

  const [menuOpen, setMenuOpen] = useState(false);
  const [visibleLinks, setVisibleLinks] = useState([0, 1, 2, 3, 4, 5]);

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      if (width >= 1000) {
        setVisibleLinks([0, 1, 2, 3, 4, 5]); // All
      } else if (width >= 900) {
        setVisibleLinks([0, 1, 2, 3, 4]); // Hide Discord
      } else if (width >= 750) {
        setVisibleLinks([0, 1, 2, 3]); // Hide GitHub, Discord
      } else if (width >= 600) {
        setVisibleLinks([0, 1, 2]); // Only Start Playing
      } else if (width >= 500) {
        setVisibleLinks([0, 1]); // Only Start Playing
      } else {
        setVisibleLinks([0]); // Only Start Playing
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const alwaysVisible = visibleLinks;
  const hiddenLinks = data.navLinks.map((_, i) => i).filter(i => !alwaysVisible.includes(i));

  return (
    <div className="min-h-screen">
      {/* Responsive Navigation */}
      <nav className="w-full bg-background border-b border-border">
        <div className="flex flex-wrap items-center justify-between p-4 max-w-7xl mx-auto">
        <div className="flex flex-col items-center space-y-1">
          <Image src="/crafteo-logo-transparent.png" alt="Cloudy Pad Logo" width={32} height={32} />
          <span className="text-xl font-bold tracking-wider text-neon-blue text-center">{data?.name}</span>
        </div>
        <div className="flex items-center space-x-6">
          {alwaysVisible.map(index => {
            const link = data.navLinks[index];

            // when link starts with #, it's an internal link directly in the page
            const isInternalLink = link.url.startsWith('#');
            return (
              <CyberpunkButton
                key={index}
                href={link.url}
                variant="non-bold-text"
                className="text-lg"
                {...(isInternalLink ? {} : { target: "_blank", rel: "noopener noreferrer" })}
              >
                <div className="flex items-center space-x-2">
                  {link.imageLink && <Image src={link.imageLink} alt={link.title} width={20} height={20} />}
                  {link.useIcon === "github" && <Image src="/github.svg" alt="GitHub" width={20} height={20} className="filter invert" />}
                  <span dangerouslySetInnerHTML={{ __html: link.title }}></span>
                </div>
              </CyberpunkButton>
            );
          })}
          {hiddenLinks.length > 0 && (
            <div className="relative">
              <CyberpunkButton
                className="px-2 py-2"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              </CyberpunkButton>
              {menuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-card border border-border rounded shadow-lg z-50">
                  {hiddenLinks.map(index => {
                    const link = data.navLinks[index];

                    // when link starts with #, it's an internal link directly in the page
                    const isInternalLink = link.url.startsWith('#');
                    return (
                      <CyberpunkButton
                        key={index}
                        href={link.url}
                        variant="non-bold-text"
                        className="p-1.5 m-1 text-xs w-full"
                        {...(isInternalLink ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                      >
                        <div className="flex items-center space-x-2">
                          {link.imageLink && <Image src={link.imageLink} alt={link.title} width={20} height={20} />}
                          {link.useIcon === "github" && <Image src="/github.svg" alt="GitHub" width={20} height={20} className="filter invert" />}
                          <span dangerouslySetInnerHTML={{ __html: link.title }}></span>
                        </div>
                      </CyberpunkButton>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full bg-background text-foreground py-10 sm:py-12 md:py-12 relative overflow-hidden border-b border-border" style={{ backgroundImage: "url('/gamepad-cloud-2.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-background/80"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">{data.heroSection.title}</h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-200">{data.heroSection.subtitle}</h2>
        </div>
      </section>

      {/* Tagline Section */}
      <section className="md:py-12 bg-background text-foreground">
        <div className="max-w-7xl mx-auto px-4">
          
          {/* Description */}
          <div className="text-center mb-12">
            <p className="text-4xl sm:text-4xl text-foreground max-w-6xl mx-auto">
              <b>Play all your PC games anywhere, on any device</b>
            </p>
            <div className="justify-center mt-6">
              <CyberpunkButton href={callToActionUrl} variant="non-bold-text" className="text-xl">
                <p>Get Started with Free Trial</p>
              </CyberpunkButton>
            </div>
          </div>


          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
            
            
            {/* Cross Platform */}
            <div className="cyberpunk-card neon-border p-6">
              <div className="icon-container flex justify-center mb-4">
                <MonitorSmartphone className="w-12 h-12 text-neon-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-white">Play on Mac, Windows, Linux or any system</h3>
              <p className="text-foreground text-center text-lg">
                Support for a wide range of systems: macOS, iOS, Apple TV, Windows, Linux, SmartTV, Android, Tablet...!
              </p>
            </div>

            {/* Game launcher */}
            <div className="cyberpunk-card neon-border p-6">
              <div className="icon-container flex justify-center mb-4">
                <Library className="w-12 h-12 text-neon-green" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-white">All your games on Steam, Epic, GOG and more</h3>
              <p className="text-foreground text-center text-lg">
                No catalog limitations, all your games on Steam, GOG and Epic are available out of the box ! 
                You can also install your own games and launchers
              </p>
            </div>
            
            
            {/* High Performance */}
            <div className="cyberpunk-card neon-border p-6">
              <div className="icon-container flex justify-center mb-4">
                <Zap className="w-12 h-12 text-neon-yellow" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-white">Ultra Performance with any device</h3>
              <p className="text-foreground text-center text-lg">
                Up to 1440p 120 FPS on any device ! No gaming PC required, play in Ultra definition with your potato laptop
              </p>
            </div>

            {/* Mods and Tools */}
            <div className="cyberpunk-card neon-border transition-all duration-300 p-6">
              <div className="icon-container flex justify-center mb-4">
                <Wrench className="w-12 h-12 text-neon-purple" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-white">Install your Mods and Tools</h3>
              <p className="text-foreground text-center text-lg">
                Install your game mods, custom tools and any software to enhance your gaming experience
              </p>
            </div>

          </div>

          {/* Call to Action */}
          <div className="text-center">
            <CyberpunkButton href={callToActionUrl} target="_blank" rel="noopener noreferrer" className="text-lg px-2 py-4">
              Start Playing Now
            </CyberpunkButton>
            <p className="text-lg text-foreground mt-4">
              <b>Free trial available!</b>
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-10 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 md:gap-12 max-w-3xl mx-auto">
            {data.features.map((feature, index) => (
              <div key={index} className="cyberpunk-card transition-all duration-300 flex flex-col items-start gap-4 sm:gap-6 p-4 sm:p-6 md:p-8">
                <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4 w-full text-center text-neon-white flex items-center justify-center gap-2">
                  {feature.title}
                </h2>
                <div className="space-y-2 sm:space-y-4 mb-2 sm:mb-4">
                  {feature.descriptions.map((desc, i) => (
                    <div key={i} className="flex items-start gap-2 sm:gap-3">
                      <div className="mt-1 text-neon-green">✓</div>
                      <div className="space-y-1 sm:space-y-2">
                        <h3 className="font-semibold text-base sm:text-lg text-neon-white">{desc.title}</h3>
                        <p className="text-foreground text-sm sm:text-base" dangerouslySetInnerHTML={{ __html: desc.content }}></p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <CyberpunkButton href={callToActionUrl} target="_blank" rel="noopener noreferrer" className="text-lg px-2 py-4">
              Get Started
            </CyberpunkButton>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-10 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 text-neon-white">{data.faq.title}</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 max-w-3xl mx-auto">
            {data.faq.questions.map((item, index) => (
              <div key={index} className="cyberpunk-card transition-all duration-300 p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-neon-white">{item.question}</h3>
                <p className="text-foreground" dangerouslySetInnerHTML={{ __html: item.answer }}></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Action Section */}
      <section className="py-10 sm:py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 text-neon-white">Get Started with Cloudy Pad</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-16">
            <div className="text-center">
              <CyberpunkButton href={documentationUrl} target="_blank" rel="noopener noreferrer" className="mb-2">
                DIY with Cloudy Pad CLI
              </CyberpunkButton>
              <p className="text-foreground text-sm sm:text-base">Use Cloudy Pad CLI, a Free and Open Source project to deploy your own instance</p>
            </div>
            
            <div className="text-center">
              <CyberpunkButton href={callToActionUrl} target="_blank" rel="noopener noreferrer" className="mb-2">
                Start Playing Now
              </CyberpunkButton>
              <p className="text-foreground text-sm sm:text-base">Deploy your instance in a few clicks and play your own Steam games</p>
            </div>
            
            <div className="text-center">
              <CyberpunkButton href={discordUrl} target="_blank" rel="noopener noreferrer" className="mb-2">
                Join the Community
              </CyberpunkButton>
              <p className="text-foreground text-sm sm:text-base">Join our community on Discord to get support and help from other Cloudy Pad users.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                <span className="font-semibold text-neon-blue">{data?.name}</span>
              </div>
              <p className="text-muted-foreground text-sm sm:text-base text-center sm:text-left">{data.footer.description}</p>
            </div>
            <div></div>
            <div></div>
            <div className="flex flex-col items-center sm:items-start">
              <h3 className="font-semibold mb-2 sm:mb-4 text-neon-blue">Social</h3>
              <div className="flex space-x-2 sm:space-x-4 justify-center sm:justify-start w-full">
                {data.footer.social.map((social, index) => (
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
              {data.footer.copyright}
              {" "}|{" "}
              <a href="/privacy" className="link" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}