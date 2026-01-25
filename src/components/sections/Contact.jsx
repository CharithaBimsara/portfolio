import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { useDarkMode } from '../../DarkModeContext';

const Contact = () => {
    const { darkMode } = useDarkMode();

    const contactMethods = [
        {
            icon: Mail,
            title: 'Email',
            detail: 'charithabimsara@gmail.com',
            href: 'mailto:charithabimsara@gmail.com',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            icon: Github,
            title: 'GitHub',
            detail: '@CharithaBimsara',
            href: 'https://github.com/CharithaBimsara',
            color: 'from-purple-500 to-pink-500'
        },
        {
            icon: Linkedin,
            title: 'LinkedIn',
            detail: 'in/charithaadikari',
            href: 'https://www.linkedin.com/in/charithaadikari',
            color: 'from-blue-500 to-cyan-500'
        }
    ];

    return (
        <section id="contact" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
            <div className="container mx-auto px-6 max-w-6xl">
                {/* Header */}
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
                        Get In Touch
                    </h2>
                    <div className={`w-32 h-1 mx-auto rounded-full ${
                        darkMode ? 'bg-gradient-to-r from-cyan-400 to-purple-500' : 'bg-gradient-to-r from-blue-500 to-pink-500'
                    }`}></div>
                </motion.div>

                {/* Contact Methods Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {contactMethods.map((method, index) => (
                        <motion.a
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            href={method.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                                darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                            }`}
                        >
                            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${method.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>

                            <div className="p-8">
                                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-gradient-to-r ${method.color}`}>
                                    <method.icon size={24} className="text-white" />
                                </div>

                                <h3 className={`text-xl font-semibold mb-2 ${
                                    darkMode ? 'text-white' : 'text-gray-900'
                                }`}>
                                    {method.title}
                                </h3>

                                <p className={`text-sm mb-4 ${
                                    darkMode ? 'text-gray-300' : 'text-gray-600'
                                }`}>
                                    {method.detail}
                                </p>

                                <div className={`inline-flex items-center text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r ${method.color} group-hover:scale-105 transition-transform duration-200`}>
                                    <span>Connect</span>
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