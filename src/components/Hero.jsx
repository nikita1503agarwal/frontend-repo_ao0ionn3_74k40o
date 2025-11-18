import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="top" className="relative h-[85vh] min-h-[560px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/40 to-slate-950/70 pointer-events-none" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">
        <div className="max-w-2xl">
          <p className="text-emerald-300/90 uppercase tracking-[0.35em] text-xs font-semibold mb-4">Independent Film Production</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white drop-shadow-[0_6px_40px_rgba(16,185,129,0.25)]">
            Stories carved in light
          </h1>
          <p className="mt-6 text-slate-200/90 text-lg leading-relaxed">
            We develop and produce award‑winning films and premium visual content for brands and audiences worldwide — guided by vision, crafted with precision.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="rounded-full bg-emerald-400 text-slate-900 px-5 py-2.5 font-semibold hover:bg-emerald-300 transition-colors">Future Projects</a>
            <a href="#portfolio" className="rounded-full border border-emerald-300/40 text-emerald-200 px-5 py-2.5 font-semibold hover:border-emerald-200/70 hover:text-emerald-100 transition-colors">Our Work</a>
          </div>
        </div>
      </div>
    </section>
  )
}
