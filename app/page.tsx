import Header from '@/components/Header';
import Timeline from '@/components/Timeline';
import SkillsGrid from '@/components/SkillsGrid';
import ProjectsSection from '@/components/ProjectsSection';
import SoftSkillsHobbies from '@/components/SoftSkillsHobbies'; 
import Footer from '@/components/Footer'; 
import cvData from '@/app/data/cvData';

const { personal } = cvData;

// Componente Wrapper per un blocco di sezione con sfondo e margini
const SectionWrapper = ({ children, bgColorClass = 'bg-white dark:bg-gray-800' }: { children: React.ReactNode, bgColorClass?: string }) => (
    <div className={`mt-12 p-8 sm:p-10 rounded-xl shadow-xl transition-colors duration-300 ${bgColorClass}`}>
        {children}
    </div>
);


export default function Home() {
  return (
    // Sfondo generale: base-light | dark-base (definiti in tailwind.config.js)
    <div id="top" className="min-h-screen bg-base-light dark:bg-dark-base transition-colors duration-300">
      
      {/* 1. HEADER (Blocco Principale) */}
      <Header personalData={personal} />

      {/* CLASSE text-center: Centra tutto il contenuto (testi, blocchi) */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center">
        
        {/* 2. TIMELINE: Esperienza e Formazione - Colore Principale Blocchi (scuro) */}
        <SectionWrapper bgColorClass="bg-block-main dark:bg-dark-block text-base-light dark:text-text-dark">
          <Timeline /> 
        </SectionWrapper>
        
        {/* 3. COMPETENZE: Blocco Alternato (chiaro) */}
        <SectionWrapper bgColorClass="bg-block-alt dark:bg-dark-block text-text-light dark:text-text-dark">
          <SkillsGrid />
        </SectionWrapper>

        {/* 4. PROGETTI: Torna al Colore Principale Blocchi (scuro) */}
        <SectionWrapper bgColorClass="bg-block-main dark:bg-dark-block text-base-light dark:text-text-dark">
          <ProjectsSection /> 
        </SectionWrapper>
        
        {/* 5. SOFT SKILLS E HOBBY: Blocco Alternato (chiaro) */}
        <SectionWrapper bgColorClass="bg-block-alt dark:bg-dark-block text-text-light dark:text-text-dark">
          <SoftSkillsHobbies /> 
        </SectionWrapper>

      </main>
      
      {/* 6. FOOTER */}
      <Footer />
    </div>
  );
}