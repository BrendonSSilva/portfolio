import React, { createContext, useContext, useState } from 'react';

interface ContextType {
  themeColor: string;
  setThemeColor: React.Dispatch<React.SetStateAction<string>>;
}

const CharContext = createContext<ContextType | undefined>(undefined);

const useCharContext = () => {
  const context = useContext(CharContext);
  if (!context) {
    throw new Error('useCharContext must be used within a CharProvider');
  }
  return context;
};

interface CharProviderProps {
  children: React.ReactNode;
}

const CharProvider: React.FC<CharProviderProps> = ({ children }) => {
  const [themeColor, setThemeColor] = useState('');

  return (
    <CharContext.Provider value={{ themeColor, setThemeColor }}>
      {children}
    </CharContext.Provider>
  );
};

export { CharProvider, useCharContext };