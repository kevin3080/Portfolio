import { useLanguage } from "../Context/LanguageContext";
import author from "../assets/my-image.jpeg";
import Translation from "../translate/Translation";
import Typewriter from "typewriter-effect";
import es from "../translate/es.json";
import en from "../translate/en.json";
import { Link } from "react-scroll";
import { useState } from "react";

export const Inicio = ({ theme }: { theme: string }) => {
  const { language } = useLanguage();
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
    console.log(isActive);
  };

  const downloadCv = (lang: string) => {
    const urlCv_en: string = import.meta.env.VITE_URL_CV
    const urlCv_es: string = import.meta.env.VITE_URL_CV_ES
    if (lang === "es") {
      window.open(urlCv_es, "_blank");
    } else {
      window.open(urlCv_en, "_blank");
    }
  }

  return (
    <section
      id="hero"
      className="container lg:mb-10 mx-auto mb-24 flex justify-center h-screen items-center w-[90%] md:w-[80%] flex-col-reverse sm:w-[90%] lg:flex-row lg:w-[80%] gap-x-2"
    >
      <section
        className={`w-[55%] mt-8 lg:mt-0 flex flex-col items-center lg:items-start ${
          theme === "dark" ? "text-white" : "text-[#071739]"
        } `}
      >
        <div className=" sm:w-auto text-center lg:text-left">
          <p className="text-2xl lg:text-3xl whitespace-nowrap">
            <Translation translationKey="inicio.hi" />
          </p>
          <div
            className={`relative z-[-1] h-[5rem] w-[17rem] sm:h-auto sm:w-auto ${
              theme === "dark" ? "text-corp" : "text-[#071739]"
            }`}
          >
            {language === "en" ? (
              <h1 className="text-4xl lg:text-5xl whitespace-break-spaces">
                <Typewriter
                  options={{
                    strings: [
                      en["inicio.prof"],
                      en["inicio.prof1"],
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 32,
                    deleteSpeed: 32,
                  }}
                />
              </h1>
            ) : (
              <h1 className="text-4xl lg:text-5xl whitespace-break-spaces">
                <Typewriter
                  options={{
                    strings: [
                      es["inicio.prof"],
                      es["inicio.prof1"],
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 32,
                    deleteSpeed: 32,
                  }}
                />
              </h1>
            )}
          </div>

          <p className="text-2xl lg:text-3xl whitespace-break-spaces w-[17rem] sm:w-[29rem] lg:w-auto ">
            <Translation translationKey="inicio.p" />
          </p>
        </div>

        <div className="flex mt-8 flex-wrap gap-5 lg:gap-0 h-5 md:h-0 w-full justify-center lg:justify-normal ">
          <button 
            onClick={toggleActive}
            className={`w-30 h-[2.1rem] ${isActive ? "bg-corp text-white" : ""} ${
                theme === "dark"
                  ? "btn-resume-dark border text-corp border-corp"
                  : "border btn-resume text-themeLight border-themeLight"
              } flex items-center border-solid rounded-md  pr-4  pl-4 pt-1 pb-1 gap-1`}>
              <p className="">
                <Translation translationKey="inicio.resume" />
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
          </button>
          <button className="w-30 h-[2.1rem]">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className={`btn-portfolio flex items-center lg:ml-4 ${
                theme === "dark"
                  ? " border bg-corp border-corp"
                  : "border bg-themeLight border-themeLight text-white"
              } rounded-md  pr-4  pl-4 pt-1 pb-1 gap-1`}
            >
              <p className="">
                <Translation translationKey="inicio.portfolio" />
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </Link>
          </button>
          <div className={`absolute ${isActive ? "flex" : "hidden"} ml-[-8rem] gap-2 bottom-[-0.8rem] sm:bottom-[1.5rem] md:bottom-[-1.5rem] lg:bottom-[9.5rem] lg:ml-[-4.5rem]`}>
          <button 
            onClick={() => downloadCv('es')}
            className={`w-25 ${
                theme === "dark"
                  ? "btn-resume-dark border text-corp border-corp"
                  : "border btn-resume text-themeLight border-themeLight"
              } flex items-center border-solid rounded-md  pr-4  pl-4 pt-1 pb-1 gap-1`}
          >
            CV - Español
            </button>
          <button 
            onClick={() => downloadCv('en')}
            className={`w-30 text-nowrap ${
                theme === "dark"
                  ? "btn-resume-dark border text-corp border-corp"
                  : "border btn-resume text-themeLight border-themeLight"
              } flex items-center border-solid rounded-md  pr-4  pl-4 pt-1 pb-1 gap-1`}>CV - English</button>
        </div>
        </div>
        
      </section>
      <div className="w-60 h-60 md:w-80 md:h-80 lg:w-95 lg:h-95 rounded-3xl overflow-hidden mt-[3rem] lg:mt-0 ">
        <img src={author} alt="" className="object-cover h-full w-full" />
      </div>
    </section>
  );
};
