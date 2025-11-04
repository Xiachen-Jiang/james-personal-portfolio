import { AboutMe } from '../aboutMe/aboutMe';
import { Footer } from '../footer/footer';
// import { Frontpage } from '../frontpage/frontpage';

export function About() {
  return (
    <div className="main-container">
      {/* <Frontpage /> */}
      <AboutMe />
      <Footer />
    </div>
  );
} 