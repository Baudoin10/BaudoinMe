import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Services from './components/Services'
import Skills from './components/Skills'
import Principles from './components/Principles'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Services />
        <Skills />
        <Principles />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
