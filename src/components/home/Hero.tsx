export default function HeroSection() {
    const data = {
        "title": "CLOUDY PAD",
        "subtitle": "Play On Your Own Terms",
    }
    return <section className="w-full bg-background text-foreground py-10 sm:py-12 md:py-12 relative overflow-hidden border-b border-border" style={{ backgroundImage: "url('/gamepad-cloud-2.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-background/80"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">{data.title}</h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-200">{data.subtitle}</h2>
        </div>
    </section>
}