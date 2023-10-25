import Translation from '../translate/Translation';
import { useLanguage } from '../Context/LanguageContext';
import '../Styles/nav.css';
import { useState } from 'react';

export const Navbar = () => {
   const [menuOpen, setMenuOpen] = useState(false);

   const toggleMenu = () => {
      setMenuOpen(!menuOpen);
   };
   const { language, toggleLanguage } = useLanguage();
   return (
      <nav className="mx-auto container w-[10%] md:w-[80%] sm:w-[90%] lg:w-[80%]">
         <div className="flex items-center justify-between">
            <div className="navbar-brand">
               <h3 className="navbar-name">
                  KevDev<span className="font-bold">.</span>
               </h3>
            </div>
            <div className="navbar-hamburger md:hidden flex-col items-center">
               <button
                  onClick={toggleMenu}
                  className="text-gray-500 hover:text-white focus:outline-none"
               >
                  <svg
                     className="h-6 w-6"
                     fill="none"
                     stroke="currentColor"
                     viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                     ></path>
                  </svg>
               </button>
               <ul
                  className={` md:flex flex-col space-y-2 ${
                     menuOpen ? 'block' : 'hidden'
                  }`}
               >
                  <li className="">
                     <a href="">
                        <Translation translationKey="nav.home" />
                     </a>
                  </li>
                  <li className="">
                     <a href="">
                        <Translation translationKey="nav.about" />
                     </a>
                  </li>
                  <li className="">
                     <a href="">
                        <Translation translationKey="nav.projects" />
                     </a>
                  </li>
                  <li className="">
                     <a href="">
                        <Translation translationKey="nav.contact" />
                     </a>
                  </li>
               </ul>
            </div>

            <div className="navbar-controls">
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
         </div>
      </nav>
   );
};
