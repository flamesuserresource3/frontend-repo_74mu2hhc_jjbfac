import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const glow = 'shadow-[0_0_30px_rgba(142,45,226,0.6)]'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0a0a0a] text-white">
      {/* Spline 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Ambient gradient overlay (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/40 to-[#0a0a0a]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pb-24 pt-28 md:items-start md:pt-36">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur"
        >
          TM Concepts GmbH • KI-Automation für Fitnessstudios
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="text-center text-4xl font-semibold leading-tight tracking-tight md:max-w-3xl md:text-left md:text-6xl"
        >
          Dein KI-System für Mitgliedergewinnung & Betreuung
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-5 max-w-2xl text-center text-lg text-white/80 md:text-left"
        >
          Automatisierte Lead-Generierung, Chatbots und digitale Kampagnen – speziell für Fitnessstudios und Franchises entwickelt.
        </motion.p>

        {/* CTA with orbiting particles */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="relative mt-8"
        >
          <a
            href="#kontakt"
            className={`relative inline-flex items-center justify-center rounded-full bg-[#8e2de2] px-8 py-4 text-lg font-semibold text-white transition-transform hover:scale-[1.02] ${glow}`}
          >
            Jetzt Demo buchen
          </a>

          {/* Orbit container */}
          <motion.div
            className="pointer-events-none absolute inset-0 -z-0"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
            style={{ transformOrigin: '50% 50%' }}
          >
            <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-[#8e2de2] blur-[1px]" />
            <span className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#8e2de2]" />
            <span className="absolute left-1/2 bottom-0 h-2 w-2 -translate-x-1/2 rounded-full bg-[#8e2de2]" />
            <span className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#8e2de2]" />
          </motion.div>

          {/* Soft glow pulse */}
          <span className="pointer-events-none absolute -inset-6 rounded-full bg-[#8e2de2]/20 blur-2xl" />
        </motion.div>
      </div>
    </section>
  )
}
