import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, Calendar, Code, Users, Star, Sparkles } from 'lucide-react';
import { useDarkMode } from '../../DarkModeContext';

const ExperienceDetail = () => {
  const { darkMode } = useDarkMode();
  const [selectedProject, setSelectedProject] = useState(null);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Mock experience data - in a real app, this would come from an API or context
  const experiences = [
    {
      id: 'paymedia-internship',
      title: 'Intern Software Engineer',
      company: 'PayMedia Pvt Limited',
      period: 'July 2025 – Present',
      projects: [
        {
          name: 'Smart QR-Based HR Complaints & Suggestion Tool',
          technologies: ['Vue 3', 'TypeScript', '.NET Core Web API', 'MySQL', 'Fedora'],
          description: 'Developed a mobile-responsive HR complaints & suggestion system triggered by scanning a QR code. That allows company staff to submit complaints or suggestions with image uploads.',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop&crop=center',
          galleryImages: [
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&crop=center',
            'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop&crop=center',
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&crop=center'
          ],
          githubLink: 'https://general.paymediasolutions.com'
        },
        {
          name: 'Coworking Space Booking System',
          technologies: ['Vue 3', 'TypeScript', '.NET Core Web API', 'MySQL'],
          description: 'Built a customer portal and Admin panel for coworking spaces bookings website. Allow users to browse locations, check facilities, and make online payments and admin can manage them.',
          image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=300&fit=crop&crop=center',
          galleryImages: [
            'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop&crop=center',
            'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=500&fit=crop&crop=center',
            'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=500&fit=crop&crop=center'
          ],
          githubLink: 'https://spacebooking.paymediasolutions.com'
        },
        {
          name: 'CDM Software Integration Project',
          technologies: ['.NET Framework (WPF)', 'Laravel', 'MySQL'],
          description: 'Contributed to the integration of Cash Deposit Machine (CDM) software. Focused on implementing module for handling bill payment via CDM machine.',
          image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop&crop=center',
          galleryImages: [
            'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop&crop=center',
            'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&h=500&fit=crop&crop=center',
            'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop&crop=center'
          ],
          githubLink: null
        },
        {
          name: 'EKYC System (Internal Project)',
          technologies: ['Vue 3', 'TypeScript', '.NET Core Web API', 'MySQL'],
          description: 'Designed frontend and backend for electronic KYC process. Captured user data, verified identity, and stored securely in MySQL database.',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop&crop=center',
          galleryImages: [
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&crop=center',
            'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop&crop=center',
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&crop=center'
          ],
          githubLink: null
        }
      ]
    }
  ];

  const experience = experiences[0]; // For now, we only have one experience

  if (!experience) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-b from-pink-50 to-purple-50'}`}>
        <div className={`text-center p-8 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl`}>
          <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-pink-400' : 'text-purple-600'}`}>Experience not found</h2>
          <Link
            to="/"
            className={`inline-flex items-center px-6 py-3 rounded-full font-medium ${
              darkMode
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                : 'bg-gradient-to-r from-pink-400 to-purple-500 text-white'
            }`}
          >
            <ArrowLeft className="mr-2" size={18} />
            Back to Home
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
            <span>Back to Home</span>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Experience info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            {/* Experience title with gradient */}
            <div className="mb-6">
              <h1 className={`text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent ${
                darkMode
                  ? 'bg-gradient-to-r from-cyan-400 to-purple-400'
                  : 'bg-gradient-to-r from-pink-500 to-purple-600'
              }`}>
                {experience.title}
              </h1>
              <div className={`w-24 h-1 rounded-full ${
                darkMode
                  ? 'bg-gradient-to-r from-cyan-400 to-purple-400'
                  : 'bg-gradient-to-r from-pink-400 to-purple-500'
              }`} />
            </div>

            {/* Company and period */}
            <div className={`mb-6 p-5 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
              <h2 className={`text-xl font-bold mb-3 flex items-center ${darkMode ? 'text-cyan-400' : 'text-pink-500'}`}>
                <Sparkles size={18} className="mr-2" />
                Company Details
              </h2>
              <div className="space-y-3">
                <div>
                  <p className={`font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Company</p>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{experience.company}</p>
                </div>
                <div>
                  <p className={`font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Period</p>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{experience.period}</p>
                </div>
                <div>
                  <p className={`font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Projects Completed</p>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{experience.projects.length} Projects</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right column - Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            {/* Projects section */}
            <div className={`p-5 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
              <h2 className={`text-2xl font-bold mb-6 flex items-center ${
                darkMode ? 'text-purple-400' : 'text-purple-600'
              }`}>
                <Code className="mr-2" size={24} />
                Projects ({experience.projects.length})
              </h2>

              <div className="space-y-6">
                {experience.projects.map((project, projectIndex) => (
                  <motion.div
                    key={projectIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: projectIndex * 0.1 }}
                    className={`border-l-4 pl-6 p-4 rounded-r-lg cursor-pointer transition-all duration-300 hover:shadow-lg ${
                      darkMode ? 'border-cyan-400 bg-gray-700/30 hover:bg-gray-700/50' : 'border-blue-500 bg-gray-50/50 hover:bg-gray-100/50'
                    }`}
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-1">
                        <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{project.name}</h3>
                        <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{project.description}</p>

                        {/* Technologies */}
                        <div className="mb-4">
                          <h4 className={`text-sm font-semibold mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Technologies:</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className={`px-3 py-1 text-sm rounded-full ${darkMode ? 'bg-gray-600 text-cyan-400' : 'bg-gray-200 text-blue-600'}`}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* GitHub/Demo Link */}
                        {project.githubLink && (
                          <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm ${
                              darkMode
                                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                                : 'bg-gradient-to-r from-pink-500 to-purple-500 text-white'
                            } shadow-md hover:shadow-lg transition-shadow`}
                          >
                            <ExternalLink size={16} />
                            Demo Link
                          </motion.a>
                        )}
                      </div>

                      <div className="md:w-40 h-28 rounded-lg overflow-hidden shadow-md">
                        <img
                          src={project.image}
                          alt={project.name}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className={`max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {selectedProject.name}
                </h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className={`p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700`}
                >
                  <ArrowLeft className="w-5 h-5 rotate-45" />
                </button>
              </div>

              {/* Image Gallery */}
              <div className="mb-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {selectedProject.galleryImages.map((image, imgIndex) => (
                    <motion.img
                      key={imgIndex}
                      src={image}
                      alt={`${selectedProject.name} ${imgIndex + 1}`}
                      className="w-full h-32 object-cover rounded-lg"
                      whileHover={{ scale: 1.05 }}
                    />
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {selectedProject.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className={`text-lg font-semibold mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 text-sm rounded-full ${
                        darkMode ? 'bg-gray-600 text-cyan-400' : 'bg-gray-200 text-blue-600'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Link */}
              {selectedProject.githubLink && (
                <div className="flex justify-end">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm ${
                      darkMode
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                        : 'bg-gradient-to-r from-pink-500 to-purple-500 text-white'
                    } shadow-md hover:shadow-lg transition-shadow`}
                  >
                    <ExternalLink size={16} />
                    Demo Link
                  </motion.a>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default ExperienceDetail;