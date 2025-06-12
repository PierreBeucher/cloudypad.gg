import Image from "next/image";
import { Button } from "@/components/ui/button";

const callToActionUrl = "https://app.cloudypad.gg";
const documentationUrl = "https://docs.cloudypad.gg";
const githubUrl = "https://github.com/PierreBeucher/cloudypad";
const discordUrl = "https://discord.com/invite/QATA3b9TTa";
const moonlightUrl = "https://moonlight-stream.org/";

export default function Home() {

  const data = {
    "name": "Cloudy Pad",
    "navLinks": [
      {
        "title": "🎮 <b>Start Playing</b>",
        "url": callToActionUrl,
      },
      {
        "title": "📖 Documentation",
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
      "description": "Cloudy Pad is a free, open source Cloud gaming solution. Deploy your own cloud gaming machine in minutes and play your own games on Steam, Lutris, Pegasus, and more!",
      "buttonText": "Start Gaming Now",
    },
    "features": [
      {
        "title": "Play on Powerful Cloud Machines 🎮",
        "descriptions": [
          {
            "title": "Free trial for beta users",
            "content": `<a href='${callToActionUrl}'><u>Join Cloudy Pad beta</u></a> and get <b>2 hours free trial</b> !`
          },
          {
            "title": "Bring your own Steam games",
            "content": "Install and play <b>your own Steam</b> games without limitations"
          },
          {
            "title": "Pay by the hour, no subscription required",
            "content": "Choose your instance power level and pay by the hour"
          },
          {
            "title": "Moonlight Compatibility",
            "content": `Compatible with <a href='${moonlightUrl}'>Moonlight Streaming client</a>`
          }
        ]
      },
      {
        "title": "Free & Open Source DIY solution 🐧",
        "descriptions": [
          {
            "title": "Free and Open Source",
            "content": `<b><a href='${githubUrl}'>Cloudy Pad CLI</a></b> is a Free and Open Source project to deploy your own Cloud Gaming instance`
          },
          {
            "title": "Deploy anywhere in the Cloud",
            "content": "Play using powerful machines on <b>AWS, Azure, Google Cloud and other providers</b>."
          },
          {
            "title": "Get Support from and Contribute to the Community",
            "content": `Join our community on <b><a href='${discordUrl}'>Discord</a></b> and <b><a href='${githubUrl}'>GitHub</a></b> to contribute and get support`
          },
        ]
      },
      {
        "title": "🌥️ Deploy Anywhere in the Cloud",
        "descriptions": [
          {
            "title": "Direct Cloud Deployment",
            "content": "Deploy directly on <b>AWS</b>, <b>Azure</b>, <b>Google Cloud</b>, or <b>Paperspace</b>."
          },
          {
            "title": "As powerful as you need",
            "content": "Deploy <b>powerful instances</b> using any <b>GPU</b>, <b>Disk size</b> and <b>CPU/RAM</b>."
          },
          {
            "title": "Spot Instances",
            "content": "Use Spot instances for <b>up to 90% cheaper instances.</b>"
          },
          {
            "title": "Stay in Control, pay by the hour",
            "content": "Play up to <b>30 hours</b> per month for <b>less than 15$</b>."
          },
        ]
      },
      {
        "title": "🪄 Turn your Desktop / Server into a Cloud Gaming instance",
        "descriptions": [
          { 
            "bullet": "ℹ️",
            "title": "Coming soon !",
            "content": "This feature is being implemented and should land in a few weeks."
          },
          {
            "title": "Local deployment",
            "content": "Transform your home Desktop into a remote gaming instance."
          },
          {
            "title": "Remote deployment via SSH",
            "content": "Make your remote server into a Cloud Gaming instance."
          },
  
        ]
      },
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
          "url": documentationUrl
        },
        {
          "title": "Join Cloudy Pad beta",
          "description": "Deploy your instance in a few clicks and play your own Steam games",
          "url": callToActionUrl
        },
        {
          "title": "Get in touch with the Community",
          "description": "Join our community on Discord to get support and help from other Cloudy Pad users.",
          "url": discordUrl
        },
      ],
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

  return (
    <div className="min-h-screen">
      <nav className="flex items-center justify-between p-4 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <img src="/crafteo-logo.png" alt="CloudyPad Logo" width={32} height={32} />
          <span className="font-semibold text-xl">{data?.name}</span>
        </div>
        <div className="flex items-center space-x-6">
          {data.navLinks.map((link, index) => (
            <a href={link.url} key={index} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
              {link.imageLink && <img src={link.imageLink} width={25} height={25} />}
              <span dangerouslySetInnerHTML={{ __html: link.title }}></span>
            </a>
          ))}
          {/* <Button>Sign In</Button> */}
        </div>
      </nav>

      <section className="w-full bg-gray-800 text-white py-32" style={{ backgroundImage: "url('/gamepad-cloud-2.png')", backgroundSize: 'cover', backgroundPosition: 'center'  }}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold mb-4">{data.heroSection.title}</h1>
          <h2 className="text-4xl font-semibold">{data.heroSection.subtitle}</h2>
        </div>
      </section>

      <section className="py-20 bg-gray-700 text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <p className="mb-6 text-2xl">Cloudy Pad lets you play <b>your own games</b> without requiring a powerful gaming machine</p> 
          <p className="mb-6 text-2xl"><b>Play anywhere from any device</b> by running your game in the Cloud !</p>
          <Button className="bg-blue-600 text-white font-bold text-lg px-10 py-8">
            <a href={callToActionUrl} target="_blank" rel="noopener noreferrer">Start Playing Now</a>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {data.features.map((feature, index) => (
              <div key={index} className="flex flex-col items-start gap-6 bg-white p-8 rounded-lg shadow-sm">
                <h2 className="text-3xl font-bold mb-4">{feature.title}</h2>
                <div className="space-y-4 mb-4">
                  {feature.descriptions.map((desc, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-1 text-green-500">{ desc.bullet ? desc.bullet : '✓'}</div>
                      <div className="space-y-2">
                        <h3 className="font-semibold">{desc.title}</h3>
                        <p className="text-gray-800" dangerouslySetInnerHTML={{ __html: desc.content }}></p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{data.actionSection.title}</h2>
          </div>

          <div className={`grid md:grid-cols-3 gap-8 mb-16`}>
            {data.actionSection.features.map((feature, index) => (
              <a href={feature.url} className="block bg-white p-8 rounded-lg shadow-sm text-center" key={index}>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
      

      {/* Footer */}
      <footer className="bg-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image
                  src="/crafteo-logo.png"
                  alt="CloudyPad Logo"
                  width={32}
                  height={32}
                />
                <span className="font-semibold">{data?.name}</span>
              </div>
              <p className="text-gray-600">{data.footer.description}</p>
            </div>
            <div>
            </div>
            <div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Social</h3>
              <div className="flex space-x-4">
                {data.footer.social.map((social, index) => (
                  <a
                    key={index}
                    target="_blank" href={social.url}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t mt-12 pt-8 text-center text-gray-600">
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