import React from 'react';
import cvData, { Project } from '@/app/data/cvData';
import { Github, Globe } from 'lucide-react';

const { projects } = cvData;

// Componente per la singola card progetto
function ProjectCard({ project }: { project: Project }) {
  // Colori per il bordo/accento
  const accentColorClass = "border-accent dark:border-dark-accent";
  
  return (
    <div 
      className={`
        p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 
        // Sfondo Card: usa block-alt (chiaro) su sfondo block-main (scuro del wrapper)
        bg-block-alt dark:bg-dark-block 
        border-t-4 ${accentColorClass} 
        flex flex-col h-full
        text-text-light dark:text-text-dark // Colore testo generale
      `}
    >
      
      {/* Titolo e Descrizione */}
      <h3 className="text-2xl font-bold text-block-main dark:text-dark-accent mb-2">
        {project.title}
      </h3>
      <p className="text-text-light/80 dark:text-text-dark/80 flex-grow mb-4 text-left">
        {project.description}
      </p>

      {/* Badge Tecnologie */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech) => (
          <span 
            key={tech} 
            // Badge con sfondo accento (scuro) e testo base-light (chiaro)
            className="px-3 py-1 text-xs font-medium bg-accent dark:bg-dark-accent text-base-light dark:text-block-main rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Link (Call to Action) */}
      <div className="flex gap-4 mt-auto pt-4 border-t border-base-light/50 dark:border-dark-base/50 justify-center md:justify-start">
        
        {/* Link GitHub: usa colore accento per uniformità */}
        <a 
          href={project.githubUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center text-accent dark:text-dark-accent hover:text-block-main dark:hover:text-base-light font-medium transition-colors"
        >
          <Github className="w-5 h-5 mr-1" />
          Codice Sorgente
        </a>

        {/* Link Live Demo (Se disponibile) */}
        {project.liveDemoUrl && (
          <a 
            href={project.liveDemoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            // Anche qui usiamo l'accento per coerenza
            className="flex items-center text-accent dark:text-dark-accent hover:text-block-main dark:hover:text-base-light font-medium transition-colors"
          >
            <Globe className="w-5 h-5 mr-1" />
            Live Demo
          </a>
        )}
      </div>

    </div>
  );
}


export default function ProjectsSection() {
  // Filtro i progetti per mettere in evidenza solo quelli che hanno isFeatured: true
  const featuredProjects = projects.filter(p => p.isFeatured);

  return (
    <section id="projects" className="py-12">
      {/* Titolo centrato e con colori accentati */}
      <h2 className="text-3xl font-bold text-accent dark:text-dark-accent border-b border-accent/50 dark:border-dark-accent/50 pb-2 mb-8 text-center">
        Progetti in Evidenza
      </h2>

      {/* Griglia Responsiva 2 Colonne su desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      
      {/* Link altri progetti*/}
      <div className="text-center mt-10">
        <a 
          href={cvData.personal.github} 
          target="_blank" 
          rel="noopener noreferrer"
          // Bottone con sfondo block-alt e testo block-main
          className="px-6 py-3 text-lg bg-block-alt dark:bg-dark-block text-block-main dark:text-dark-accent rounded-lg hover:bg-block-alt/80 dark:hover:bg-dark-block/80 transition-colors inline-flex items-center shadow-md"
        >
          <Github className="w-5 h-5 mr-2" />
          Vedi tutti i miei Repository su GitHub
        </a>
      </div>

    </section>
  );
}