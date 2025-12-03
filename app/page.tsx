import Header from '@/components/Header'; 
import cvData from '@/app/data/cvData';   

const { personal, education, experience, hardSkills, projects } = cvData;

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      
      {/* 1. SEZIONE HEADER */}
      <Header personalData={personal} />

      {/* 2. AREA PRINCIPALE DEL CV */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Other..(Istruzione, Esperienza, ecc.) */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8">
          Prossima Sezione: Timeline
        </h2>

      </main>
      
      {/* Footer */}
      <footer className="py-4 text-center text-sm text-gray-500 dark:text-gray-600 border-t border-gray-100 dark:border-gray-800">
        Costruito con Next.js, TypeScript e Tailwind CSS. Codice disponibile su GitHub.
      </footer>
    </div>
  );
}