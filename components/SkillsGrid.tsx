'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import cvData, { Skill } from '@/app/data/cvData';
import { Code, GitBranch, Terminal, Layout } from 'lucide-react';

const { hardSkills } = cvData;

// Definisci tutti i tipi di categoria unici per i bottoni di filtro
const categories = [
  "Tutte", // Opzione per vedere tutto
  "Linguaggi di Programmazione",
  "Frameworks & Librerie",
  "IDE e Editor",
  "Ambiente Collaborativo e Tools",
] as const; 

type Category = typeof categories[number];


// Funzione per ottenere l'icona in base alla categoria
const getCategoryIcon = (category: Category) => {
  // Uso delle classi di colore ACCENT per le icone
  const iconClass = "w-5 h-5 mr-2 text-accent dark:text-dark-accent";

  switch (category) {
    case "Linguaggi di Programmazione":
      return <Code className={iconClass} />;
    case "Frameworks & Librerie":
      return <Layout className={iconClass} />;
    case "IDE e Editor":
      return <Terminal className={iconClass} />;
    case "Ambiente Collaborativo e Tools":
      return <GitBranch className={iconClass} />;
    default:
      return null;
  }
};

// Animazione per le card
const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};


export default function SkillsGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>("Tutte");

  // Logica di Filtro
  const filteredSkills = hardSkills.filter(skill => 
    activeCategory === "Tutte" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-12">
      {/* TITOLO CENTRATO con i colori della palette */}
      <h2 className="text-3xl font-bold text-text-light dark:text-text-dark border-b border-text-light/50 dark:border-text-dark/50 pb-2 mb-8 text-center">
        Competenze Tecniche (Hard Skills)
      </h2>

      {/* Bottoni di Filtro */}
      <div className="flex flex-wrap gap-3 mb-8 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`
              px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 
              flex items-center shadow-md
              // Colori del bottone (accento quando attivo, block-alt quando inattivo)
              ${activeCategory === category 
                // STATO ATTIVO: Sfondo block-main, Testo base-light/text-dark
                ? 'bg-block-main dark:bg-dark-accent text-base-light dark:text-block-main hover:bg-block-main/90' 
                // STATO INATTIVO: Sfondo block-alt, Testo text-light/text-dark
                : 'bg-block-alt dark:bg-dark-block text-text-light dark:text-text-dark hover:bg-block-alt/70 dark:hover:bg-dark-block/70'
              }
            `}
          >
            {getCategoryIcon(category)}
            {category}
          </button>
        ))}
      </div>

      {/* Griglia delle Competenze (Animata) */}
      <motion.div 
        layout // Abilita l'animazione di layout quando le card vengono aggiunte/rimosse
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredSkills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.3 }}
            className="
                p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow 
                // Sfondo Card: usa block-main su block-alt
                bg-block-main dark:bg-dark-block 
                // Bordo TOP con l'accento
                border-t-4 border-accent dark:border-dark-accent
                text-base-light dark:text-text-dark // Colore testo generale
            "
          >
            <h3 className="text-xl font-bold mb-1 text-base-light dark:text-dark-accent">
              {skill.name}
            </h3>
            <p className="text-sm text-block-alt dark:text-text-dark/80">
              {skill.category}
            </p>
            <div className={`mt-3 text-xs font-semibold uppercase tracking-wider 
              // Qui si usano colori standard per il semaforo (non nella palette)
              ${skill.level === 'Advanced' ? 'text-green-400 dark:text-green-300' : 
                skill.level === 'Intermediate' ? 'text-yellow-400 dark:text-yellow-300' : 'text-red-400 dark:text-red-300'}
            `}>
              Livello: {skill.level}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}