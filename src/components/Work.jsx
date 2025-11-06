import { motion } from 'framer-motion'

const projects = [
  {
    title: 'E-Commerce Relaunch',
    tag: 'Conversion-Design',
    image: 'https://images.unsplash.com/photo-1657812159075-7f0abd98f7b8?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxFLUNvbW1lcmNlJTIwUmVsYXVuY2h8ZW58MHwwfHx8MTc2MjQ0MzEzMXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'SaaS Landingpage',
    tag: 'Branding & Webflow',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Fitness Automation',
    tag: 'Funnel & Ads',
    image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1600&auto=format&fit=crop',
  },
]

export default function Work() {
  return (
    <section id="work" className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">Ausgewählte Projekte</h2>
            <p className="mt-2 text-white/70">Ergebnisse, die für sich sprechen.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex rounded-full border border-white/15 px-4 py-2 text-sm hover:border-white/30">Mehr erfahren</a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              href="#contact"
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <img src={p.image} alt="Projekt" className="h-64 w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent" />
              <div className="absolute bottom-0 p-5">
                <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs">{p.tag}</div>
                <h3 className="mt-3 text-xl font-semibold">{p.title}</h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
