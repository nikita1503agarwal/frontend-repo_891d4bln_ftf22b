import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Locations from './components/Locations'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Navbar />
      <Hero />
      <Features />
      <Locations />
      <CTA />
      <footer className="bg-black/90 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} JPLS Software. All rights reserved.</p>
          <div className="text-white/50 text-sm">Santa Cruz de la Sierra, Bolivia • Florida, USA</div>
        </div>
      </footer>
    </div>
  )
}

export default App
