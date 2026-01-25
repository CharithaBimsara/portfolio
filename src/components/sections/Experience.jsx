import { motion } from 'framer-motion';
import { useDarkMode } from '../../DarkModeContext';
import { Link } from 'react-router-dom';

const Experience = () => {
  const { darkMode } = useDarkMode();

  const experiences = [
    {
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

  return (
    <section id="experience" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent ${darkMode ? 'bg-gradient-to-r from-cyan-400 to-purple-500' : 'bg-gradient-to-r from-blue-600 to-pink-500'}`}>
            Experience
          </h2>
          <div className={`w-32 h-1 mx-auto rounded-full ${darkMode ? 'bg-gradient-to-r from-cyan-400 to-purple-500' : 'bg-gradient-to-r from-blue-500 to-pink-500'}`}></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className={`absolute left-8 md:left-1/2 md:transform md:-translate-x-0.5 w-0.5 h-full ${darkMode ? 'bg-gradient-to-b from-cyan-400 to-purple-500' : 'bg-gradient-to-b from-blue-500 to-pink-500'}`}></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* Timeline dot */}
              <div className={`absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 rounded-full ${darkMode ? 'bg-cyan-400' : 'bg-blue-500'} border-4 ${darkMode ? 'border-gray-900' : 'border-white'} z-10`}></div>

              {/* Content */}
              <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <Link to="/experience">
                  <motion.div
                    className={`p-6 rounded-lg shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl ${
                      darkMode ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:bg-gray-50'
                    }`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{exp.title}</h3>
                        <h4 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`}>{exp.company}</h4>
                        <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{exp.period}</p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                              {exp.projects.length} Projects
                            </span>
                            <div className="flex -space-x-2">
                              {exp.projects.slice(0, 3).map((project, projectIndex) => (
                                <div
                                  key={projectIndex}
                                  className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 overflow-hidden"
                                >
                                  <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                              ))}
                              {exp.projects.length > 3 && (
                                <div className={`w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 flex items-center justify-center text-xs font-bold ${
                                  darkMode ? 'bg-gray-600 text-gray-300' : 'bg-gray-200 text-gray-700'
                                }`}>
                                  +{exp.projects.length - 3}
                                </div>
                              )}
                            </div>
                          </div>

                          <div className={`flex items-center gap-2 text-sm font-medium ${
                            darkMode ? 'text-cyan-400' : 'text-blue-600'
                          }`}>
                            <span>View Projects</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;