import { Banner } from '../banner/banner';
import { AboutMe } from '../aboutMe/aboutMe';
import { Skills } from '../skills/skills';
// import { Projects } from '../projects/projects';
import { Contact } from '../contact/contact';
import { Footer } from '../footer/footer';

export function Home() {
  return (
    <div className="main-container">
      <Banner />
      <AboutMe />
      <Skills />
      {/* <Projects /> */}
      <Contact />
      <Footer />
    </div>
  );
} 