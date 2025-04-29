import { useState, useEffect } from 'react';
import { Sparkles, Filter, X, ChevronDown, ChevronUp, Search } from 'lucide-react';
import { useDarkMode } from '../../DarkModeContext';
import ProjectCard from '../ui/ProjectCard';
import allProjects from '../../data/projects.js';

const Projects = () => {
  const { darkMode } = useDarkMode();
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedTech, setSelectedTech] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  const allTypes = ['All', ...new Set(allProjects.map(project => project.type))];
  const allTechnologies = ['All', ...new Set(allProjects.flatMap(project => project.technologies))];

  useEffect(() => {
    let filtered = [...allProjects];

    if (searchTerm.trim() !== '') {
      const lowerSearch = searchTerm.toLowerCase();
      filtered = filtered.filter(project => 
        project.title.toLowerCase().includes(lowerSearch) ||
        project.description.toLowerCase().includes(lowerSearch) ||
        project.technologies.some(tech => tech.toLowerCase().includes(lowerSearch))
      );
    }

    if (selectedType !== 'All') {
      filtered = filtered.filter(project => project.type === selectedType);
    }

    if (selectedTech !== 'All') {
      filtered = filtered.filter(project => project.technologies.includes(selectedTech));
    }

    if (!showAllProjects) {
      filtered = filtered.filter(project => project.featured);
    }

    setFilteredProjects(filtered);
  }, [searchTerm, selectedType, selectedTech, showAllProjects, allProjects]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedType('All');
    setSelectedTech('All');
  };


  return (
    <section id="projects" className={`py-16 ${darkMode ? 'dark bg-gray-900' : 'bg-gradient-to-b from-pink-50 to-purple-50'}`}>
      <div className="container mx-auto px-4">
        {/* Animated Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center relative">
            <Sparkles className={`absolute -left-8 animate-pulse ${darkMode ? 'text-purple-400' : 'text-yellow-400'}`} size={24} />
            <h2 className={`text-4xl md:text-5xl font-bold bg-clip-text text-transparent ${
              darkMode 
                ? 'bg-gradient-to-r from-purple-400 to-pink-500' 
                : 'bg-gradient-to-r from-pink-500 to-purple-600'
            } inline-block`}>
              My Projects
            </h2>
            <Sparkles className={`absolute -right-8 animate-pulse delay-100 ${darkMode ? 'text-pink-400' : 'text-yellow-400'}`} size={24} />
          </div>
          <div className={`w-32 h-1.5 mx-auto mt-4 mb-6 rounded-full ${
            darkMode 
              ? 'bg-gradient-to-r from-purple-500 to-pink-500' 
              : 'bg-gradient-to-r from-pink-400 to-purple-500'
          }`} />
          <p className={`text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-purple-700/80'
          }`}>
            Here's a collection of my favorite creations ✨
          </p>
        </div>

        {/* Search and Filters - Now positioned at the edges */}
        <div className="max-w-8xl mx-0  mb-8 flex justify-between items-center">
          {/* Search - Left aligned */}
          <div className="relative w-full max-w-md mr-4">
            <div className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ${
              darkMode ? 'text-gray-400' : 'text-purple-500'
            }`}>
              <Search size={18} />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search projects..."
              className={`w-full pl-10 pr-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 transition-all ${
                darkMode 
                  ? 'bg-gray-800 border-gray-700 focus:border-purple-500 focus:ring-purple-500/30 text-white' 
                  : 'bg-white/90 border-purple-200 focus:border-pink-300 focus:ring-pink-300/30 text-purple-700'
              }`}
            />
          </div>

          {/* Filters - Right aligned */}
          <div className="relative">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all ${
                darkMode 
                  ? 'bg-gray-800 border-gray-700 hover:border-purple-500 text-gray-200' 
                  : 'bg-white/90 border-purple-200 hover:border-pink-300 text-purple-700'
              } border-2`}
            >
              <Filter size={18} />
              Filters
              {showFilters ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
            
            {showFilters && (
              <div className={`absolute right-0 mt-2 w-72 rounded-xl shadow-lg p-4 z-10 animate-fadeIn ${
                darkMode 
                  ? 'bg-gray-800 border-gray-700' 
                  : 'bg-white/90 border-purple-100'
              } border-2`}
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className={`font-bold ${
                    darkMode ? 'text-purple-400' : 'text-purple-800'
                  }`}>
                    Filter Projects
                  </h3>
                  <button 
                    onClick={clearFilters}
                    className={`text-xs flex items-center gap-1 ${
                      darkMode ? 'text-pink-400 hover:text-pink-300' : 'text-pink-500 hover:text-pink-700'
                    }`}
                  >
                    <X size={14} /> Clear
                  </button>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className={`block text-sm font-medium mb-1 ${
                      darkMode ? 'text-gray-300' : 'text-purple-700'
                    }`}>
                      Project Type
                    </label>
                    <select
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.target.value)}
                      className={`w-full px-3 py-2 rounded-lg border focus:ring-2 focus:outline-none transition-all ${
                        darkMode 
                          ? 'bg-gray-700 border-gray-600 focus:border-purple-500 focus:ring-purple-500/30 text-white' 
                          : 'border-purple-200 focus:border-pink-300 focus:ring-pink-300/30 text-purple-700'
                      }`}
                    >
                      {allTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-1 ${
                      darkMode ? 'text-gray-300' : 'text-purple-700'
                    }`}>
                      Technology
                    </label>
                    <select
                      value={selectedTech}
                      onChange={(e) => setSelectedTech(e.target.value)}
                      className={`w-full px-3 py-2 rounded-lg border focus:ring-2 focus:outline-none transition-all ${
                        darkMode 
                          ? 'bg-gray-700 border-gray-600 focus:border-purple-500 focus:ring-purple-500/30 text-white' 
                          : 'border-purple-200 focus:border-pink-300 focus:ring-pink-300/30 text-purple-700'
                      }`}
                    >
                      {allTechnologies.map(tech => (
                        <option key={tech} value={tech}>{tech}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Project Cards */}
        {filteredProjects.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map(project => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  darkMode={darkMode}
                  className="hover:scale-[1.02] transition-transform duration-300"
                />
              ))}
            </div>

            {/* Show More/Less Button */}
            {allProjects.length > 3 && (
              <div className="text-center mt-12">
                <button
                  onClick={() => setShowAllProjects(!showAllProjects)}
                  className={`px-8 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 mx-auto ${
                    !showAllProjects 
                      ? darkMode 
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-purple-500/20' 
                        : 'bg-gradient-to-r from-pink-400 to-purple-500 text-white hover:shadow-pink-200'
                      : darkMode 
                        ? 'bg-gray-800 text-purple-400 border border-gray-700 hover:bg-gray-700' 
                        : 'bg-white text-purple-600 border-2 border-purple-200 hover:bg-purple-50'
                  } hover:shadow-lg`}
                >
                  {!showAllProjects ? (
                    <>
                      Show All Projects
                      <Sparkles size={18} className={darkMode ? 'text-purple-200' : 'text-yellow-200'} />
                    </>
                  ) : (
                    'Show Featured Only'
                  )}
                </button>
              </div>
            )}
          </>
        ) : (
          <div className={`text-center py-16 rounded-2xl border-2 border-dashed ${
            darkMode ? 'bg-gray-800/80 border-gray-700' : 'bg-white/80 border-purple-200'
          }`}>
            <div className="max-w-md mx-auto">
              <img 
                src={darkMode 
                  ? "https://cdn.lordicon.com/wxnxiano.json" 
                  : "https://cdn.lordicon.com/zniqnylq.json"} 
                alt="No projects found" 
                className="w-40 h-40 mx-auto mb-4"
              />
              <h3 className={`text-xl font-medium mb-2 ${
                darkMode ? 'text-purple-300' : 'text-purple-700'
              }`}>
                No projects found
              </h3>
              <p className={`mb-4 ${
                darkMode ? 'text-gray-400' : 'text-purple-500'
              }`}>
                Try adjusting your search or filters
              </p>
              <button
                onClick={clearFilters}
                className={`px-6 py-2 rounded-lg transition-colors ${
                  darkMode 
                    ? 'bg-purple-900/50 text-purple-300 hover:bg-purple-800/50' 
                    : 'bg-purple-100 text-purple-600 hover:bg-purple-200'
                }`}
              >
                Reset Filters
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;