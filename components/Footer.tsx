'use client';

import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full mt-16 py-8 bg-block-alt dark:bg-dark-block border-t border-base-light dark:border-dark-base">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm text-text-light dark:text-text-dark">
          &copy; {currentYear} Andrea Alfieri. Tutti i diritti riservati.
        </p>
        <p className="text-xs text-text-light/80 dark:text-text-dark/80 mt-2">
          Realizzato con Next.js, TypeScript e Tailwind CSS. Design ispirato al minimalismo moderno.
        </p>
        <div className="mt-4">
          <a 
            href="#top" 
            className="text-accent dark:text-dark-accent hover:underline text-sm font-medium"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Torna su
          </a>
        </div>
      </div>
    </footer>
  );
}