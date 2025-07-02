"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";

const callToActionUrl = "https://app.cloudypad.gg";
const documentationUrl = "https://docs.cloudypad.gg";
const githubUrl = "https://github.com/PierreBeucher/cloudypad";
const discordUrl = "https://discord.com/invite/QATA3b9TTa";
const pricingUrl = "https://app.cloudypad.gg/pricing";

export default function Home() {
  const data = {
    "name": "Cloudy Pad",
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
        "imageLink": "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
      },
      {
        "title": "Discord",
        "url": discordUrl,
        "imageLink": "https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/636e0a69f118df70ad7828d4_icon_clyde_blurple_RGB.svg"
      }
    ],
    "heroSection": {
      "title": "Cloudy Pad",
      "subtitle": "Play on Your Own Terms",
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
            "title": "Connect and install your Steam games",
            "content": "Connect to instance to access your remote desktop with Steam pre-installed and download your own Steam games - all your library is available !"
          },
          {
            "title": "Enjoy Gaming in high resolution !",
            "content": "The game runs on your powerful cloud machine and streams at home to your device"
          },
          {
            "title": "Join the Community",
            "content": "Get support directly from the Founder and the community on <b><a href='${discordUrl}'>Discord</a></b> and <b><a href='${githubUrl}'>GitHub</a></b>"
          }
        ]
      },
      {
        "title": "Free & Open Source DIY solution 🐧",
        "descriptions": [
          {
            "title": "Deploy your own instance",
            "content": `<b><a href='${githubUrl}'>Cloudy Pad CLI</a></b> is a Free and Open Source tool to deploy on your own Cloud provider account`
          },
          {
            "title": "Supports various Cloud providers",
            "content": "Play using powerful machines on AWS, Azure, Google Cloud, Paperspace or Scaleway."
          },
          {
            "title": "Get Support from the Community",
            "content": `Join our community on <b><a href='${discordUrl}'>Discord</a></b> and <b><a href='${githubUrl}'>GitHub</a></b> to get help setting up your instance`
          },
          {
            "title": "Based on Open Source solutions",
            "content": "Cloudy Pad is based on Open Source solutions like <b><a href='https://github.com/moonlight-stream'>Moonlight</a></b> and <b><a href='https://github.com/LizardByte/Sunshine'>Sunshine</a></b>"
          },
        ]
      },
      // {
      //   "title": "🌥️ Deploy Anywhere in the Cloud",
      //   "descriptions": [
      //     {
      //       "title": "Direct Cloud Deployment",
      //       "content": "Deploy directly on <b>AWS</b>, <b>Azure</b>, <b>Google Cloud</b>, or <b>Paperspace</b>."
      //     },
      //     {
      //       "title": "As powerful as you need",
      //       "content": "Deploy <b>powerful instances</b> using any <b>GPU</b>, <b>Disk size</b> and <b>CPU/RAM</b>."
      //     },
      //     {
      //       "title": "Spot Instances",
      //       "content": "Use Spot instances for <b>up to 90% cheaper instances.</b>"
      //     },
      //     {
      //       "title": "Stay in Control, pay by the hour",
      //       "content": "Play up to <b>30 hours</b> per month for <b>less than 15$</b>."
      //     },
      //   ]
      // },
      // {
      //   "title": "🪄 Turn your Desktop / Server into a Cloud Gaming instance",
      //   "descriptions": [
      //     { 
      //       "bullet": "ℹ️",
      //       "title": "Coming soon !",
      //       "content": "This feature is being implemented and should land in a few weeks."
      //     },
      //     {
      //       "title": "Local deployment",
      //       "content": "Transform your home Desktop into a remote gaming instance."
      //     },
      //     {
      //       "title": "Remote deployment via SSH",
      //       "content": "Make your remote server into a Cloud Gaming instance."
      //     },
  
      //   ]
      // },
      // {
      //   "title": "⚡ Cloudy Pad Gamer: Managed Solution",
      //   "descriptions": [
      //     {
      //       "title": "Same experience, Lower price",
      //       "content": "Cloudy Pad Gamer offer a premium, managed solution based on Cloudy Pad Core. The same experience for a fraction of the price."
      //     },
      //     {
      //       "title": "No technical skills required",
      //       "content": "Deploy your Cloud Gaming instances in minutes on our managed solution"
      //     },
      //     {
      //       "title": "Advanced features",
      //       "content": "Auto stop inactive instances to avoid overspending, billing alerts, security, and more !"
      //     },
      //   ]
      // }
    ],
    "actionSection": {
      "title": "Get Started with Cloudy Pad",
      "features": [
        {
          "title": "DIY with Cloudy Pad CLI",
          "description": "Use Cloudy Pad CLI, a Free and Open Source project to deploy your own instance",
          "url": documentationUrl,
          "size": "small"
        },
        {
          "title": "Start Playing Now",
          "description": "Deploy your instance in a few clicks and play your own Steam games",
          "url": callToActionUrl,
          "size": "large"
        },
        {
          "title": "Join the Community",
          "description": "Join our community on Discord to get support and help from other Cloudy Pad users.",
          "url": discordUrl,
          "size": "small"
        },
      ],
    },
    "faq": {
      "title": "FAQ",
      "questions": [
        {
          "question": "What are the requirements to use Cloudy Pad?",
          "answer": "You need a stable internet connection (minimum 10Mbps), a device to play on (Windows PC, Mac, Linux, SmartTV, Phone, or Tablet) on which you'll be able to install <b><a href='https://moonlight-stream.org/'>Moonlight client</a></b>, and a Steam account with your games."
        },
        {  
          "question": "Do I need a powerful machine or a gaming PC to use Cloudy Pad?",
          "answer": "<b>No, you don't need a powerful machine or a gaming PC to use Cloudy Pad</b>. You game will run on a powerful cloud machine and streams at home to your device, even small devices like phones, tablets or low-end laptops."
        },
        {
          "question": "Do you offer a free trial?",
          "answer": `During the Beta new users are elligible to <b>5 hours of free trial</b>. Just <b><a href='${callToActionUrl}'>Create an account</a></b> and follow the instructions to get your free trial !`
        },
        {
          "question": "What games are supported?",
          "answer": "Any Steam game which works natively on Linux. Vast majority of Windows games are supported with Proton (a Steam compatibility layer which is also used by the Steam Deck). See <b><a href='https://www.protondb.com/'>ProtonDB</a></b> for a list of supported Windows games."
        },
        {
          "question": "Are my game data and saves games persisted across sessions?",
          "answer": "Of course ! Your game data and saves are persisted when you stop your instance. As most Steam games support Cloud sync, you'll also be able to pick up where you left off from another machine."
        },
        {
          "question": "Will my existing game saves be available on Cloudy Pad ?",
          "answer": "Most Steam games support Cloud sync - in which case your saves will be available on Cloudy Pad after you installed your game."
        },
        {
          "question": "Are Controllers supported ?",
          "answer": "Yes, controllers are supported (Xbox, Sony DualSense / DualShock, etc.). You can use your controller to play your games on Cloudy Pad. "
        }

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
      <nav className="flex flex-wrap items-center justify-between p-4 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <img src="/crafteo-logo.png" alt="CloudyPad Logo" width={32} height={32} />
          <span className="font-semibold text-xl">{data?.name}</span>
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
                className="flex items-center space-x-2 text-lg"
              >
                {link.imageLink && <img src={link.imageLink} width={32} height={32} />}
                <span dangerouslySetInnerHTML={{ __html: link.title }}></span>
              </a>
            );
          })}
          {hiddenLinks.length > 0 && (
            <div className="relative">
              <button
                className="text-gray-700 focus:outline-none px-2"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              </button>
              {menuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-50">
                  {hiddenLinks.map(index => {
                    const link = data.navLinks[index];

                    // when link starts with #, it's an internal link directly in the page
                    const isInternalLink = link.url.startsWith('#');
                    return (
                      <a
                        href={link.url}
                        key={index}
                        {...(isInternalLink ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                        className="flex items-center space-x-2 p-2 border-b last:border-b-0 hover:bg-gray-100"
                      >
                        {link.imageLink && <img src={link.imageLink} width={25} height={25} />}
                        <span dangerouslySetInnerHTML={{ __html: link.title }}></span>
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full bg-gray-800 text-white py-20 sm:py-24 md:py-32" style={{ backgroundImage: "url('/gamepad-cloud-2.png')", backgroundSize: 'cover', backgroundPosition: 'center'  }}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">{data.heroSection.title}</h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">{data.heroSection.subtitle}</h2>
        </div>
      </section>

      {/* Tagline Section */}
      <section className="py-12 sm:py-20 md:py-24 bg-gray-700 text-white text-center">
        <div className="w-full xl:w-3/5 mx-auto px-4">
          <p className="mb-6 sm:mb-8 text-xl sm:text-2xl md:text-3xl font-bold">🎮 Play your Steam games without restriction: all your library is available, you are not limited to a pre-defined game list !</p> 
          <p className="mb-4 sm:mb-6 text-base sm:text-lg md:text-xl">Play anywhere from any device: MacOS, Windows, Linux, SmartTV, Phone, Tablet...</p>
          <p className="mb-4 sm:mb-6 text-base sm:text-lg md:text-xl">⚡ 4K, 120 FPS or 1080p, 60 FPS ? Choose your resolution and frame rate, powered by high-end cloud GPUs — no expensive PC or hardware needed</p>
          <p className="mb-4 sm:mb-6 text-base sm:text-lg md:text-xl"><b>Get 5 hours Free Trial by <a href={callToActionUrl} className="underline">Joining the Beta</a> !</b></p>
          <Button className="bg-blue-600 text-white font-bold text-lg sm:text-xl px-8 sm:px-12 py-10 mt-6">
            <a href={callToActionUrl} target="_blank" rel="noopener noreferrer">Start Playing Now</a>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-10 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            {data.features.map((feature, index) => (
              <div key={index} className="flex flex-col items-start gap-4 sm:gap-6 bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4 w-full text-center">{feature.title}</h2>
                <div className="space-y-2 sm:space-y-4 mb-2 sm:mb-4">
                  {feature.descriptions.map((desc, i) => (
                    <div key={i} className="flex items-start gap-2 sm:gap-3">
                      <div className="mt-1 text-green-500">✓</div>
                      <div className="space-y-1 sm:space-y-2">
                        <h3 className="font-semibold text-base sm:text-lg">{desc.title}</h3>
                        <p className="text-gray-800 text-sm sm:text-base" dangerouslySetInnerHTML={{ __html: desc.content }}></p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button className="bg-blue-600 text-white font-bold text-lg sm:text-xl px-8 sm:px-12 py-10">
              <a href={callToActionUrl} target="_blank" rel="noopener noreferrer">Start Playing Now</a>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-10 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">{data.faq.title}</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 max-w-3xl mx-auto">
            {data.faq.questions.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900">{item.question}</h3>
                <p className="text-gray-800" dangerouslySetInnerHTML={{ __html: item.answer }}></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Action Section */}
      <section className="py-10 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">{data.actionSection.title}</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-16">
            {data.actionSection.features.map((feature, index) => (
              <a href={feature.url} className="block bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-sm text-center" key={index}>
                <Button className={`font-bold px-8 py-6 bg-blue-600 text-white ${feature.size === "large" ? "text-lg" : "text-base"}`}>
                  {feature.title}
                </Button>
                <p className="text-gray-800 text-sm sm:text-base mb-4 mt-4">{feature.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-foreground py-8 sm:py-12">
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
                <span className="font-semibold">{data?.name}</span>
              </div>
              <p className="text-gray-600 text-sm sm:text-base text-center sm:text-left">{data.footer.description}</p>
            </div>
            <div></div>
            <div></div>
            <div className="flex flex-col items-center sm:items-start">
              <h3 className="font-semibold mb-2 sm:mb-4">Social</h3>
              <div className="flex space-x-2 sm:space-x-4 justify-center sm:justify-start w-full">
                {data.footer.social.map((social, index) => (
                  <a
                    key={index}
                    target="_blank" href={social.url}
                    className="text-gray-600 hover:text-gray-900 text-sm sm:text-base"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t mt-8 sm:mt-12 pt-4 sm:pt-8 text-center text-gray-600 text-xs sm:text-base">
            <p>
              {data.footer.copyright}
              {" "}|{" "}
              <a href="/privacy" className="underline hover:text-gray-900" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}