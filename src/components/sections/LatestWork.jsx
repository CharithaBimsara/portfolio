import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { useDarkMode } from '../../DarkModeContext';

const LatestWork = () => {
  const { darkMode } = useDarkMode();

  const techStack = [
    { name: 'React', color: 'from-cyan-400 to-blue-500' },
    { name: 'Node.js', color: 'from-green-400 to-emerald-500' },
    { name: 'OpenAI API', color: 'from-purple-400 to-indigo-500' },
    { name: 'PostgreSQL', color: 'from-blue-400 to-cyan-500' },
    { name: 'Tailwind CSS', color: 'from-teal-400 to-cyan-400' },
  ];

  return (
    <section className={`py-20 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent ${
            darkMode ? 'bg-gradient-to-r from-cyan-400 to-purple-500' : 'bg-gradient-to-r from-blue-600 to-pink-500'
          }`}>
            Latest Work
          </h2>
          <div className={`w-32 h-1 mx-auto rounded-full ${
            darkMode ? 'bg-gradient-to-r from-cyan-400 to-purple-500' : 'bg-gradient-to-r from-blue-500 to-pink-500'
          }`}></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`rounded-2xl overflow-hidden shadow-2xl max-w-5xl mx-auto transition-all duration-300 hover:shadow-xl ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          }`}
        >
          <div className="relative group">
            <img 
              src="https://github.com/CharithaBimsara/WallColorGenAI/raw/main/Demo.gif" 
              alt="Latest project" 
              className="w-full h-72 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-6 left-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Wall Color Chnage AI</h3>
              <p className={`text-sm ${
                darkMode ? 'text-gray-300' : 'text-gray-200'
              }`}>
                AI based room wall color changer
              </p>
            </div>
          </div>

          <div className={`p-8 transition-colors ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <p className={`text-lg mb-6 leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              An AI-powered tool that generates color palettes for wall painting based on user preferences.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {techStack.map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`px-4 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r ${tech.color}`}
                >
                  {tech.name}
                </motion.span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/CharithaBimsara/WallColorGenAI" 
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all ${
                  darkMode 
                    ? 'bg-gray-700 text-white hover:bg-gray-600' 
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                <Github size={18} className="mr-2" />
                View Source
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://youtu.be/lG0ShigxPCw"
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all ${
                  darkMode 
                    ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white hover:shadow-purple-500/20' 
                    : 'bg-gradient-to-r from-pink-500 to-blue-500 text-white hover:shadow-blue-500/20'
                } hover:shadow-lg`}
              >
                <ExternalLink size={18} className="mr-2" />
                Demo
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LatestWork;