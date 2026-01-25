import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import LatestWork from './components/sections/LatestWork';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import ProjectDetails from './components/sections/ProjectDetail';
import ExperienceDetail from './components/sections/ExperienceDetail';
import { DarkModeProvider } from './DarkModeContext';

function App() {
  return (
    <DarkModeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <Header />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Experience />
                <LatestWork />
                <Projects />
                <Contact />
              </>
            } />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="/experience" element={<ExperienceDetail />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </DarkModeProvider>
  );
}

export default App;
