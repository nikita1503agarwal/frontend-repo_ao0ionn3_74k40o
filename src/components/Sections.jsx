import { BadgeCheck, Award, Clapperboard, BookOpenCheck, Camera, Crown } from 'lucide-react'

export function Projects() {
  const decks = [
    { title: 'Northern Lights', logline: 'A coming‑of‑age road movie across Arctic towns.', status: 'Financing Q2 2025' },
    { title: 'Echoes of Silence', logline: 'A psychological drama about memory and truth.', status: 'Script locked' },
    { title: 'City of Dust', logline: 'Sci‑fi neo‑noir blending practical VFX and miniatures.', status: 'Packaging' },
  ]
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Future Projects</h2>
        <p className="mt-3 text-slate-300 max-w-2xl">Browse pitch‑deck snapshots of what we are developing next. Investors and partners can request access to full materials.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {decks.map((d) => (
            <article key={d.title} className="rounded-2xl border border-white/10 bg-slate-800/40 p-6 hover:bg-slate-800/60 transition-colors">
              <div className="flex items-center gap-3">
                <Clapperboard className="h-5 w-5 text-emerald-300" />
                <h3 className="text-xl font-semibold text-white">{d.title}</h3>
              </div>
              <p className="mt-3 text-slate-300">{d.logline}</p>
              <p className="mt-4 inline-flex items-center gap-2 text-emerald-300/90 text-sm"><BadgeCheck className="h-4 w-4" /> {d.status}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Portfolio() {
  const films = [
    { title: 'Glacier Heart', poster: 'https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?q=80&w=900&auto=format&fit=crop', credits: 'Director: A. Lee · DP: M. Novak', prizes: ['Best Cinematography — Frostbite FF', 'Audience Award — Polar Nights'] },
    { title: 'Neon Echo', poster: 'https://images.unsplash.com/photo-1581905764498-f1b60bae941a?q=80&w=900&auto=format&fit=crop', credits: 'Director: R. Cruz · DP: H. Ito', prizes: ['Best Short — Urban Visions', 'Official Selection — Tribeca'] },
    { title: 'Tide Sleepers', poster: 'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=900&auto=format&fit=crop', credits: 'Director: K. Øst · DP: J. Chan', prizes: ['Jury Prize — Coastline FF'] },
  ]
  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Portfolio</h2>
            <p className="mt-3 text-slate-300 max-w-2xl">A selection of films we produced — with posters, key credits and festival recognition.</p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-emerald-300/90">
            <Award className="h-5 w-5" /> <span className="text-sm">15+ Festival Awards</span>
          </div>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {films.map((f) => (
            <figure key={f.title} className="rounded-2xl overflow-hidden border border-white/10 bg-slate-800/40">
              <img src={f.poster} alt={f.title} className="h-64 w-full object-cover" />
              <figcaption className="p-5">
                <h3 className="text-lg font-semibold text-white">{f.title}</h3>
                <p className="mt-1 text-sm text-slate-300">{f.credits}</p>
                <ul className="mt-3 space-y-1 text-sm text-emerald-300/90">
                  {f.prizes.map((p) => (
                    <li key={p} className="flex items-center gap-2"><Crown className="h-4 w-4" /> {p}</li>
                  ))}
                </ul>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Products() {
  const items = [
    { title: 'Production Services', desc: 'End‑to‑end film production for brands and agencies.', icon: Camera },
    { title: 'Filmmaking Course', desc: 'A 6‑week intensive on story, cinematography and post.', icon: BookOpenCheck },
    { title: 'Director’s Notebook', desc: 'A limited‑edition book on our process and frames.', icon: Clapperboard },
  ]
  return (
    <section id="products" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Products</h2>
        <p className="mt-3 text-slate-300 max-w-2xl">Services and learning experiences designed for clients, creators and fans.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-slate-800/40 p-6 hover:bg-slate-800/60 transition-colors">
              <Icon className="h-6 w-6 text-emerald-300" />
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-slate-300">{desc}</p>
              <button className="mt-4 inline-flex items-center rounded-full bg-emerald-400 text-slate-900 px-4 py-2 text-sm font-semibold hover:bg-emerald-300">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function About() {
  const values = [
    { title: 'Vision', desc: 'Bold cinematic worlds rooted in human truth.' },
    { title: 'Mission', desc: 'Develop auteur‑driven stories and deliver with craft.' },
    { title: 'Values', desc: 'Integrity, curiosity, collaboration, and grit.' },
  ]
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">About Us</h2>
        <p className="mt-3 text-slate-300 max-w-2xl">Independent, globally minded, relentlessly quality‑driven.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-white/10 bg-slate-800/40 p-6">
              <h3 className="text-lg font-semibold text-white">{v.title}</h3>
              <p className="mt-2 text-slate-300">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact" className="py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-2xl overflow-hidden border border-white/10">
          <div className="grid md:grid-cols-2">
            <div className="bg-gradient-to-br from-emerald-500/20 via-cyan-500/20 to-violet-600/20 p-8">
              <h3 className="text-2xl font-bold text-white">Let’s make something unforgettable</h3>
              <p className="mt-3 text-slate-200/90">Tell us about your project. We typically reply within 24 hours.</p>
              <ul className="mt-6 space-y-2 text-slate-200/80 text-sm">
                <li>• Commercials, features, documentaries</li>
                <li>• Pitch deck consulting and packaging</li>
                <li>• Production services worldwide</li>
              </ul>
            </div>
            <form className="bg-slate-900 p-8 space-y-4">
              <div>
                <label className="block text-sm text-slate-300">Name</label>
                <input className="mt-1 w-full rounded-lg bg-slate-800/60 border border-white/10 px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/60" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm text-slate-300">Email</label>
                <input type="email" className="mt-1 w-full rounded-lg bg-slate-800/60 border border-white/10 px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/60" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm text-slate-300">Message</label>
                <textarea rows={4} className="mt-1 w-full rounded-lg bg-slate-800/60 border border-white/10 px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/60" placeholder="Project brief, timeline, budget..." />
              </div>
              <button type="button" className="w-full rounded-lg bg-emerald-400 text-slate-900 font-semibold py-2 hover:bg-emerald-300">Send Inquiry</button>
              <p className="text-xs text-slate-400">By clicking Send, you agree to our terms and privacy policy.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
