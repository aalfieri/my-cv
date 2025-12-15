import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect esegue il codice solo dopo che il componente è stato montato sul client.
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Ritorna un placeholder finché il componente non è pronto
    return <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700"></div>; 
  }

  // Funzione per il toggle del tema
  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full text-gray-700 bg-gray-100 hover:bg-gray-200 dark:text-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-300 shadow-md"
      aria-label="Toggle Dark Mode"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  );
}