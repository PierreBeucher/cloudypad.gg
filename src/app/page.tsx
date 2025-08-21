"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Library, Zap, Wrench, Gamepad2, MonitorSmartphone, LaptopMinimalCheck, Boxes } from "lucide-react";

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
        "title": "🎮 <b>Log in or Sign up</b>",
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
      {
        "title": "Also available as a Free & Open Source DIY solution",
        "descriptions": [
          {
            "title": "Deploy your own instance",
            "content": `<b><a href='${githubUrl}' class='link'>Cloudy Pad CLI</a></b> is a Free and Open Source tool to deploy on your own Cloud provider account`
          },
          {
            "title": "Supports various Cloud providers",
            "content": "Play using powerful machines on AWS, Azure, Google Cloud, Paperspace or Scaleway."
          },
          {
            "title": "Get Support from the Community",
            "content": `Join our community on <b><a href='${discordUrl}' class='link'>Discord</a></b> and <b><a href='${githubUrl}' class='link'>GitHub</a></b> to get help setting up your instance`
          },
          {
            "title": "Based on Open Source solutions",
            "content": "Cloudy Pad is based on Open Source solutions like <b><a href='https://github.com/moonlight-stream' class='link'>Moonlight</a></b> and <b><a href='https://github.com/LizardByte/Sunshine' class='link'>Sunshine</a></b>"
          },
        ]
      },
    ],

    "faq": {
      "title": "FAQ",
      "questions": [
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
          <img src="/crafteo-logo-transparent.png" alt="Cloudy Pad Logo" className="h-8 w-8" />
          <span className="text-xl font-bold tracking-wider text-neon-blue text-center">{data?.name}</span>
        </div>
        <div className="flex items-center space-x-6">
          {alwaysVisible.map(index => {
            const link = data.navLinks[index];

            // when link starts with #, it's an internal link directly in the page
            const isInternalLink = link.url.startsWith('#');
            return (
              <a 
                href={link.url} 
                key={index} 
                {...(isInternalLink ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                className="cyberpunk-card neon-white neon-border transition-all duration-300 px-3 py-2 text-lg"
              >
                <div className="flex items-center space-x-2">
                  {link.imageLink && <img src={link.imageLink} width={20} height={20} />}
                  {link.useIcon === "github" && <img src="/github.svg" className="w-5 h-5 filter invert" />}
                  <span dangerouslySetInnerHTML={{ __html: link.title }}></span>
                </div>
              </a>
            );
          })}
          {hiddenLinks.length > 0 && (
            <div className="relative">
              <button
                className="text-foreground hover:text-neon-blue focus:outline-none px-2 transition-colors"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              </button>
              {menuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-card border border-border rounded shadow-lg z-50">
                  {hiddenLinks.map(index => {
                    const link = data.navLinks[index];

                    // when link starts with #, it's an internal link directly in the page
                    const isInternalLink = link.url.startsWith('#');
                    return (
                      <a
                        href={link.url}
                        key={index}
                        {...(isInternalLink ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                        className="cyberpunk-card neon-border transition-all duration-300 p-2 m-1 text-sm"
                      >
                        <div className="flex items-center space-x-2">
                          {link.imageLink && <img src={link.imageLink} width={20} height={20} />}
                          {link.useIcon === "github" && <img src="/github.svg" className="w-5 h-5 filter invert" />}
                          <span dangerouslySetInnerHTML={{ __html: link.title }}></span>
                        </div>
                      </a>
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
      <section className="py-12 sm:py-20 md:py-24 bg-background text-foreground">
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
            <a href={callToActionUrl} target="_blank" rel="noopener noreferrer" className="block cyberpunk-card neon-border neon-blue shadow-neon-blue hover:shadow-neon-white max-w-md mx-auto transform hover:scale-105 transition-all cursor-pointer p-6">
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

      {/* Features Section */}
      <section className="py-10 sm:py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
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
            <a href={callToActionUrl} target="_blank" rel="noopener noreferrer" className="inline-block cyberpunk-card neon-border neon-blue shadow-neon-blue hover:shadow-neon-white transform hover:scale-105 transition-all cursor-pointer px-8 py-4">
              <h3 className="text-lg font-bold text-center text-neon-white">Start Playing Now</h3>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-10 sm:py-16 md:py-20 bg-background">
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
            <a href={documentationUrl} className="block cyberpunk-card neon-border neon-blue shadow-neon-blue hover:shadow-neon-white transition-all duration-300 p-4 sm:p-6 md:p-8 text-center transform hover:scale-105">
              <h3 className="font-bold text-neon-white mb-4 text-lg">
                DIY with Cloudy Pad CLI
              </h3>
              <p className="text-foreground text-sm sm:text-base">Use Cloudy Pad CLI, a Free and Open Source project to deploy your own instance</p>
            </a>
            
            <a href={callToActionUrl} className="block cyberpunk-card neon-border neon-blue shadow-neon-blue hover:shadow-neon-white transition-all duration-300 p-4 sm:p-6 md:p-8 text-center transform hover:scale-105">
              <h3 className="font-bold text-neon-white mb-4 text-xl">
                Start Playing Now
              </h3>
              <p className="text-foreground text-sm sm:text-base">Deploy your instance in a few clicks and play your own Steam games</p>
            </a>
            
            <a href={discordUrl} className="block cyberpunk-card neon-border neon-blue shadow-neon-blue hover:shadow-neon-white transition-all duration-300 p-4 sm:p-6 md:p-8 text-center transform hover:scale-105">
              <h3 className="font-bold text-neon-white mb-4 text-lg">
                Join the Community
              </h3>
              <p className="text-foreground text-sm sm:text-base">Join our community on Discord to get support and help from other Cloudy Pad users.</p>
            </a>
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