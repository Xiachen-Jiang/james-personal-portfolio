import './App.scss';
import { TopHeader } from './topHeader/topHeader';
import { AnimatedBackground } from './components/AnimatedBackground';
import { ThemeManager } from './components/ThemeManager';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { Portfolio } from './pages/Portfolio';
// import { About } from './pages/About';

function App() {

  return (
    <ThemeManager>
      <AnimatedBackground />
      <TopHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {/* Portal container for popups */}
      <div id="portal-root"></div>
    </ThemeManager>
  )
}

export default App
