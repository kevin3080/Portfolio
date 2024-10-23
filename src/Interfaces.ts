import { ReactNode } from 'react';

export interface ArrProjects {
   image: string;
   title: string;
   description: string;
   technology: string[];
   UriDemo: string;
   UriRepo: string;
}

export interface ListProjects extends ArrProjects {
   id: number;
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
   style?: string
}

export interface Translations {
   [key: string]: string;
}

export interface BurgerButtonProps {
   handlerClick: () => void;
   menuOpen: boolean;
   theme: string
}
