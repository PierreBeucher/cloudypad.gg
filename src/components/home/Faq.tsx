import constants from "@/constants";

const FAQ_DATA = {
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
            "answer": `During the Beta new users are elligible to a few hours of <b>free trial</b>. Just <b><a href='${constants.URLs.cta}' class='link'>Create an account</a></b> and follow the instructions to get your free trial !`
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
};
export default function FAQSection() {
    return <section id="faq" className="py-10 sm:py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 text-neon-white">{FAQ_DATA.title}</h2>
            </div>

            <div className="grid grid-cols-1 gap-6 max-w-3xl mx-auto">
                {FAQ_DATA.questions.map((item, index) => (
                    <div key={index} className="cyberpunk-card transition-all duration-300 p-6">
                        <h3 className="text-lg sm:text-xl font-bold mb-2 text-neon-white">{item.question}</h3>
                        <p className="text-foreground" dangerouslySetInnerHTML={{ __html: item.answer }}></p>
                    </div>
                ))}
            </div>
        </div>
    </section>
}