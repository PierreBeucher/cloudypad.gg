const jsondata = {
  "name": "Cloudy Pad",
  "navLinks": ["Start playing!", "Documentation", "About", "Github"],
  "heroSection": {
    "title": "Cloudy Pad",
    "subtitle": "Play on Your Own Terms",
    "description": "Cloudy Pad is a free, open source Cloud gaming solution. Deploy your own cloud gaming machine in minutes and play your own games on Steam, Lutris, Pegasus, and more!",
    "buttonText": "Start Gaming Now",
  },
  "features": [
    {
      "title": "Key Features 🎮",
      "descriptions": [
        {
          "title": "Your Own Games, Anywhere",
          "content": "Run your own <b>Steam</b>, <b>Pegasus</b>, and <b>Lutris</b> games anywhere."
        },
        {
          "title": "Deploy in the Cloud",
          "content": "Deploy on <b>any existing machine or server</b> or directly on <b>AWS, Azure, Google Cloud, or Paperspace</b>."
        },
        {
          "title": "Moonlight Compatibility",
          "content": "Compatible with Moonlight Streaming client."
        }
      ]
    },
    {
      "title": "Free & Open Source 🐧",
      "descriptions": [
        {
          "title": "Free and Open Source",
          "content": "<b>Cloudy Pad Core</b> is Free and Open Source."
        },
        {
          "title": "Get Support from and Contribute to the Community",
          "content": "Join our <b>community</b> on <b>Discord</b> and <b>GitHub</b> to contribute and get support"
        },
        {
          "title": "Based on Open Source solutions",
          "content": "Cloudy Pad leverages <b>Sunshine</b> and <b>Wolf</b> streaming servers."
        }
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
          "title": "Local deployment",
          "content": "Transform your home Desktop into a remote gaming instance."
        },
        {
          "title": "Remote deployment via SSH",
          "content": "Make your remote server into a Cloud Gaming instance."
        },

      ]
    },
    {
      "title": "🚀 Cloudy Pad Gamer: Managed Solution",
      "descriptions": [
        {
          "title": "Same experience, Lower price",
          "content": "Cloudy Pad Gamer offer a premium, managed solution based on Cloudy Pad Core. The same experience for a fraction of the price."
        },
        {
          "title": "No technical skills required",
          "content": "Deploy your Cloud Gaming instances in minutes on our managed solution"
        },
        {
          "title": "Advanced features",
          "content": "Auto stop inactive instances to avoid overspending, billing alerts, security, and more !"
        },
      ]
    }
  ],
  "aboutUs": {
    "title": "About Cloudy Pad",
    "subtitle": "The Future of Cloud Gaming",
    "features": [
      {
        "icon": "Cloud",
        "title": "Cloud-Powered Gaming",
        "description": "Leverage the power of the cloud to play your favorite games from anywhere."
      },
      {
        "icon": "Settings",
        "title": "Customizable Hardware",
        "description": "Tailor your gaming experience with customizable GPU, disk size, and more."
      },
      {
        "icon": "Clock",
        "title": "Pay by the Hour",
        "description": "Only pay for the time you use, keeping your gaming costs under control."
      },
      {
        "icon": "Monitor",
        "title": "Multi-Platform Support",
        "description": "Supports Steam, Lutrics, Pegasus, and more for a seamless gaming experience."
      }
    ],
    "ctaTitle": "Experience the Future of Gaming",
    "ctaDescription": "Join thousands of gamers who have already transformed their gaming experience with Cloudy Pad. Our cloud-powered platform makes it easier than ever to play your favorite games from anywhere.",
    "ctaButtons": ["Start Gaming Now", "Watch Demo"]
  },
  "testimonials": [
    {
      "avatar": "https://randomuser.me/api/portraits/men/75.jpg",
      "content": "Cloudy Pad has completely changed how I game. I can now play my favorite games from anywhere, and the customizable specs are a game-changer.",
      "name": "John Doe",
      "position": "Gaming Enthusiast"
    },
    {
      "avatar": "https://randomuser.me/api/portraits/women/45.jpg",
      "content": "As a busy professional, I love that I can pay by the hour and only use what I need. Cloudy Pad is the perfect solution for my gaming needs.",
      "name": "Jane Smith",
      "position": "Professional Gamer"
    },
    {
      "avatar": "https://randomuser.me/api/portraits/men/32.jpg",
      "content": "The multi-platform support is fantastic. I can switch between Steam and Lutrics seamlessly. Cloudy Pad is a must-have for any gamer.",
      "name": "Mike Johnson",
      "position": "Tech Reviewer"
    }
  ],
  "faqs": [
    {
      "question": "How much does Cloudy Pad cost?",
      "answer": "Cloudy Pad offers a pay-by-the-hour pricing model, so you only pay for the time you use. Customizable specs may affect the overall cost."
    },
    {
      "question": "Can I use Cloudy Pad on multiple devices?",
      "answer": "Yes, Cloudy Pad is accessible from any device with an internet connection, allowing you to game from anywhere."
    },
    {
      "question": "What platforms does Cloudy Pad support?",
      "answer": "Cloudy Pad supports Steam, Lutrics, Pegasus, and more, providing a seamless gaming experience across multiple platforms."
    }
  ],
  "faqSection": {
    "title": "Frequently Asked Questions About Cloudy Pad"
  },
  "ctaSection": {
    "title": "Ready to Start Gaming?",
    "description": "Start for free. No credit card required.",
    "buttonText": "Get Started Free"
  },
  "footer": {
    "description": "Cloudy Pad is a cloud gaming platform that allows you to play your favorite games from anywhere.",
    "products": ["Cloud Gaming", "Cloudy Pad", "GameSpec"],
    "legal": ["Privacy Policy", "Terms of Service"],
    "social": ["Twitter", "GitHub", "Discord", "Telegram"],
    "copyright": "© 2024 • Cloudy Pad All rights reserved."
  }
};

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  Bell,
  File,
  HardDriveDownloadIcon,
  Settings,
} from "lucide-react";


export default function Home({ data = jsondata }) {
  return (
    <div className="min-h-screen">
      <nav className="flex items-center justify-between p-4 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <img src="/crafteo-logo.png" alt="CloudyPad Logo" width={32} height={32} />
          <span className="font-semibold text-xl">{data?.name}</span>
        </div>
        <div className="flex items-center space-x-6">
          {data.navLinks.map((link, index) => (
            <a href="#" key={index}>
              {link}
            </a>
          ))}
          <Button>Sign In</Button>
        </div>
      </nav>

      <section className="w-full bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold mb-4">{data.heroSection.title}</h1>
          <h2 className="text-4xl font-semibold">{data.heroSection.subtitle}</h2>
        </div>
      </section>

      <div className="w-full h-1 bg-gray-700"></div> {/* Separator */}

      <section className="py-20 bg-gray-700 text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <p className="mb-6 text-2xl">Cloudy Pad lets you play your own games without requiring a powerful gaming machine.</p> 
          <p className="mb-6 text-2xl">Run your game in the Cloud and play anywhere using any device!</p>
          <Button className="bg-blue-600 text-white font-bold text-lg px-8 py-4">Start Playing Now</Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {data.features.map((feature, index) => (
            <div key={index} className="flex flex-col items-start gap-6">
              <h2 className="text-3xl font-bold mb-4">{feature.title}</h2>
              <div className="space-y-4 mb-4">
                {feature.descriptions.map((desc, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 text-green-500">✓</div>
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
      </section>


      {/* About Us Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{data.aboutUs.title}</h2>
            <p className="text-xl text-gray-600">{data.aboutUs.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {data.aboutUs.features.map((feature, index) => (
              <div className="bg-white p-8 rounded-lg shadow-sm" key={index}>
                <feature.icon className="mb-4 w-10 h-10 text-primary" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-6">{data.aboutUs.ctaTitle}</h3>
            <p className="text-gray-600 mb-8">{data.aboutUs.ctaDescription}</p>
            <div className="flex justify-center gap-4">
              {data.aboutUs.ctaButtons.map((buttonText, index) => (
                <Button key={index} className="px-8 py-6">
                  {buttonText}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          {data.faqSection.title}
        </h2>
        <Accordion type="single" collapsible>
          {data.faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="font-bold text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-muted">
            {data.ctaSection.title}
          </h2>
          <p className="text-lg mb-8 text-muted">
            {data.ctaSection.description}
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" variant="outline">
              {data.ctaSection.buttonText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
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
                  src="/logo.png"
                  alt="PageGen Logo"
                  width={32}
                  height={32}
                />
                <span className="font-semibold">{data?.name}</span>
              </div>
              <p className="text-gray-600">{data.footer.description}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Products</h3>
              <ul className="space-y-2">
                {data.footer.products.map((product, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      {product}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                {data.footer.legal.map((legalItem, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      {legalItem}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Social</h3>
              <div className="flex space-x-4">
                {data.footer.social.map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t mt-12 pt-8 text-center text-gray-600">
            <p>{data.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}