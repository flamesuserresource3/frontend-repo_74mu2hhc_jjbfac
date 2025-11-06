import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-4xl font-bold tracking-tight"
        >
          Lassen Sie uns Ihr nächstes Wachstumsprojekt starten
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-3 text-white/70"
        >
          Kurzer Call, klare Roadmap. Wir zeigen, wie Sie in 4 Wochen online überzeugen.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#" className="inline-flex items-center rounded-full bg-gradient-to-r from-[#8e2de2] to-fuchsia-500 px-6 py-3 font-medium hover:shadow-[0_0_40px_rgba(142,45,226,0.6)] transition">Kostenloses Erstgespräch</a>
          <a href="mailto:hello@tmconcepts.de" className="inline-flex items-center rounded-full border border-white/15 px-6 py-3 font-medium hover:border-white/30 transition">E-Mail schreiben</a>
        </motion.div>
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 text-left">
          {[
            ['7+ Jahre', 'Erfahrung'],
            ['50+ Mio.', 'Umsatz beeinflusst'],
            ['100% Fokus', 'auf Performance'],
            ['< 4 Wochen', 'Go-Live'],
          ].map(([kpi, label]) => (
            <div key={label} className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="text-lg font-semibold text-white">{kpi}</div>
              <div className="text-xs text-white/60">{label}</div>
            </div>
          ))}
        </div>
        <footer className="mt-16 border-t border-white/10 pt-8 text-sm text-white/60">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>© {new Date().getFullYear()} TM Concepts GmbH</div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white">Impressum</a>
              <a href="#" className="hover:text-white">Datenschutz</a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  )
}
