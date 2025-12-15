'use client';

import { motion } from 'framer-motion';
import ThemeSwitcher from './ThemeSwitcher'; // Componente per il Dark Mode
import { PersonalData } from '@/app/data/cvData';
import { Mail, Github, Linkedin } from 'lucide-react';

const PROFILE_IMAGE_URL = "https://placehold.co/150x150/50594F/B0BFAE?text=AA"; 

// Animazioni
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, 
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
    // Sezione esterna che fornisce spazio
    <motion.section 
      className="pt-16 pb-16 relative z-50" 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Contenitore interno come BLOCCO FLOTTANTE e COLORATO  */}
      <div 
        className="
          max-w-4xl mx-auto 
          // NUOVI SFONDI: usa block-main per il blocco scuro sul body-background
          bg-block-main dark:bg-dark-block 
          shadow-2xl dark:shadow-dark-base/50 
          rounded-xl p-8 sm:p-12
          text-center relative
          // Bordo con colore alternato
          border border-block-alt dark:border-dark-block
        "
      >
        
        {/* PULSANTE DARK MODE */}
        <div className="absolute top-4 right-4 md:top-6 md:right-6">
            <ThemeSwitcher />
        </div>

        {/* FOTO PROFILO */}
        <motion.img
            src={PROFILE_IMAGE_URL}
            alt={`Foto Profilo di ${name}`}
            // Bordo con colore ACCENTO
            className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-accent dark:border-dark-accent mb-6 shadow-xl"
            variants={itemVariants}
        />

        {/* Nome e Ruolo */}
        <motion.h1 
          // Testo principale (chiaro - base-light)
          className="text-4xl md:text-6xl font-extrabold text-base-light dark:text-text-dark leading-tight"
          variants={itemVariants}
        >
          {name}
        </motion.h1>
        
        <motion.p 
          // Ruolo in colore ACCENTO
          className="mt-2 text-xl md:text-3xl text-accent dark:text-dark-accent font-medium"
          variants={itemVariants}
        >
          {role}
        </motion.p>

        {/* Presentazione/Bio */}
        <motion.p 
          // Testo secondario (block-alt)
          className="mt-6 text-lg text-block-alt dark:text-text-dark max-w-3xl mx-auto"
          variants={itemVariants}
        >
          {presentation}
        </motion.p>

        {/* Icone Social/Contatti */}
        <motion.div 
          className="mt-8 flex justify-center space-x-6"
          variants={itemVariants}
        >
          {/* Le icone usano il colore di base come testo, e l'accento come hover */}
          <a href={`mailto:${email}`} className="text-base-light hover:text-accent dark:hover:text-dark-accent transition">
            <Mail className="w-6 h-6" />
          </a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-base-light hover:text-accent dark:hover:text-dark-accent transition">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer" className="text-base-light hover:text-accent dark:hover:text-dark-accent transition">
            <Github className="w-6 h-6" />
          </a>
        </motion.div>

      </div>
    </motion.section>
  );
}