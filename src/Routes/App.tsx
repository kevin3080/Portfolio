import { Abaut } from '../Components/Abaut';
import { Contact } from '../Components/Contact';
import { Education } from '../Components/Education';
import { Inicio } from '../Components/Inicio';
import { Navbar } from '../Components/Navbar';
import { Projects } from '../Components/Projects';
import { Footer } from '../Components/Footer';
import { LangageProvider } from '../Context/LanguageContext';

const App = () => {
  return (
    <LangageProvider>
      <Navbar />
      <Inicio />
      <Abaut />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </LangageProvider>
  );
};

export default App;
