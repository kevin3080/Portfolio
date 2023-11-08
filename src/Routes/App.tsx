import { About } from '../Components/About';
import { Contact } from '../Components/Contact';
import { Education } from '../Components/Education';
import { Inicio } from '../Components/Inicio';
import { Navbar } from '../Components/Navbar';
import { Projects } from '../Components/Projects';
import { Footer } from '../Components/Footer';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../i18n/en.json';
import es from '../i18n/es.json';
import { useLanguage } from '../Context/LanguageContext';
import { useEffect } from 'react';

const App = () => {
   /*    const { language } = useLanguage();
   useEffect(() => {
      i18next.use(initReactI18next).init({
         lng: `${language ? 'en' : 'es'}`,
         interpolation: {
            escapeValue: false, // react already safes from xss
         },
         resources: {
            en: {
               translation: en,
            },
            es: {
               translation: es,
            },
         },
      });
 
     
   }, []);

   console.log(language);

   console.log(i18next); */

   return (
      <>
         <Navbar />
         <Inicio />
         <About />
         <Education />
         <Projects />
         <Contact />
         <Footer />
      </>
   );
};

export default App;
