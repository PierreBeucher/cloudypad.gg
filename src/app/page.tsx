const jsondata = {
  "name": "Cloudy Pad",
  "navLinks": ["Start playing!", "Documentation", "About", "Github"],
  "heroSection": {
    "title": "Cloudy Pad",
    "subtitle": "Play on Your Own Terms",
    "description": "Cloudy Pad is a free, open source Cloud gaming solution. Deploy your own cloud gaming machine in minutes and play your own games on Steam, Lutris, Pegasus, and more!",
    "buttonText": "Start Gaming Now",
    "userFeedback": "From 100+ happy gamers"
  },
  "heroImage": "https://images.unsplash.com/photo-1598550476439-6847785fcea6",
  "userAvatars": [
    "https://randomuser.me/api/portraits/men/75.jpg",
    "https://randomuser.me/api/portraits/women/45.jpg",
    "https://randomuser.me/api/portraits/men/32.jpg"
  ],
  "features": [
    {
      "title": "What is Cloudy Pad",
      "image": "https://images.unsplash.com/photo-1511512578047-dfb367046420",
      "descriptions": [
        {
          "title": "Cloud Gaming",
          "content": "Play your favorite games from anywhere with Cloudy Pad."
        },
        {
          "title": "Multi-Platform Support",
          "content": "Supports Steam, Lutrics, Pegasus, and more."
        },
        {
          "title": "Customizable Specs",
          "content": "Tailor your gaming experience with customizable GPU, disk size, and more."
        }
      ]
    },
    {
      "title": "Why Choose Cloudy Pad",
      "image": "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3",
      "descriptions": [
        {
          "title": "Play Anywhere",
          "content": "Access your games from any device, anywhere."
        },
        {
          "title": "Pay by the Hour",
          "content": "Only pay for the time you use, keeping costs under control."
        },
        {
          "title": "High Performance",
          "content": "Experience top-tier gaming performance with customizable hardware."
        }
      ]
    },
    {
      "title": "How to Start Gaming",
      "image": "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3",
      "descriptions": [
        {
          "title": "Step 1",
          "content": "Sign up for Cloudy Pad and choose your gaming specs."
        },
        {
          "title": "Step 2",
          "content": "Install your favorite gaming platforms like Steam or Lutrics."
        },
        {
          "title": "Step 3",
          "content": "Start playing your games instantly from any device."
        }
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
  "userFeedback": {
    "title": "What Gamers Say About Cloudy Pad",
    "subtitle": "Real feedback from our valued users"
  },
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
          <img src="/logo.png" alt="CloudyPad Logo" width={32} height={32} />
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

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-2 gap-12">
        <div className="flex flex-col justify-center">
          <h1 className="text-6xl font-bold mb-6">{data.heroSection.title}</h1>
          <h2 className="text-4xl font-semibold mb-4">{data.heroSection.subtitle}</h2>
          <p className="text-xl text-gray-600 mb-8">
            {data.heroSection.description}
          </p>
          <Button className="w-fit text-lg px-8 py-6">
            {data.heroSection.buttonText}
          </Button>
          <div className="flex items-center mt-8 space-x-4">
            <div className="flex -space-x-2">
              {data.userAvatars.map((avatar, index) => (
                <img
                  src={avatar}
                  key={index}
                  className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"
                />
              ))}
            </div>
            <p className="text-sm text-gray-600">
              {data.heroSection.userFeedback}
            </p>
          </div>
        </div>
        <div className="relative">
          <img
            src={data.heroImage}
            alt="AI Landing Page Generator"
            width={600}
            height={600}
            className="rounded-lg shadow-xl h-[600px] w-[600px]"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        {data.features.map((feature, index) => (
          <div
            key={index}
            className={`max-w-7xl mx-auto px-4 mb-20 ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } flex flex-col lg:flex-row items-center gap-12`}
          >
            <div className="lg:w-1/2">
              <img
                src={feature.image}
                alt={feature.title}
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-4">{feature.title}</h2>
              <div className="space-y-4 mb-4">
                {feature.descriptions.map((desc, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 text-green-500">✓</div>
                    <div>
                      <h3 className="font-semibold">{desc.title}</h3>
                      <p className="text-gray-600">{desc.content}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button>Ready To Try 👉</Button>
            </div>
          </div>
        ))}
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