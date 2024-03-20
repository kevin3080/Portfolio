import { useLanguage } from "../Context/LanguageContext";
import { coursesEn, coursesEs } from "../data/courses";
import Translation from "../translate/Translation";
import { BurgerButtonTwo } from "./BurgerButtonTwo";
import { useState } from "react";

export const Education = ({ theme }: { theme: string }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { language } = useLanguage();

  const handlerClick = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <section
      id="about"
      className="container mx-auto  w-[90%] md:w-[80%] sm:w-[90%] lg:w-[65%] mt-5"
    >
      <div className="flex items-center flex-col">
        <div
          className={`${
            theme === "light" ? "btn-portfolio-light border-themeLight" : "btn-portfolio"
          } ${
            menuOpen ? "active border-corp text-corp" : ""
          } border lg:hidden overflow-hidden flex justify-center rounded-md  mt-4 w-full`}
        >
          <button
            id="btnProjects"
            onClick={handlerClick}
            className={` flex items-center justify-between  w-full pl-4`}
          >
            <h3 className="text-2xl">
              <Translation translationKey="about.education" />
            </h3>
            <BurgerButtonTwo menuOpen={menuOpen} handlerClick={handlerClick} theme={theme} />
          </button>
        </div>
        {/* menu mobile */}
        {menuOpen && (
          <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-1 lg:hidden">
            {language === "es"
              ? coursesEs.map((course, index) => (
                  <section key={index} className="m-3">
                    <h3>{course.title}</h3>
                    <ul>
                      <li className="text-sm italic font-light">
                        {course.provider}
                      </li>
                      <li className="text-sm italic font-light">
                        {course.date}
                      </li>
                    </ul>
                  </section>
                ))
              : coursesEn.map((course, index) => (
                  <section key={index} className="m-3">
                    <h3>{course.title}</h3>
                    <ul>
                      <li className="text-sm italic font-light">
                        {course.provider}
                      </li>
                      <li className="text-sm italic font-light">
                        {course.date}
                      </li>
                    </ul>
                  </section>
                ))}
          </section>
        )}
        <div className="hidden lg:block">
          <h3 className="text-2xl ">
            <Translation translationKey="about.education" />
          </h3>
          <section className="grid grid-cols-1  sm:grid-cols-1 md:grid-cols-2 gap-1 ">
            {language === "es"
              ? coursesEs.map((course, index) => (
                  <section key={index} className="m-2">
                    <h3>{course.title}</h3>
                    <ul>
                      <li className="text-sm italic font-light">
                        {course.provider}
                      </li>
                      <li className="text-sm italic font-light">
                        {course.date}
                      </li>
                    </ul>
                  </section>
                ))
              : coursesEn.map((course, index) => (
                  <section key={index} className="m-2">
                    <h3>{course.title}</h3>
                    <ul>
                      <li className="text-sm italic font-light">
                        {course.provider}
                      </li>
                      <li className="text-sm italic font-light">
                        {course.date}
                      </li>
                    </ul>
                  </section>
                ))}
          </section>
        </div>
      </div>
    </section>
  );
};
