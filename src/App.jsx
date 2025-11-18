import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { Projects, Portfolio, Products, About, Contact } from './components/Sections'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar />
      <Hero />

      <main>
        <Projects />
        <Portfolio />
        <Products />
        <About />
        <Contact />
      </main>

      <footer className="border-t border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} Aurora Films — All rights reserved.</p>
          <div className="text-sm text-slate-400">Crafted with care • Independent & Global</div>
        </div>
      </footer>
    </div>
  )
}

export default App
