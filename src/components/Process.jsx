import { motion } from 'framer-motion'

const steps = [
  {
    title: 'Analyse & Strategie',
    text: 'Ziele, Standort und Zielgruppen werden datenbasiert bewertet.'
  },
  {
    title: 'Setup & Integrationen',
    text: 'Anbindung an Magicline, WhatsApp, GoHighLevel u.a.'
  },
  {
    title: 'Launch & Automationen',
    text: 'Kampagnen live, Leads fließen direkt in den Funnel & Chat.'
  },
  {
    title: 'Optimierung & Skalierung',
    text: 'Kontinuierliche A/B-Tests, Creatives & Budgetsteuerung.'
  }
]

export default function Process() {
  return (
    <section className="relative w-full bg-[#0b0b0f] py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(142,45,226,0.08),_transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">So funktioniert's</h2>
          <p className="mt-3 text-white/70">Klarer Prozess, transparente Performance, messbare Ergebnisse.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8e2de2]/20 text-sm font-semibold text-[#caa0ff]">{i + 1}</span>
                <h3 className="text-lg font-semibold">{s.title}</h3>
              </div>
              <p className="text-white/70">{s.text}</p>

              {i < steps.length - 1 && (
                <motion.span
                  aria-hidden
                  className="pointer-events-none absolute right-[-18px] top-1/2 hidden h-9 w-9 -translate-y-1/2 rotate-45 rounded-md bg-[#8e2de2]/20 md:block"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
