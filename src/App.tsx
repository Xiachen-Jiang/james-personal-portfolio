import './App.css';
import { TopHeader } from './topHeader/topHeader';
import { Banner } from './banner/banner';
import { AboutMe } from './aboutMe/aboutMe';
import { Skills } from './skills/skills';
import { Projects } from './projects/projects';
import { Contact } from './contact/contact';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Footer } from './footer/footer';

function App() {

  return (
    <>
      <AnimatedBackground />
      <TopHeader />
      <div className="main-container">
        <Banner />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
      {/* Portal container for popups */}
      <div id="portal-root"></div>
    </>
  )
}

export default App
