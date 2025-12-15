import cvData from '@/app/data/cvData';
import { Zap, Heart } from 'lucide-react';

const { softSkills, hobbies } = cvData;

export default function SoftSkillsHobbies() {
  return (
    <section id="softskills-hobbies" className="py-12">
      
      <h2 className="text-3xl font-bold mb-8 text-text-light dark:text-text-dark border-b border-text-light/50 dark:border-text-dark/50 pb-2 text-center">
        Soft Skills & Interessi
      </h2>

      {/* Contenitore a due colonne per desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* COLONNA 1: SOFT SKILLS */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
            <Zap className="w-6 h-6 mr-2 text-blue-500" />
            Soft Skills
          </h3>
          
          <div className="flex flex-wrap gap-3">
            {softSkills.map((skill) => (
              <span 
                key={skill.name} 
                className="px-4 py-2 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-lg font-medium shadow-sm transition-transform hover:scale-105"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
        
        {/* COLONNA 2: HOBBY E INTERESSI */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
            <Heart className="w-6 h-6 mr-2 text-red-500" />
            Hobby e Interessi
          </h3>
          
          <div className="space-y-4">
            {hobbies.map((hobby) => (
              <div key={hobby.name} className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md border-l-4 border-red-400">
                <p className="font-bold text-gray-900 dark:text-white">{hobby.name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {hobby.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}