import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Education } from '@/components/Education'
import { Projects } from '@/components/Projects'
import { Technologies } from '@/components/Technologies'
import { Experience } from '@/components/Experience'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Education />
      <Projects />
      <Technologies />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}
