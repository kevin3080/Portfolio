import { ReactNode } from 'react';

export interface Projects {
  id: number;
  image: string;
  title: string;
  description: string;
  technology: string[];
  UriDemo: string;
  UriRepo: string;
}

export interface LanguageContextProps {
  language: string;
  toggleLanguage: () => void;
}

export interface LanguageProviderProps {
  children: ReactNode;
}

export interface TranslationProps {
  translationKey: string;
}

export interface Translations {
  [key: string]: string;
}
