import constants from "@/constants"

const features = [
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
                "content": `Get support directly from the Founder and the community on <b><a href='${constants.URLs.social.github}' class='link'>Discord</a></b> and <b><a href='${constants.URLs.social.github}' class='link'>GitHub</a></b>`
            }
        ]
    },
    {
        "title": "Also available as a Free & Open Source DIY solution",
        "descriptions": [
            {
                "title": "Deploy your own instance",
                "content": `<b><a href='${constants.URLs.social.github}' class='link'>Cloudy Pad CLI</a></b> is a Free and Open Source tool to deploy on your own Cloud provider account`
            },
            {
                "title": "Supports various Cloud providers",
                "content": "Play using powerful machines on AWS, Azure, Google Cloud, Paperspace or Scaleway."
            },
            {
                "title": "Get Support from the Community",
                "content": `Join our community on <b><a href='${constants.URLs.social.discord}' class='link'>Discord</a></b> and <b><a href='${constants.URLs.social.discord}' class='link'>GitHub</a></b> to get help setting up your instance`
            },
            {
                "title": "Based on Open Source solutions",
                "content": "Cloudy Pad is based on Open Source solutions like <b><a href='https://github.com/moonlight-stream' class='link'>Moonlight</a></b> and <b><a href='https://github.com/LizardByte/Sunshine' class='link'>Sunshine</a></b>"
            },
        ]
    },
];
export default function FeatureCardSection() {

    return <section className="py-10 sm:py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
                {features.map((feature, index) => (
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
                <a href={constants.URLs.cta} target="_blank" rel="noopener noreferrer" className="inline-block cyberpunk-card neon-border neon-blue shadow-neon-blue hover:shadow-neon-white transform hover:scale-105 transition-all cursor-pointer px-8 py-4">
                    <h3 className="text-lg font-bold text-center text-neon-white">Start Playing Now</h3>
                </a>
            </div>
        </div>
    </section>
}