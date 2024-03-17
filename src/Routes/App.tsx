import { About } from "../Components/About";
import { Contact } from "../Components/Contact";
import { Education } from "../Components/Education";
import { Inicio } from "../Components/Inicio";
import { Navbar } from "../Components/Navbar";
import { Projects } from "../Components/Projects";
import { Footer } from "../Components/Footer";
import { useEffect, useState } from "react";
import { ModalConstructDark } from "../Components/ModalConstructDark";
import { ModalConstructLight } from "../Components/ModalConstructLight";


const App = () => {
  const [isModalOpen, setModalOpen] = useState(true);
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }

    return "light";
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const updateTheme = () => {
      if (mediaQuery.matches) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    };
    mediaQuery.addEventListener("change", updateTheme);

    return () => {
      mediaQuery.removeEventListener("change", updateTheme);
    };
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    }else{
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  // Cierra la modal después de un tiempo o en respuesta a alguna acción
  useEffect(() => {
    const timeout = setTimeout(() => {
      setModalOpen(false);
    }, 8000); // Cierra la modal después de 5 segundos

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <div className="flex justify-center">
        {
          theme === "dark" ? <ModalConstructDark isModalOpen={isModalOpen} setModalOpen={setModalOpen}/> 
          : <ModalConstructLight isModalOpen={isModalOpen} setModalOpen={setModalOpen}/>
        }
      </div>
      <Navbar handleChangeTheme={handleChangeTheme} theme={theme} />
      <Inicio theme={theme} />
      <About theme={theme} />
      <Education />
      <Projects />
      <Contact />
      <Footer theme={theme} />
    </>
  );
};

export default App;
