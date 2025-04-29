import { motion } from 'framer-motion';
import { Github, ArrowRight } from 'lucide-react';
import { useDarkMode } from '../../DarkModeContext';
import { Link } from 'react-router-dom';


const ProjectCard = ({ project }) => {
  const { darkMode } = useDarkMode();
  
  const techColors = [
    { bg: 'bg-pink-500/10', text: 'text-pink-600', darkBg: 'bg-pink-400/20', darkText: 'text-pink-400' },
    { bg: 'bg-purple-500/10', text: 'text-purple-600', darkBg: 'bg-purple-400/20', darkText: 'text-purple-400' },
    { bg: 'bg-blue-500/10', text: 'text-blue-600', darkBg: 'bg-blue-400/20', darkText: 'text-blue-400' },
    { bg: 'bg-emerald-500/10', text: 'text-emerald-600', darkBg: 'bg-emerald-400/20', darkText: 'text-emerald-400' },
    { bg: 'bg-amber-500/10', text: 'text-amber-600', darkBg: 'bg-amber-400/20', darkText: 'text-amber-400' }
  ];

  return (
    <Link to={`/projects/${project.id}`}>
    <motion.div
      whileHover={{ y: -5 }}
      className={`rounded-xl overflow-hidden shadow-md transition-all duration-300 ${
        darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-100'
      }`}
    >
      <div className="relative group">
        {/* Project image with hover overlay */}
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
        
        {/* Project type badge */}
        <span className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-medium ${
          darkMode 
            ? 'bg-gray-900/90 text-purple-400' 
            : 'bg-white/90 text-purple-600'
        }`}>
          {project.type}
        </span>
      </div>

      <div className="p-4">
        <h3 className={`font-bold mb-1.5 ${
          darkMode ? 'text-white' : 'text-gray-800'
        }`}>
          {project.title}
        </h3>
        
        <p className={`text-sm mb-3 line-clamp-2 ${
          darkMode ? 'text-gray-300' : 'text-gray-600'
        }`}>
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className={`px-2 py-0.5 rounded-full text-xs ${
                darkMode 
                  ? `${techColors[index % techColors.length].darkBg} ${techColors[index % techColors.length].darkText}`
                  : `${techColors[index % techColors.length].bg} ${techColors[index % techColors.length].text}`
              }`}
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className={`px-2 py-0.5 rounded-full text-xs ${
              darkMode 
                ? 'bg-gray-700 text-gray-400' 
                : 'bg-gray-100 text-gray-500'
            }`}>
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* View Details link */}
        <div className={`flex items-center text-sm ${
          darkMode ? 'text-purple-400 hover:text-purple-300' : 'text-purple-600 hover:text-purple-700'
        } transition-colors`}>
          <span>View details</span>
          <ArrowRight size={16} className="ml-1" />
        </div>
      </div>
    </motion.div>
    </Link>
  );
};

export default ProjectCard;