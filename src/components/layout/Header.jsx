import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useDarkMode } from '../../DarkModeContext';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { darkMode, setDarkMode } = useDarkMode();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    if (location.pathname === '/') {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollTo: sectionId } });
    }
    setIsMenuOpen(false); // close mobile menu if open
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'backdrop-blur-md bg-opacity-90' : ''} ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a onClick={() => handleNavClick('hero')} className="cursor-pointer">
              <span className={`text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r ${darkMode ? 'from-cyan-400 to-purple-600' : 'from-fuchsia-600 to-blue-500'}`}>
                CharithaAdikari
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a onClick={() => handleNavClick('about')} className="cursor-pointer px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:text-blue-600">
              About
            </a>
            <a onClick={() => handleNavClick('projects')} className="cursor-pointer px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:text-fuchsia-600">
              Projects
            </a>
            <a onClick={() => handleNavClick('contact')} className="cursor-pointer px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:text-green-600">
              Contact
            </a>

            {/* Dark mode toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 text-yellow-300' : 'bg-gray-100 text-gray-700'}`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 text-yellow-300' : 'bg-gray-100 text-gray-700'}`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-700'}`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className={`px-2 pt-2 pb-3 space-y-1 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
          <a onClick={() => handleNavClick('about')} className="block px-3 py-2 rounded-md text-base font-medium cursor-pointer hover:bg-gray-100">
            About
          </a>
          <a onClick={() => handleNavClick('projects')} className="block px-3 py-2 rounded-md text-base font-medium cursor-pointer hover:bg-gray-100">
            Projects
          </a>
          <a onClick={() => handleNavClick('contact')} className="block px-3 py-2 rounded-md text-base font-medium cursor-pointer hover:bg-gray-100">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
