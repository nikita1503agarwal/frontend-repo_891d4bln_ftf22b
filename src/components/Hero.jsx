import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#05050a]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
            JPLS Software • Bolivia & Florida
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
            Futuristic software, crafted for real business impact
          </h1>
          <p className="mt-5 text-lg text-white/70">
            We build elegant, scalable SaaS platforms for companies across Latin America and the USA. From Santa Cruz de la Sierra to Florida, we deliver innovation with precision.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#cta" className="pointer-events-auto inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-3 font-medium hover:bg-white/90 transition">Request a demo</a>
            <a href="#features" className="pointer-events-auto inline-flex items-center justify-center rounded-full bg-white/10 text-white px-6 py-3 font-medium hover:bg-white/20 transition">Explore features</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
