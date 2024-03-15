import Translation from "../translate/Translation";
import { useLanguage } from "../Context/LanguageContext";
import "../Styles/nav.css";
import { useState } from "react";
import { BurgerButton } from "./BurgerButton";

import { Link } from "react-scroll";

interface NavbarProps {
  handleChangeTheme: () => void;
  theme: string;
}

export const Navbar = ({ handleChangeTheme, theme }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handlerClick = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => setMenuOpen(false);

  const { language, toggleLanguage } = useLanguage();
  return (
    <nav
      className={`fixed w-full ${
        theme === "dark" ? "bg-[#05112a]" : "bg-[#fff]"
      }  h-14`}
    >
      <header
        className={` ${
          theme === "dark" ? "text-white" : "text-[#071739]"
        } container mx-auto w-[90%] md:w-[80%] sm:w-[90%] lg:w-[80%] flex items-center justify-between pl-0 pr-0`}
      >
        <Link
          className="z-20"
          to="hero"
          spy={true}
          smooth={true}
          offset={-200}
          duration={500}
        >
          <h2 className="text-[2rem] font-bold  pt-1 pb-1">
            KevDev<strong>.</strong>
          </h2>
        </Link>

        <div className="lg:hidden overflow-hidden z-20">
          <BurgerButton menuOpen={menuOpen} handlerClick={handlerClick} />
        </div>

        <div
          className={`initial ${
            theme === "dark" ? "bg-[#071739]" : "bg-[#FFFFFF]"
          } bg-bur ${menuOpen ? "active" : ""}  lg:hidden`}
        ></div>
        <div
          className={`absolute lg:static left-[-2000px] ml-auto mr-auto text-center  bur ${
            menuOpen ? "active" : ""
          } gap-y-4`}
        >
          <ul className="flex flex-col gap-y-4 lg:flex-row">
            <Link
              to="hero"
              className="text-lg p-2 pt-1 pb-1 font-bold block lg:inline lg:mr-6 nav-link"
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
              onClick={closeMenu}
            >
              <Translation translationKey="nav.home" />
            </Link>
            <Link
              to="about"
              className="text-lg p-2 pt-1 pb-1 font-bold block lg:inline lg:mr-6 nav-link"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              onClick={closeMenu}
            >
              <Translation translationKey="nav.about" />
            </Link>
            <Link
              to="projects"
              className="text-lg p-2 pt-1 pb-1 font-bold block lg:inline lg:mr-6 nav-link"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={closeMenu}
            >
              <Translation translationKey="nav.projects" />
            </Link>
            <Link
              to="contact"
              className="text-lg p-2 pt-1 pb-1 font-bold block lg:inline lg:mr-6 nav-link"
              spy={true}
              smooth={true}
              offset={60}
              duration={500}
              onClick={closeMenu}
            >
              <Translation translationKey="nav.contact" />
            </Link>
          </ul>
          <div className="flex justify-center flex-col lg:flex-row lg:hidden">
            <button
              className={`${
                theme === "dark" ? "theme-button-dark" : "theme-button"
              }  flex justify-center`}
              onClick={handleChangeTheme}
            >
              {theme === "dark" ? (
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
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#071739"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                />
              </svg>
            )}
            </button>
            <button
              className={`${
                theme === "dark" ? "theme-button-dark" : "theme-button"
              }`}
              onClick={toggleLanguage}
            >
              {language === "en" ? "EN" : "ES"}
            </button>
          </div>
        </div>
        <div className="lg:flex md:flex-row hidden">
          <button
            className={`${
              theme === "dark" ? "theme-button-dark" : "theme-button"
            }`}
            onClick={toggleLanguage}
          >
            <span className="text-base">{language === "en" ? "EN" : "ES"}</span>
          </button>
          <button
            className={`${
              theme === "dark" ? "theme-button-dark" : "theme-button"
            }`}
            onClick={handleChangeTheme}
          >
            {theme === "dark" ? (
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
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#071739"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                />
              </svg>
            )}
          </button>
        </div>
      </header>
    </nav>
  );
};
