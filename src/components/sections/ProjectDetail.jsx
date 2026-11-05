import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, Calendar, Code, Users, Star, Sparkles } from 'lucide-react';
import { useDarkMode } from '../../DarkModeContext';
import allProjects from '../../data/projects';

const ProjectDetails = () => {
    const { id } = useParams();
    const [repoStats, setRepoStats] = useState(null);
    const { darkMode } = useDarkMode();
    const project = allProjects.find(p => p.id.toString() === id);
  
    useEffect(() => {
      const fetchProjectData = async () => {
        if (project?.githubLink) {
          try {
            const repoMatch = project.githubLink.match(/github\.com\/([^\/]+)\/([^\/]+)/);
            if (repoMatch) {
              const [, owner, repo] = repoMatch;
              
              // Fetch repo stats
              const repoRes = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
              if (repoRes.ok) {
                const repoData = await repoRes.json();
                setRepoStats({
                  stars: repoData.stargazers_count,
                  forks: repoData.forks_count,
                  created: new Date(repoData.created_at).toLocaleDateString(),
                  updated: new Date(repoData.updated_at).toLocaleDateString(),
                });
              }
            }
          } catch (error) {
            console.error('Error fetching project data:', error);
          }
        }
      };
      
      fetchProjectData();
    }, [project]);

    // Scroll to top when component mounts
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
    if (!project) {
      return (
        <div className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-b from-pink-50 to-purple-50'}`}>
          <div className={`text-center p-8 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl`}>
            <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-pink-400' : 'text-purple-600'}`}>Project not found</h2>
            <Link 
              to="/" 
              className={`inline-flex items-center px-6 py-3 rounded-full font-medium ${
                darkMode 
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' 
                  : 'bg-gradient-to-r from-pink-400 to-purple-500 text-white'
              }`}
            >
              <ArrowLeft className="mr-2" size={18} />
              Back to Projects
            </Link>
          </div>
        </div>
      );
    }
  
    return (
      <section className={`relative py-12 md:py-16 overflow-hidden ${darkMode ? 'dark bg-gray-900' : 'bg-gradient-to-b from-pink-50 to-purple-50'}`}>
        {/* Floating animated elements */}
        <motion.div 
          className={`absolute top-20 left-10 w-32 h-32 rounded-full blur-xl ${
            darkMode ? 'bg-purple-900/20' : 'bg-pink-200/40'
          }`}
          animate={{
            y: [0, 30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className={`absolute bottom-20 right-10 w-40 h-40 rounded-full blur-xl ${
            darkMode ? 'bg-indigo-900/20' : 'bg-indigo-200/40'
          }`}
          animate={{
            y: [0, -30, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
  
        <div className="container mx-auto px-4 relative z-10">
          {/* Back button with sparkles */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link 
              to="/" 
              className={`inline-flex items-center px-4 py-2 rounded-lg ${
                darkMode 
                  ? 'bg-gray-800 text-purple-300 hover:bg-gray-700' 
                  : 'bg-white text-purple-600 hover:bg-gray-100'
              } transition-colors shadow-md`}
            >
              <Sparkles size={16} className={`mr-1 ${darkMode ? 'text-pink-400' : 'text-pink-500'}`} />
              <ArrowLeft className="mr-2 h-4 w-4" />
              <span>Back to Projects</span>
            </Link>
          </motion.div>
  
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left column - Project info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              {/* Project title with gradient */}
              <div className="mb-6">
                <h1 className={`text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent ${
                  darkMode 
                    ? 'bg-gradient-to-r from-cyan-400 to-purple-400' 
                    : 'bg-gradient-to-r from-pink-500 to-purple-600'
                }`}>
                  {project.title}
                </h1>
                <div className={`w-24 h-1 rounded-full ${
                  darkMode 
                    ? 'bg-gradient-to-r from-cyan-400 to-purple-400' 
                    : 'bg-gradient-to-r from-pink-400 to-purple-500'
                }`} />
              </div>
  
              {/* Project image with hover effect */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className={`rounded-xl overflow-hidden mb-6 shadow-lg ${
                  darkMode ? 'border border-gray-700' : 'border border-white'
                }`}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 md:h-56 object-cover"
                />
              </motion.div>
  
              {/* Project description */}
              <div className={`mb-6 p-5 rounded-xl ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              } shadow-lg`}>
                <h2 className={`text-xl font-bold mb-3 flex items-center ${
                  darkMode ? 'text-cyan-400' : 'text-pink-500'
                }`}>
                  <Sparkles size={18} className="mr-2" />
                  Project Overview
                </h2>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                  {project.description}
                </p>
              </div>
  
              {project.contribution && <div className="mb-6 p-5 rounded-xl border border-teal-600"><h2 className="font-bold text-xl mb-3">My contribution</h2><p>{project.contribution}</p>{project.credits && <p className="mt-4 text-sm">{project.credits}</p>}{project.publication && <a className="block mt-4 text-teal-600 underline" href={project.publication.url} target="_blank" rel="noopener noreferrer">{project.publication.title} — {project.publication.venue}</a>}<p className="mt-4 text-sm opacity-75">{project.sourceNote}</p></div>}
              {/* Project links */}
              <div className={`mb-6 p-5 rounded-xl ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              } shadow-lg`}>
                <h2 className={`text-xl font-bold mb-4 flex items-center ${
                  darkMode ? 'text-fuchsia-400' : 'text-fuchsia-600'
                }`}>
                  <Sparkles size={18} className="mr-2" />
                  Quick Links
                </h2>
                <div className="space-y-3">
                  {project.githubLink && (
                    <motion.a 
                      whileHover={{ x: 5 }}
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 px-4 py-2 rounded-lg ${
                        darkMode 
                          ? 'bg-gray-700 text-purple-300 hover:bg-gray-600' 
                          : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                      } transition-colors`}
                    >
                      <Github size={18} />
                      <span>View on GitHub</span>
                    </motion.a>
                  )}
                  {project.liveLink && (
                    <motion.a 
                      whileHover={{ x: 5 }}
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 px-4 py-2 rounded-lg ${
                        darkMode 
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:opacity-90' 
                          : 'bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:opacity-90'
                      } transition-opacity`}
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </motion.a>
                  )}
                </div>
              </div>
  
              {/* GitHub stats */}
              {repoStats && (
  <div className={`p-5 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
    <h2 className={`text-xl font-bold mb-4 flex items-center ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>
      <Sparkles size={18} className="mr-2" />
      GitHub Stats
    </h2>
    <div className="grid grid-cols-2 gap-4">
      <div className={`flex items-center gap-2 p-2 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
        <Star size={16} className={darkMode ? 'text-yellow-400' : 'text-yellow-500'} />
        <span>{repoStats.stars} stars</span>
      </div>
      <div className={`flex items-center gap-2 p-2 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
        <Users size={16} className={darkMode ? 'text-blue-400' : 'text-blue-500'} />
        <span>{repoStats.forks} forks</span>
      </div>
      <div className={`flex items-center gap-2 p-2 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
        <Calendar size={16} className={darkMode ? 'text-green-400' : 'text-green-500'} />
        <span>Created: {repoStats.created}</span>
      </div>
      <div className={`flex items-center gap-2 p-2 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
        <Calendar size={16} className={darkMode ? 'text-orange-400' : 'text-orange-500'} />
        <span>Updated: {repoStats.updated}</span>
      </div>
    </div>
  </div>
)}

            </motion.div>
  
            {/* Right column - Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              {/* Image Gallery - Beautiful Grid Layout */}
              {project.galleryImages && project.galleryImages.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-8"
                >
                  <h2 className={`text-2xl font-bold mb-6 flex items-center ${
                    darkMode ? 'text-purple-400' : 'text-purple-600'
                  }`}>
                    <Sparkles className="mr-2" size={20} />
                    Project Gallery
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {project.galleryImages.map((image, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="relative group"
                      >
                        <div className={`rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
                          darkMode ? 'bg-gray-700' : 'bg-white'
                        }`}>
                          <img
                            src={image}
                            alt={`${project.title} screenshot ${index + 1}`}
                            className="w-full aspect-[8/5] object-contain"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                          <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                            {index + 1}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Technologies - Enhanced Design */}
              <div className={`mb-8 p-6 rounded-xl ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              } shadow-lg`}>
                <h2 className={`text-2xl font-bold mb-6 flex items-center ${
                  darkMode ? 'text-fuchsia-400' : 'text-fuchsia-600'
                }`}>
                  <Code className="mr-2" size={24} />
                  Technologies Stack
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {project.technologies.map((tech, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * i }}
                      className={`p-3 rounded-lg text-center transition-all duration-300 hover:scale-105 ${
                        darkMode
                          ? 'bg-gradient-to-r from-purple-700 to-pink-700 text-white hover:shadow-lg'
                          : 'bg-gradient-to-r from-pink-200 to-purple-200 text-purple-800 hover:shadow-md'
                      }`}
                    >
                      <span className="font-medium text-sm">{tech}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Project Description - Better Typography */}
              <div className={`mb-8 p-6 rounded-xl ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              } shadow-lg`}>
                <h2 className={`text-2xl font-bold mb-6 flex items-center ${
                  darkMode ? 'text-cyan-400' : 'text-cyan-600'
                }`}>
                  <Sparkles className="mr-2" size={20} />
                  Project Story
                </h2>

                {project.manualDescription ? (
                  <div className={`space-y-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {(() => {
                      const splitDescription = (text) => {
                        const sentences = text.split('. ');
                        const paragraphs = [];
                        let current = '';
                        let sentenceCount = 0;
                        for (let sentence of sentences) {
                          current += sentence + '. ';
                          sentenceCount++;
                          if (sentenceCount >= 4) {
                            paragraphs.push(current.trim());
                            current = '';
                            sentenceCount = 0;
                          }
                        }
                        if (current) paragraphs.push(current.trim());
                        return paragraphs;
                      };
                      return splitDescription(project.manualDescription).map((paragraph, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className={`p-4 rounded-lg border-l-4 ${
                            darkMode
                              ? 'border-cyan-400 bg-gray-700/50'
                              : 'border-blue-400 bg-blue-50/50'
                          }`}
                        >
                          <p className="leading-relaxed text-sm md:text-base">{paragraph}</p>
                        </motion.div>
                      ));
                    })()}
                  </div>
                ) : (
                  <div className={`text-center py-8 ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    <Sparkles className="mx-auto mb-2" size={24} />
                    <p>No detailed description available yet.</p>
                  </div>
                )}
              </div>

              {/* Features - Enhanced List */}
              {project.features && (
                <div className={`p-6 rounded-xl ${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                } shadow-lg`}>
                  <h2 className={`text-2xl font-bold mb-6 flex items-center ${
                    darkMode ? 'text-green-400' : 'text-green-600'
                  }`}>
                    <Sparkles className="mr-2" size={20} />
                    Key Features
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 * i }}
                        className={`p-4 rounded-lg border-l-4 ${
                          darkMode
                            ? 'border-pink-400 bg-gray-700/30'
                            : 'border-pink-400 bg-pink-50/50'
                        }`}
                      >
                        <div className="flex items-start">
                          <span className={`inline-block mr-3 mt-1 ${
                            darkMode ? 'text-pink-400' : 'text-pink-500'
                          }`}>
                            <Sparkles size={16} />
                          </span>
                          <span className={`font-medium ${
                            darkMode ? 'text-gray-300' : 'text-gray-700'
                          }`}>
                            {feature}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ProjectDetails;