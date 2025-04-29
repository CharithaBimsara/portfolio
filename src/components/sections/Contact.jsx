import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MessageSquare, Send } from 'lucide-react';
import { useDarkMode } from '../../DarkModeContext';
import { SiGithub, SiLinkedin, SiMinutemailer } from 'react-icons/si';
import { FaRegCommentDots, FaPaperPlane } from 'react-icons/fa';


const Contact = () => {
    const { darkMode } = useDarkMode();

    const contactMethods = [
        {
            icon: Mail,
            color: 'from-pink-500 to-rose-500',
            darkColor: 'from-pink-400 to-rose-400',
            title: 'Email',
            detail: 'charithabimsara@gmail.com',
            href: 'mailto:charithabimsara@gmail.com',
            border: 'border-pink-500'
        },
        {
            icon: Github,
            color: 'from-purple-500 to-indigo-500',
            darkColor: 'from-purple-400 to-indigo-400',
            title: 'GitHub',
            detail: '@CharithaBimsara',
            href: 'https://github.com/CharithaBimsara',
            border: 'border-purple-500'
        },
        {
            icon: Linkedin,
            color: 'from-blue-500 to-cyan-500',
            darkColor: 'from-blue-400 to-cyan-400',
            title: 'LinkedIn',
            detail: 'in/charithaadikar',
            href: 'https://www.linkedin.com/in/charithaadikari',
            border: 'border-blue-500'
        }
    ];

    return (
        <section id="contact" className={`py-20 ${darkMode ? 'dark bg-gray-900' : 'bg-gradient-to-b from-blue-50 to-purple-50'}`}>
            <div className="container mx-auto px-6 max-w-6xl">
                {/* Animated Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className={`text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent ${darkMode ? 'bg-gradient-to-r from-cyan-400 to-purple-500' : 'bg-gradient-to-r from-blue-600 to-pink-500'
                        }`}>
                        Get In Touch
                    </h2>
                    <div className={`w-32 h-1 mx-auto rounded-full ${darkMode ? 'bg-gradient-to-r from-cyan-400 to-purple-500' : 'bg-gradient-to-r from-blue-500 to-pink-500'
                        }`}></div>
                    <p className={`text-lg mt-6 max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                        Have a project in mind or want to collaborate? Feel free to reach out!
                    </p>
                </motion.div>

                {/* Contact Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {contactMethods.map((method, index) => (
                        <motion.a
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            href={method.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group relative p-8 rounded-2xl overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'
                                } shadow-lg hover:shadow-xl transition-all duration-300`}
                        >
                            {/* Gradient border bottom */}
                            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${method.color} ${darkMode ? method.darkColor : method.color
                                }`}></div>

                            {/* Animated hover effect */}
                            <div className={`absolute inset-0 bg-gradient-to-r ${method.color} opacity-0 ${darkMode ? method.darkColor : method.color
                                } group-hover:opacity-10 transition-opacity duration-300`}></div>

                            <div className="relative z-10">
                                <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center ${darkMode ? 'bg-gray-700' : 'bg-gray-100'
                                    }`}>
                                    <method.icon
                                        size={28}
                                        className={`text-pink-500 dark:text-pink-400`}
                                    />
                                </div>
                                <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'
                                    }`}>
                                    {method.title}
                                </h3>
                                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'
                                    }`}>
                                    {method.detail}
                                </p>
                                <div className={`mt-4 inline-flex items-center text-sm font-medium ${darkMode ? 'text-cyan-400' : 'text-blue-600'
                                    }`}>
                                    Contact me
                                    <Send size={16} className="ml-2" />
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>


            </div>
        </section>
    );
};

export default Contact;