import { motion } from 'framer-motion'
import { Rocket, Bot, LineChart, MessagesSquare } from 'lucide-react'

const features = [
  {
    icon: Rocket,
    title: 'Leads auf Autopilot',
    desc: 'Performance-Kampagnen mit KI-Optimierung für kontinuierliche Mitgliederanfragen.'
  },
  {
    icon: Bot,
    title: '24/7 Chat-Automation',
    desc: 'WhatsApp- und Website-Chatbots qualifizieren Leads und buchen Termine automatisch.'
  },
  {
    icon: LineChart,
    title: 'Conversion-Analytics',
    desc: 'Dashboard mit klaren KPIs: CPL, Showrate, Abschlüsse und Revenue per Studio.'
  },
  {
    icon: MessagesSquare,
    title: 'Omnichannel Nurturing',
    desc: 'E-Mail, SMS & WhatsApp Sequenzen – personalisiert, schnell und DSGVO-konform.'
  }
]

export default function Services() {
  return (
    <section id="leistungen" className="relative w-full bg-[#0b0b0f] py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(142,45,226,0.12),_transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Leistungen</h2>
          <p className="mt-3 text-white/70">Skalierbare Systeme für Wachstum, die in bestehende Prozesse passen.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:shadow-[0_0_40px_rgba(142,45,226,0.25)]"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#8e2de2]/15 text-[#8e2de2]">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#8e2de2]/10 blur-2xl transition-transform duration-300 group-hover:translate-x-6 group-hover:translate-y-6" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
