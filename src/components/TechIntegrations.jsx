import { motion } from 'framer-motion'
import { MessageCircle, Boxes, Link as LinkIcon, Share2 } from 'lucide-react'

const tools = [
  { name: 'Magicline', icon: Boxes },
  { name: 'WhatsApp', icon: MessageCircle },
  { name: 'GoHighLevel', icon: Share2 },
  { name: 'Zapier', icon: LinkIcon }
]

export default function TechIntegrations() {
  return (
    <section className="relative w-full bg-[#08080b] py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(142,45,226,0.08),_transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 grid items-end gap-6 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Tech & Integrationen</h2>
            <p className="mt-3 text-white/70">Nahtlose Verbindungen zwischen CRM, Terminbuchung und Kommunikation – für echte Automatisierung.</p>
          </div>
          <p className="text-white/60 md:text-right">API-basierte Datenflüsse, DSGVO-konforme Prozesse und skalierbare Workflows.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 hover:shadow-[0_0_40px_rgba(142,45,226,0.25)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#8e2de2]/15 text-[#8e2de2]">
                <t.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{t.name}</h3>
                <p className="text-sm text-white/70">Verbunden über sichere APIs & Webhooks.</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dashboard preview */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#0c0c12] to-[#0a0a0f] p-6">
          <div className="mb-4 flex items-center justify-between">
            <h4 className="text-xl font-semibold">Client Dashboard Vorschau</h4>
            <span className="rounded-full bg-[#8e2de2]/20 px-3 py-1 text-sm text-[#caa0ff]">Dark Mode</span>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-white/60">Leads heute</p>
              <p className="mt-2 text-3xl font-semibold text-white">37</p>
              <div className="mt-3 h-2 w-full rounded-full bg-white/10">
                <div className="h-2 w-3/4 rounded-full bg-[#8e2de2]" />
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-white/60">Buchungen Woche</p>
              <p className="mt-2 text-3xl font-semibold text-white">124</p>
              <div className="mt-3 h-2 w-full rounded-full bg-white/10">
                <div className="h-2 w-2/3 rounded-full bg-[#8e2de2]" />
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-white/60">Showrate</p>
              <p className="mt-2 text-3xl font-semibold text-white">82%</p>
              <div className="mt-3 h-2 w-full rounded-full bg-white/10">
                <div className="h-2 w-4/5 rounded-full bg-[#8e2de2]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
