import { motion } from 'framer-motion';
import { useDarkMode } from '../../DarkModeContext';
import { Code, Database, Server, User, GraduationCap, Trophy, Award, Briefcase, Heart } from 'lucide-react';

const About = () => {
  const { darkMode } = useDarkMode();

  const technicalSkills = [
    {
      category: 'Languages',
      icon: <Code size={20} />,
      skills: ['Java', 'JavaScript', 'C#', 'SQL', 'Dart', 'Python'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      category: 'Frontend',
      icon: <Code size={20} />,
      skills: ['React', 'Flutter', 'Vue', 'Tailwind'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      category: 'Backend',
      icon: <Server size={20} />,
      skills: ['Spring Boot', 'Node', 'Express', '.NET Core Web APIs'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      category: 'Database and Others',
      icon: <Database size={20} />,
      skills: ['MySQL', 'MongoDB', 'SQL Server', 'Git', 'AWS', 'Apache Tomcat'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const education = {
    degree: 'BSc Information Technology — Second Class Lower Division',
    university: 'Rajarata University of Sri Lanka',
    period: '2022 – 2025',
    icon: <GraduationCap size={24} />
  };

  const extracurricular = [
    {
      name: 'IEEE Xtreme - 2024',
      icon: <Trophy size={20} />,
      color: 'from-yellow-400 to-orange-500'
    },
    {
      name: 'RUSL Xtreme - mini hackathon - best individual performer - 2024',
      icon: <Award size={20} />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'IEEE INSL - 2024',
      icon: <Award size={20} />,
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  return (
    <section id="about" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
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

        {/* Profile Image and Intro */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
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
            {/* Professional Summary */}
            <div className={`p-6 rounded-2xl shadow-lg mb-6 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${darkMode ? 'from-purple-500 to-pink-500' : 'from-pink-500 to-purple-500'} text-white mr-4`}>
                  <Briefcase size={24} />
                </div>
                <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Professional Summary
                </h3>
              </div>
              <div className={`space-y-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p className="text-sm leading-relaxed">
                  Full-Stack Software Engineer and BSc Information Technology graduate from Rajarata University of Sri Lanka (Second Class Lower Division). I build business applications, mobile tools and API integrations using React, ASP.NET Core, Spring Boot and Flutter.
                </p>
                <p className="text-sm leading-relaxed">
                  Demonstrated ability to work independently on innovative projects as well as collaboratively in team-oriented environments. Committed to continuous learning and staying updated with the latest industry trends and technologies.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Education & Activities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-1 flex flex-col justify-between min-h-[500px]"
          >
            {/* Education */}
            <div className={`p-6 rounded-2xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${darkMode ? 'from-green-500 to-emerald-500' : 'from-emerald-500 to-green-500'} text-white mr-4`}>
                  {education.icon}
                </div>
                <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Education
                </h3>
              </div>
              <div className="space-y-2">
                <h4 className={`font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                  {education.degree}
                </h4>
                <p className={`text-sm ${darkMode ? 'text-purple-400' : 'text-purple-600'} font-medium`}>
                  {education.university}
                </p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {education.period}
                </p>
              </div>
            </div>

            {/* Extra-curricular Activities */}
            <div className={`p-6 rounded-2xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${darkMode ? 'from-orange-500 to-red-500' : 'from-red-500 to-orange-500'} text-white mr-4`}>
                  <Trophy size={24} />
                </div>
                <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Extra-curricular Activities
                </h3>
              </div>
              <div className="space-y-2">
                {extracurricular.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-2"
                  >
                    <div className={`p-1.5 rounded-lg bg-gradient-to-r ${activity.color} text-white flex-shrink-0`}>
                      {activity.icon}
                    </div>
                    <p className={`text-xs leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {activity.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Technical Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 min-h-[500px]"
          >
            <div className={`p-6 rounded-2xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${darkMode ? 'from-cyan-500 to-blue-500' : 'from-blue-500 to-cyan-500'} text-white mr-4`}>
                  <Code size={24} />
                </div>
                <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Technical Skills
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {technicalSkills.map((skillGroup, groupIndex) => (
                  <motion.div
                    key={groupIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
                    className={`p-4 rounded-xl shadow-md ${darkMode ? 'bg-gray-700 border border-gray-600' : 'bg-gray-50 border border-gray-100'}`}
                  >
                    <div className="flex items-center mb-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${skillGroup.color} text-white mr-3`}>
                        {skillGroup.icon}
                      </div>
                      <h4 className={`font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                        {skillGroup.category}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: (groupIndex * 0.1) + (skillIndex * 0.05) }}
                          className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${skillGroup.color} text-white shadow-sm`}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;