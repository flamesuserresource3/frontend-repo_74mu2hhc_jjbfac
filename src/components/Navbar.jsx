import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-black/50 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2">
          <div className="h-6 w-6 rounded bg-gradient-to-br from-[#8e2de2] to-violet-600" />
          <span className="font-semibold tracking-wide">TM Concepts GmbH</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#work" className="hover:text-white transition">Projekte</a>
          <a href="#services" className="hover:text-white transition">Leistungen</a>
          <a href="#contact" className="hover:text-white transition">Kontakt</a>
          <a href="#contact" className="ml-2 inline-flex items-center rounded-full bg-gradient-to-r from-[#8e2de2] to-fuchsia-500 px-4 py-2 text-sm font-medium hover:shadow-[0_0_30px_rgba(142,45,226,0.6)] transition">Kostenlose Beratung</a>
        </nav>
      </div>
    </header>
  )
}
