import Translation from '../translate/Translation';
import { useLanguage } from '../Context/LanguageContext';
import '../Styles/nav.css';
import { useState } from 'react';
import { BurguerButton } from './BurguerButton';
import { Link } from 'react-scroll';

export const Navbar = () => {
   const [menuOpen, setMenuOpen] = useState(false);
   const [linkActive, setLinkAntive] = useState(false);

   const handlerLink = () => setLinkAntive(!linkActive);
   const handlerClick = () => {
      setMenuOpen(!menuOpen);
   };
   const { language, toggleLanguage } = useLanguage();
   return (
      <div className="fixed w-full bg-[#05112a] h-14">
         <header className="container mx-auto w-[90%] md:w-[80%] sm:w-[90%] lg:w-[80%] flex items-center justify-between pl-0 pr-0 ">
            <h2 className="text-[2rem] font-bold z-10 pt-1 pb-1">
               KevDev<strong>.</strong>
            </h2>
            <div className="lg:hidden overflow-hidden z-10">
               <BurguerButton menuOpen={menuOpen} handlerClick={handlerClick} />
            </div>

            <div
               className={`initial bg-bur ${
                  menuOpen ? 'active' : ''
               }  lg:hidden`}
            ></div>
            <div
               className={`absolute lg:static left-[-2000px] ml-auto mr-auto text-center  bur ${
                  menuOpen ? 'active' : ''
               } gap-y-4`}
            >
               <ul className="flex flex-col gap-y-4 lg:flex-row">
                  <Link
                     to="hero"
                     className="text-white text-xl p-2 pt-1 pb-1 font-bold block lg:inline lg:mr-6 nav-link"
                     spy={true}
                     smooth={true}
                     offset={-200}
                     duration={500}
                     onClick={handlerLink}
                  >
                     <Translation translationKey="nav.home" />
                  </Link>
                  <Link
                     to="about"
                     className="text-white text-xl p-2 pt-1 pb-1  font-bold block lg:inline lg:mr-6 nav-link"
                     spy={true}
                     smooth={true}
                     offset={-90}
                     duration={500}
                  >
                     <Translation translationKey="nav.about" />
                  </Link>
                  <Link
                     to="projects"
                     className="text-white text-xl p-2 pt-1 pb-1 font-bold block lg:inline lg:mr-6 nav-link"
                     spy={true}
                     smooth={true}
                     offset={-80}
                     duration={500}
                  >
                     <Translation translationKey="nav.projects" />
                  </Link>
                  <Link
                     to="contact"
                     className="text-white text-xl p-2 pt-1 pb-1 font-bold block lg:inline lg:mr-6 nav-link"
                     spy={true}
                     smooth={true}
                     offset={40}
                     duration={500}
                  >
                     <Translation translationKey="nav.contact" />
                  </Link>
               </ul>
               <div className="flex justify-center flex-col lg:flex-row lg:hidden ">
                  <button className="theme-button flex justify-center">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                        />
                     </svg>
                  </button>
                  <button className="language-button" onClick={toggleLanguage}>
                     {language === 'en' ? 'EN' : 'ES'}
                  </button>
               </div>
            </div>
            <div className="lg:flex md:flex-row hidden ">
               <button className="language-button" onClick={toggleLanguage}>
                  {language === 'en' ? 'EN' : 'ES'}
               </button>
               <button className="theme-button">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     strokeWidth={1.5}
                     stroke="currentColor"
                     className="w-6 h-6"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                     />
                  </svg>
               </button>
            </div>
         </header>
      </div>
   );
};
