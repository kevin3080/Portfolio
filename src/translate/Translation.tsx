import { TranslationProps, Translations } from '../Interfaces';
import { useLanguage } from '../Context/LanguageContext';
import enTranslate from './en.json';
import esTranslate from './es.json';

const Translation: React.FC<TranslationProps> = ({ translationKey, style }) => {
  const { language } = useLanguage();

  const translations: Translations =
    language === 'en' ? enTranslate : esTranslate;
  const translation = translations[translationKey] || translationKey;

  return <span className={style}>{translation}</span>;
};

export default Translation;
