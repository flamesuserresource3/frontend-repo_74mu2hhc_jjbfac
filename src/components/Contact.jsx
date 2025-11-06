import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'

export default function Contact() {
  return (
    <section id="kontakt" className="relative w-full bg-[#07070a] py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(142,45,226,0.12),_transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Demo & Beratung buchen</h2>
          <p className="mt-3 text-white/70">Lass dir zeigen, wie dein Studio mit KI mehr qualifizierte Mitglieder gewinnt – vollautomatisiert.</p>

          <motion.a
            href="https://cal.com/" target="_blank" rel="noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mt-8 inline-flex items-center gap-3 rounded-full border border-[#8e2de2]/50 bg-[#8e2de2] px-7 py-4 text-lg font-semibold text-white shadow-[0_0_30px_rgba(142,45,226,0.5)]"
          >
            <Calendar className="h-5 w-5" /> Termin sichern
            <span className="pointer-events-none absolute -inset-0.5 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 blur transition-opacity duration-500 hover:opacity-100" />
          </motion.a>
        </div>

        {/* Footer */}
        <div className="mt-16 grid gap-6 text-sm text-white/70 md:grid-cols-3">
          <div>
            <h3 className="text-white">TM Concepts GmbH</h3>
            <p className="mt-2">KI-gestützte Automation & digitales Marketing für Fitness.</p>
          </div>
          <div className="flex items-center gap-4">
            <a href="#leistungen" className="hover:text-white">Leistungen</a>
            <a href="#kontakt" className="hover:text-white">Kontakt</a>
          </div>
          <div className="md:text-right">
            <a href="#" className="hover:text-white">Impressum</a> · <a href="#" className="hover:text-white">Datenschutz</a>
          </div>
        </div>
      </div>
    </section>
  )
}
