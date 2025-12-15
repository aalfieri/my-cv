'use client'; 

import { ThemeProvider, ThemeProviderProps } from "next-themes";
import React from "react";

// Definisco un'interfaccia che unisce i props di ThemeProvider con i children di React.
interface CustomThemeProviderProps extends ThemeProviderProps {
  children: React.ReactNode;
}

export default function Providers({ children, ...props }: CustomThemeProviderProps) {
  
  return (
    <ThemeProvider {...props}>
      {children}
    </ThemeProvider>
  );
}