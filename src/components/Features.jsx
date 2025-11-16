function Features() {
  const items = [
    {
      title: 'Clean, futuristic UX',
      desc: 'Dark, elegant interfaces with motion that feels alive and purposeful.'
    },
    {
      title: 'Enterprise-grade SaaS',
      desc: 'Multi-tenant architecture, secure auth, billing integrations, analytics.'
    },
    {
      title: 'From Bolivia to the world',
      desc: 'Based in Santa Cruz de la Sierra with presence in Florida for nearshore speed.'
    },
    {
      title: 'AI-first solutions',
      desc: 'Intelligent features using modern ML to automate and accelerate workflows.'
    },
  ]
  return (
    <section id="features" className="relative bg-[#0a0a12] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(124,58,237,0.15),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((f, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition hover:bg-white/[0.06]">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-fuchsia-500 via-violet-500 to-cyan-400 mb-4" />
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="text-white/70 mt-2 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
