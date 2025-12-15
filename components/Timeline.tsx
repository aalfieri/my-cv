import cvData from '@/app/data/cvData';
import TimelineItem from './TimelineItem'; 
import { Briefcase, GraduationCap } from 'lucide-react'; // Icone

const { education, experience } = cvData;

export default function Timeline() {
  return (
    <section id="timeline" className="py-12">
      
      {/* Titolo Sezione Esperienza */}
            <h2 className="text-3xl font-bold mb-8 text-accent dark:text-dark-accent border-b border-accent/50 dark:border-dark-accent/50 pb-2 text-center">
        <Briefcase className="w-7 h-7 mr-3 text-blue-600 dark:text-blue-400" />
        Esperienza Lavorativa
      </h2>

      {/* Loop Esperienze */}
      <div className="relative">
        {/* Ordina per ID in modo che il più recente sia in alto */}
        {experience.map((entry) => (
          <TimelineItem key={entry.id} entry={entry} />
        ))}
      </div>

      <div className="mt-12">
        {/* Titolo Sezione Istruzione */}
      <h2 className="text-3xl font-bold mt-12 mb-8 text-accent dark:text-dark-accent border-b border-accent/50 dark:border-dark-accent/50 pb-2 text-center">
          <GraduationCap className="w-7 h-7 mr-3 text-blue-600 dark:text-blue-400" />
          Istruzione e Formazione
        </h2>

        {/* Loop Istruzione */}
        <div className="relative">
          {education.map((entry) => (
            <TimelineItem key={entry.id} entry={entry} />
          ))}
        </div>
      </div>
    </section>
  );
}