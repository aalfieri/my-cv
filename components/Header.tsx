'use client';

import { motion } from 'framer-motion';
import cvData, { PersonalData } from '@/app/data/cvData';
import { Mail, Github, Linkedin } from 'lucide-react';

//animazioni
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Ritarda l'entrata degli elementi figli
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};


export default function Header({ personalData }: { personalData: PersonalData }) {
  const { name, role, presentation, email, linkedin, github } = personalData;

  return (
    <motion.section 
      className="pt-24 pb-16 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Nome e Ruolo */}
        <motion.h1 
          className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight"
          variants={itemVariants}
        >
          {name}
        </motion.h1>
        
        <motion.p 
          className="mt-2 text-xl md:text-3xl text-blue-600 dark:text-blue-400 font-medium"
          variants={itemVariants}
        >
          {role}
        </motion.p>

        {/* Presentazione/Bio */}
        <motion.p 
          className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          variants={itemVariants}
        >
          {presentation}
        </motion.p>

        {/* Icone Social/Contatti */}
        <motion.div 
          className="mt-8 flex justify-center space-x-6"
          variants={itemVariants}
        >
          <a href={`mailto:${email}`} className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition">
            <Mail className="w-6 h-6" />
          </a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition">
            <Github className="w-6 h-6" />
          </a>
        </motion.div>

      </div>
    </motion.section>
  );
}