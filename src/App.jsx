import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import Services from './components/Services'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen w-full scroll-smooth bg-[#0b0b0e] text-white">
      <Navbar />
      <main>
        <Hero />
        <Work />
        <Services />
        <Contact />
      </main>
    </div>
  )
}

export default App
