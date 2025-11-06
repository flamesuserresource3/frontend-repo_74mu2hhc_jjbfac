import { motion } from 'framer-motion'
import { Rocket, LineChart, Workflow, Sparkles } from 'lucide-react'

const items = [
  { icon: Rocket, title: 'Webdesign & Entwicklung', desc: 'Performance-starke Websites, die begeistern und konvertieren.' },
  { icon: LineChart, title: 'Conversion & SEO', desc: 'Bessere Rankings, messbare Leads und skalierbares Wachstum.' },
  { icon: Workflow, title: 'Automation & CRM', desc: 'Durchdachte Prozesse, die Zeit sparen und Umsatz steigern.' },
  { icon: Sparkles, title: 'Branding & Content', desc: 'Klares Messaging und Content, der Ihre Zielgruppe überzeugt.' },
]

export default function Services() {
  return (
    <section id="services" className="relative py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(142,45,226,0.08),transparent_50%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">Leistungen</h2>
          <p className="mt-2 text-white/70">Alles, was Sie für nachhaltiges Wachstum brauchen.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#8e2de2] to-fuchsia-500" aria-hidden>
                {item.icon && <item.icon className="h-5 w-5" />}
              </div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-white/70">{item.desc}</p>
              <div className="mt-6 inline-flex cursor-pointer items-center gap-2 text-sm text-[#b388ff] hover:text-white transition">Mehr erfahren →</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
