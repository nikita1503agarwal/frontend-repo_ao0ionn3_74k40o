import { useState, useEffect } from 'react'
import { Menu, X, Film, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { href: '#projects', label: 'Future Projects' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#products', label: 'Products' },
    { href: '#about', label: 'About Us' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-slate-900/60 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#top" className="inline-flex items-center gap-2 text-white">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-emerald-400 via-cyan-400 to-violet-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <Film className="h-5 w-5" />
            </div>
            <span className="font-semibold tracking-wide">AURORA FILMS</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-slate-200/90 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium bg-emerald-400/90 hover:bg-emerald-400 text-slate-900 transition-colors">
              <Sparkles className="h-4 w-4" /> Collaborate
            </a>
          </nav>

          <button onClick={() => setOpen((v) => !v)} className="md:hidden text-white p-2">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/80 backdrop-blur">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block py-2 text-slate-200 hover:text-white">
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="block rounded-lg px-4 py-2 bg-emerald-400 text-slate-900 font-medium">
              Collaborate
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
