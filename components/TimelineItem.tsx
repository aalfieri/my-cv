import { Education, Experience } from '@/app/data/cvData';
import { ChevronRight } from 'lucide-react'; 

// Definisce un tipo unificato per gli elementi della Timeline
type TimelineEntry = Education | Experience;

export default function TimelineItem({ entry }: { entry: TimelineEntry }) {
  // Determina se l'entry è Esperienza o Istruzione in base alla presenza di 'company' o 'institution'
  const isExperience = 'company' in entry;

  // Determina il titolo e l'istituzione/azienda
  const title = isExperience ? (entry as Experience).role : (entry as Education).degree;
  const subtitle = isExperience ? (entry as Experience).company : (entry as Education).institution;
  const technologies = isExperience ? (entry as Experience).technologiesUsed : undefined;

  return (
    // Usa 'group' per gli effetti hover su tutto il blocco
    <div className="relative mb-8 pl-8 sm:pl-12 group">
      
      {/* Il Punto del Timeline */}
      <div className="absolute w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full -left-2 sm:-left-2 border-4 border-white dark:border-gray-900 transition-all group-hover:scale-125 duration-300"></div>

      {/* La Barra Verticale */}
      <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>

      {/* Contenuto della Card */}
      <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-shadow group-hover:shadow-lg">
        
        {/* Anni */}
        <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1">
          {entry.yearRange}
        </p>
        
        {/* Titolo e Sottotitolo */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-md text-blue-600 dark:text-blue-400 font-medium">
          {subtitle}
        </p>

        {/* Descrizione */}
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          {entry.description}
        </p>
        
        {/* Badge Tecnologie */}
        {technologies && (
          <div className="mt-4 flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span key={tech} className="px-3 py-1 text-xs font-medium text-white bg-gray-600 dark:bg-gray-700 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}