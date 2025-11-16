import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-fuchsia-500 via-violet-500 to-cyan-400 shadow-lg" />
            <span className="text-white text-lg font-semibold tracking-tight">JPLS Software</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a>
            <a href="#locations" className="text-white/80 hover:text-white transition-colors">Locations</a>
            <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
            <a href="#cta" className="inline-flex items-center rounded-full bg-white/10 hover:bg-white/20 text-white px-4 py-2 transition-colors">Get a demo</a>
          </nav>
          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-white/10 text-white/90 hover:text-white hover:bg-white/10 transition">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#features" className="block text-white/80 hover:text-white transition-colors">Features</a>
            <a href="#locations" className="block text-white/80 hover:text-white transition-colors">Locations</a>
            <a href="#contact" className="block text-white/80 hover:text-white transition-colors">Contact</a>
            <a href="#cta" className="inline-flex items-center rounded-full bg-white/10 hover:bg-white/20 text-white px-4 py-2 transition-colors">Get a demo</a>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
