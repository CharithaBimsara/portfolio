import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import { useDarkMode } from '../../DarkModeContext';

const Hero = () => {
  const { darkMode } = useDarkMode();

  return (
    <section className={`relative py-24 md:py-32 overflow-hidden ${darkMode ? 'dark' : ''}`}>
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className={`absolute top-0 left-0 w-full h-full opacity-90 animate-gradient-shift ${
          darkMode 
            ? 'bg-gradient-to-br from-gray-800 via-gray-900 to-indigo-900' 
            : 'bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500'
        }`}></div>
        <div className={`absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t ${
          darkMode ? 'from-gray-950' : 'from-gray-900'
        } to-transparent z-10`}></div>
      </div>

      {/* Floating animated elements */}
      <motion.div 
        className={`absolute top-20 left-10 w-32 h-32 rounded-full blur-xl ${
          darkMode ? 'bg-cyan-500 opacity-10' : 'bg-cyan-400 opacity-20'
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
          darkMode ? 'bg-fuchsia-500 opacity-10' : 'bg-fuchsia-400 opacity-20'
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

      <div className="container mx-auto px-6 relative z-20">
        <div className="flex flex-col items-center text-center">
          {/* Animated headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight"
          >
            <span className={`bg-clip-text text-transparent ${
              darkMode 
                ? 'bg-gradient-to-r from-cyan-300 to-white' 
                : 'bg-gradient-to-r from-cyan-400 to-white'
            }`}>
              Full Stack
            </span>
            <br />
            <span className={`bg-clip-text text-transparent ${
              darkMode 
                ? 'bg-gradient-to-r from-white to-fuchsia-400' 
                : 'bg-gradient-to-r from-white to-fuchsia-300'
            }`}>
              Developer
            </span>
          </motion.h1>

          {/* Animated subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`text-xl md:text-2xl max-w-3xl mb-10 ${
              darkMode ? 'text-gray-300' : 'text-white/80'
            }`}
          >
            Building modern web experiences with 
            <span className={`font-semibold ${
              darkMode ? 'text-cyan-400' : 'text-cyan-300'
            }`}> React</span>, 
            <span className={`font-semibold ${
              darkMode ? 'text-purple-400' : 'text-purple-300'
            }`}> Node.js</span>, and 
            <span className={`font-semibold ${
              darkMode ? 'text-pink-400' : 'text-pink-300'
            }`}> TypeScript</span>.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact" 
              className={`flex items-center justify-center px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-xl ${
                darkMode 
                  ? 'bg-white text-gray-900 hover:bg-gray-200' 
                  : 'bg-white text-indigo-600 hover:bg-opacity-90'
              }`}
            >
              Get in touch <ArrowRight className="ml-2 h-5 w-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects" 
              className={`flex items-center justify-center px-8 py-4 border-2 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-xl ${
                darkMode 
                  ? 'border-white text-white hover:bg-white/10' 
                  : 'border-white text-white hover:bg-white/10'
              }`}
            >
              View my work
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex gap-6"
          >
            <motion.a 
              whileHover={{ y: -3 }}
              href="#" 
              className={`transition-colors ${
                darkMode ? 'text-gray-300 hover:text-cyan-400' : 'text-white hover:text-cyan-300'
              }`} 
              aria-label="GitHub"
            >
              <Github size={24} />
            </motion.a>
            <motion.a 
              whileHover={{ y: -3 }}
              href="#" 
              className={`transition-colors ${
                darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-white hover:text-blue-300'
              }`} 
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a 
              whileHover={{ y: -3 }}
              href="#" 
              className={`transition-colors ${
                darkMode ? 'text-gray-300 hover:text-sky-400' : 'text-white hover:text-sky-300'
              }`} 
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;