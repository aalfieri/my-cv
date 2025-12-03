
// =========================================================
// INTERFACCE (STRUTTURA DEI DATI)
// =========================================================

// 1. HEADER & PRESENTAZIONE
export interface PersonalData {
  name: string;
  role: string;
  presentation: string;
  email: string;
  linkedin: string;
  github: string;
}

// 2. ISTRUZIONE E FORMAZIONE
export interface Education {
  id: number;
  institution: string;
  degree: string;
  yearRange: string;
  description?: string;
  isCurrent?: boolean;
}

// 3. ESPERIENZA LAVORATIVA (NUOVA SEZIONE)
export interface Experience {
  id: number;
  company: string;
  role: string;
  yearRange: string;
  description: string;
  technologiesUsed: string[];
}

// 4. COMPETENZE
export interface Skill {
  name: string;
  category: "Linguaggi di Programmazione" | "Frameworks & Librerie" | "IDE e Editor" | "Ambiente Collaborativo e Tools";
  level: 'Advanced' | 'Intermediate' | 'Basic'; 
}

// 5. PROGETTI
export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  isFeatured: boolean;
}

// 6. SOFT SKILL
export interface SoftSkill {
  name: string;
}

// 7. HOBBY E INTERESSI
export interface Hobby {
  name: string;
  icon?: string;
  description: string;
}


// =========================================================
// DATI DEL CV
// =========================================================

export const cvData = {
  personal: {
    name: "Andrea Alfieri",
    role: "Web Developer Junior",
    presentation: "Ho 26 anni e sono neo-laureato al Corso di Laurea in Informatica, presso Università degli Studi di Salerno. Appassionato di informatica già da piccolo, mi sono posto di fare della mia passione il mio lavoro. Lo scoutismo mi ha insegnato che nulla è impossibile. Mi reputo una persona precisa e responsabile, dotato di ottime doti relazionali e con buone capacità di gestione del tempo.",
    email: "a.alfieri9@libero.it",
    linkedin: "www.linkedin.com/in/andrea-alfieri-942405232",
    github: "https://github.com/aalfieri"
  } as PersonalData,

  education: [
    {
      id: 1,
      institution: "Università degli Studi di Salerno - Dipartimento di Informatica",
      degree: "Laurea Triennale in Informatica",
      yearRange: "2019 - 2025",
      description: "Tesi su LLMs e API deprecate: ricerca di chiamate ad API deprecate nei codici generati dal modello LLM StarCoder2 ",
      isCurrent: false,
    },

    {
        id: 2,
        institution: "I.T.I.S. Basilio Focaccia - Salerno",
        degree: "Diploma di Perito Informatico",
        yearRange: "2013 - 2018",
        description: "Diploma di Perito Informatico con votazione 70/100.",
        isCurrent: false,
    }
  ] as Education[],
  
  experience: [
    {
        id: 1,
        company: "Fornace De Martino SRL",
        role: "Operaio addetto al taglio di cotto",
        yearRange: "Settembre 2022 - Maggio 2025",
        description: "Addetto al taglio del cotto utilizzando la WaterJet (macchina a controllo numerico CNC).",
        technologiesUsed: ["MagicTool", "LogoTag", "AutoCAD"],
    },
  ] as Experience[],

  hardSkills: [
    { name: "C", category: "Linguaggi di Programmazione", level: "Intermediate" }, 
    { name:"Java", category: "Linguaggi di Programmazione", level: "Intermediate" },  
    { name: "HTML", category: "Linguaggi di Programmazione", level: "Advanced" },
    { name: "CSS", category: "Linguaggi di Programmazione", level: "Advanced" },
    { name: "Python", category: "Linguaggi di Programmazione", level: "Basic" },
    { name: "SQL", category: "Linguaggi di Programmazione", level: "Intermediate" },
    { name: "JavaScript", category: "Linguaggi di Programmazione", level: "Intermediate" },
    { name: "TypeScript", category: "Linguaggi di Programmazione", level: "Intermediate" },
    { name: "Next.js", category: "Frameworks & Librerie", level: "Intermediate" },
    { name: "Tailwind CSS", category: "Frameworks & Librerie", level: "Intermediate" },
    { name: "Eclipse", category: "IDE e Editor", level: "Advanced" },
    { name: "VS Code", category: "IDE e Editor", level: "Advanced" },
    { name: "Xcode", category: "IDE e Editor", level: "Basic" },
    { name: "Git / GitHub", category: "Ambiente Collaborativo e Tools", level: "Advanced" },
  ] as Skill[],

  projects: [
    {
      id: 101,
      title: "Portfolio Professionale",
      description: "Interfaccia utente interamente sviluppata con Next.js e Tailwind CSS.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      githubUrl: "github.com/aalfieri/my-cv",
      liveDemoUrl: undefined, 
      isFeatured: true,
    },

    {
        id: 102,
        title: "LLMs e API deprecate",
        description: "Progetto di tesi in cui ho verificato se il modello LLM StarCoder2 genera codice che utilizza API deprecate e verifica se nei dati di training vi sono chiamate ad API deprecate.",
        technologies: ["Python", "StarCoder2"],
        githubUrl: undefined,
        liveDemoUrl: undefined,
        isFeatured: true,
    },

    {
      id: 103,
      title: "Wizard Component",
      description: "Wizard Component è un e-commerce creato per la vendita di componenti hardware del PC. All'interno è presente un database per la gestione degli ordini, account e prodotti",
      technologies: ["JSON", "HTML", "CSS","Java", "JavaScript", "SQL"],
      githubUrl: "https://github.com/aalfieri/wizard.git",
      liveDemoUrl: undefined, 
      isFeatured: false,
    }
  ] as Project[],

  softSkills: [
    { name: "Problem Solving" },
    { name: "Gestione del Tempo" },
    { name: "Lavoro di Squadra" },
    { name: "Affidabile e autonomo" },
  ] as SoftSkill[],

  hobbies: [
    { name: "Educatore AGESCI", description: "Seguo ragazzi dai 10 ai 15 anni nel mondo scout" },
    { name: "Viaggiare in moto", description: "" },
    { name: "Apple addicted", description: "Appassionato fin da piccolo, rimango aggiornato sempre sulle ultime novità di casa Apple" },
    { name: "Assemblaggio PC", description: "Costruisco PC personalizzati per me e per amici" },
  ] as Hobby[],
};

export default cvData;