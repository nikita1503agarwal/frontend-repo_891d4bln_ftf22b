function Locations() {
  return (
    <section id="locations" className="relative bg-[#0b0b14] text-white">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Two hubs. One mission.</h2>
            <p className="mt-4 text-white/70">We operate across two strategic locations to serve clients efficiently in the Americas.</p>
            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <h3 className="text-xl font-medium">Santa Cruz de la Sierra</h3>
                <p className="text-white/70 text-sm mt-2">Our Bolivian HQ driving innovation for LATAM clients with nearshore advantage.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <h3 className="text-xl font-medium">Florida, USA</h3>
                <p className="text-white/70 text-sm mt-2">Client success and partnerships with access to the U.S. market.</p>
              </div>
            </div>
          </div>
          <div>
            <div className="aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-fuchsia-500/20 via-violet-500/10 to-cyan-400/20 p-1">
              <div className="h-full w-full rounded-xl bg-black/60 grid grid-cols-2">
                <div className="p-6">
                  <p className="text-sm text-white/60">Timezone</p>
                  <p className="text-lg">GMT-4 (BO)</p>
                  <p className="mt-4 text-sm text-white/60">Focus</p>
                  <p className="text-lg">Engineering & Design</p>
                </div>
                <div className="p-6 border-l border-white/10">
                  <p className="text-sm text-white/60">Timezone</p>
                  <p className="text-lg">GMT-5 (ET)</p>
                  <p className="mt-4 text-sm text-white/60">Focus</p>
                  <p className="text-lg">Client Success</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Locations
