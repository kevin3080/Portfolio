import { TranslationProps, Translations } from '../Interfaces';
import { useLanguage } from '../Context/LanguageContext';
import enTranslate from './en.json';
import esTranslate from './es.json';

const Translation: React.FC<TranslationProps> = ({ translationKey }) => {
  const { language } = useLanguage();

  const translations: Translations =
    language === 'en' ? enTranslate : esTranslate;
  const translation = translations[translationKey] || translationKey;

  return <span>{translation}</span>;
};

export default Translation;
