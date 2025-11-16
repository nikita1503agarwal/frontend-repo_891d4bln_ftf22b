function CTA() {
  return (
    <section id="cta" className="relative bg-[#0a0a12] text-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-fuchsia-500/20 via-violet-500/10 to-cyan-400/20 p-[1px]">
          <div className="rounded-3xl bg-black/70 p-8 sm:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold">Let’s build your SaaS</h2>
            <p className="mt-4 text-white/70 max-w-2xl mx-auto">Tell us about your product vision and we’ll come back with a tailored roadmap, timeline, and investment.</p>
            <form action="#" onSubmit={(e) => e.preventDefault()} className="mt-8 grid sm:grid-cols-[1fr_auto] gap-3 max-w-xl mx-auto">
              <input type="email" placeholder="you@company.com" className="w-full rounded-full bg-white/10 border border-white/10 px-5 py-3 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-violet-500" />
              <button className="rounded-full bg-white text-black px-6 py-3 font-medium hover:bg-white/90 transition">Request demo</button>
            </form>
            <p className="mt-3 text-xs text-white/50">We’ll reply within 24 hours.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
