import { motion } from 'framer-motion';
import { Github, Mail, Linkedin, Heart } from 'lucide-react';
import { useDarkMode } from '../../DarkModeContext';

const Footer = () => {
  const { darkMode } = useDarkMode();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/CharithaBimsara',
      color: darkMode ? 'text-purple-300' : 'text-white',
      hoverColor: darkMode ? 'hover:text-purple-100' : 'hover:text-gray-100',
      bg: darkMode ? 'bg-gray-800' : 'bg-white/20',
      hoverBg: darkMode ? 'hover:bg-gray-700' : 'hover:bg-white/30'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/charithaadikari',
      color: darkMode ? 'text-blue-300' : 'text-white',
      hoverColor: darkMode ? 'hover:text-blue-100' : 'hover:text-gray-100',
      bg: darkMode ? 'bg-gray-800' : 'bg-white/20',
      hoverBg: darkMode ? 'hover:bg-gray-700' : 'hover:bg-white/30'
    },
    {
      icon: Mail,
      href: 'mailto:charithabimsara@gmail.com',
      color: darkMode ? 'text-pink-300' : 'text-white',
      hoverColor: darkMode ? 'hover:text-pink-100' : 'hover:text-gray-100',
      bg: darkMode ? 'bg-gray-800' : 'bg-white/20',
      hoverBg: darkMode ? 'hover:bg-gray-700' : 'hover:bg-white/30'
    }
  ];

  return (
    <footer className={`${darkMode ? 'bg-gray-900' : 'bg-gradient-to-r from-violet-600 to-pink-500'} text-white py-12`}>
      <div className="container mx-auto px-6 max-w-8xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className={`flex items-center mb-6 md:mb-0 ${darkMode ? 'text-gray-300' : 'text-white'}`}>
            <p className="text-sm md:text-base">
              © {new Date().getFullYear()} Charitha Adikari. All rights reserved.
            </p>
            <Heart 
              size={16} 
              className={`mx-1 ${darkMode ? 'text-pink-400' : 'text-pink-200'} animate-pulse inline`} 
              fill={darkMode ? '#f472b6' : '#fbcfe8'} 
            />
          </div>

          <div className="flex space-x-4">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full transition-all duration-300 ${link.bg} ${link.hoverBg} ${link.color} ${link.hoverColor}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={20} />
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`mt-8 pt-6 text-center text-sm ${darkMode ? 'text-gray-400 border-gray-800' : 'text-white/80 border-white/10'} border-t`}
        >
          
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;