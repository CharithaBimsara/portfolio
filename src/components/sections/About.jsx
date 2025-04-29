import { motion } from 'framer-motion';
import { useDarkMode } from '../../DarkModeContext'; // You'll need to create this context

const About = () => {
  const { darkMode } = useDarkMode();

  const skills = [
    { name: 'JavaScript', color: 'from-yellow-400 to-yellow-500' },
    { name: 'React', color: 'from-cyan-400 to-blue-500' },
    { name: 'Node.js', color: 'from-green-500 to-green-600' },
    { name: 'TypeScript', color: 'from-blue-500 to-blue-600' },
    { name: 'Tailwind CSS', color: 'from-cyan-400 to-teal-500' },
    { name: 'MongoDB', color: 'from-green-400 to-emerald-600' },
    { name: 'Express', color: 'from-gray-400 to-gray-600' },
    { name: 'GraphQL', color: 'from-pink-500 to-purple-600' },
  ];

  return (
    <section id="about" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent ${darkMode ? 'bg-gradient-to-r from-cyan-400 to-purple-500' : 'bg-gradient-to-r from-blue-600 to-pink-500'}`}>
            About Me
          </h2>
          <div className={`w-32 h-1 mx-auto rounded-full ${darkMode ? 'bg-gradient-to-r from-cyan-400 to-purple-500' : 'bg-gradient-to-r from-blue-500 to-pink-500'}`}></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/3 flex justify-center"
          >
            <div className="relative w-72 h-72">
              <div className={`absolute inset-0 rounded-2xl ${darkMode ? 'bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20' : 'bg-gradient-to-br from-blue-100 via-pink-100 to-purple-100'} transform rotate-6`}></div>
              <div className={`absolute inset-0 rounded-2xl ${darkMode ? 'bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20' : 'bg-gradient-to-br from-blue-100 via-pink-100 to-purple-100'} transform -rotate-6`}></div>
              <img 
                src="https://avatars.githubusercontent.com/u/198903048?v=4" 
                alt="Profile" 
                className="relative z-10 w-full h-full rounded-2xl object-cover shadow-xl border-4 border-white dark:border-gray-800"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-2/3"
          >
            <div className={`space-y-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <p className="text-lg leading-relaxed">
                Hi, I'm <span className={`font-bold ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`}>Charitha Adikari</span>, a passionate full stack developer with experience building modern web applications. I specialize in creating responsive, performant, and accessible digital experiences.
              </p>
              <p className="text-lg leading-relaxed">
                With a background in <span className={`font-bold ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>Information Technology</span>, I bring a unique perspective to problem-solving and user experience design. I'm committed to writing clean, maintainable code and staying updated with the latest industry trends.
              </p>
              <p className="text-lg leading-relaxed">
                When I'm not coding, you can find me <span className={`font-bold ${darkMode ? 'text-pink-400' : 'text-pink-600'}`}>Library</span>. I believe in continuous learning and sharing knowledge with the developer community.
              </p>

              <div className="pt-4">
                <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>My Skills</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className={`px-4 py-2 rounded-full text-sm font-medium shadow-sm bg-gradient-to-r ${skill.color} text-white`}
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;