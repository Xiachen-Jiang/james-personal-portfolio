import { Projects } from '../projects/projects';
import { Footer } from '../footer/footer';
import { Websites } from '../websites/websites';

export function Portfolio() {
  return (
    <div className="main-container">
      <Websites />
      <Projects />
      <Footer />
    </div>
  );
} 