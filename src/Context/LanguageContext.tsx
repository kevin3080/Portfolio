import { createContext, useState, useContext } from 'react';
import { LanguageContextProps, LanguageProviderProps } from '../Interfaces';

const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

export const LangageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(prevLanguage => (prevLanguage === 'en' ? 'es' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLenguage must be used within a LanguageProvider');
  }

  return context;
};
