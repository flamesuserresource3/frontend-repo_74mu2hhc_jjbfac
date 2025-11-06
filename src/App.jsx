import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import TechIntegrations from './components/TechIntegrations'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen w-full scroll-smooth bg-black text-white">
      <Hero />
      <Services />
      <Process />
      <TechIntegrations />
      <Contact />
    </div>
  )
}

export default App
