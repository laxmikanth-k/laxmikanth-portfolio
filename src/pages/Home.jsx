import Navbar from '../components/Navbar/Navbar.jsx';
import Hero from '../components/Hero/Hero.jsx';
import About from '../components/About/About.jsx';
import Skills from '../components/Skills/Skills.jsx';
import Experience from '../components/Experience/Experience.jsx';
import Projects from '../components/Projects/Projects.jsx';
import Certifications from '../components/Certifications/Certifications.jsx';
import Achievements from '../components/Achievements/Achievements.jsx';
import Education from '../components/Education/Education.jsx';
import Contact from '../components/Contact/Contact.jsx';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Education />
      <Certifications />
      <Contact />
    </main>
  );
}
