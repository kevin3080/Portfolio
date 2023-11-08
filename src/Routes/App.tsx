import { About } from '../Components/About';
import { Contact } from '../Components/Contact';
import { Education } from '../Components/Education';
import { Inicio } from '../Components/Inicio';
import { Navbar } from '../Components/Navbar';
import { Projects } from '../Components/Projects';
import { Footer } from '../Components/Footer';

const App = () => {
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
