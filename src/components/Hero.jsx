import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-60">
        <Spline scene="https://prod.spline.design/e7wOq0QwzO8D-2Gz/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(142,45,226,0.18),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(168,85,247,0.15),transparent_30%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight"
        >
          Wachstumsstarke Webseiten & Funnels
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#8e2de2] to-fuchsia-500">für ambitionierte Marken</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="mt-4 text-white/80 max-w-2xl mx-auto"
        >
          Wir verbinden Design, Performance und klare Botschaften zu digitalen Erlebnissen, die Leads in Kunden verwandeln.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <a href="#contact" className="inline-flex items-center rounded-full bg-gradient-to-r from-[#8e2de2] to-fuchsia-500 px-6 py-3 font-medium hover:shadow-[0_0_40px_rgba(142,45,226,0.6)] transition">Projekt anfragen</a>
          <a href="#work" className="inline-flex items-center rounded-full border border-white/15 px-6 py-3 font-medium hover:border-white/30 transition">Unsere Arbeiten</a>
        </motion.div>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-left">
          {[
            ['+273%', 'Traffic-Steigerung'],
            ['<2.5s', 'Ladezeit'],
            ['+38%', 'Conversion-Rate'],
            ['100%', 'Core Web Vitals'],
          ].map(([kpi, label]) => (
            <div key={label} className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="text-xl font-semibold text-white">{kpi}</div>
              <div className="text-xs text-white/60">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
