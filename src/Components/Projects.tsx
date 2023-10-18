import ProjectCard from './ProjectCard';
import projectsData from '../data/projects';

export const Projects: React.FC = () => {
  return (
    <section className="mt-5">
      <section>
        <h2 className="text-center text-4xl font-bold">
          Projects<strong className="font-bold">.</strong>
        </h2>
        <p className="text-center mt-7 text-xl">
          Anything you can <span className="text-corp">imagine</span>, you can{' '}
          <span className="text-corp">program.</span>
        </p>
      </section>
      <section className="flex justify-center flex-col flex-wrap w-[20%] md:w-[100%] lg:flex-row mt-11">
        <button className="btn-portfolio pt-1 pb-1 pl-6 pr-6 bg-corp hover:bg-transparent ml-20 lg:ml-0 border rounded-md border-corp">
          Todos
        </button>
        <button className="btn-portfolio pt-1 pb-1 pl-6 pr-6  bg-corp hover:bg-transparent ml-20 border rounded-md border-corp">
          Vanilla JS
        </button>
        <button className="btn-portfolio pt-1 pb-1 pl-6 pr-6  bg-corp hover:bg-transparent ml-20 border rounded-md border-corp">
          Movil
        </button>
        <button className="btn-portfolio pt-1 pb-1 pl-6 pr-6  bg-corp hover:bg-transparent ml-20 border rounded-md border-corp">
          React
        </button>
        <button className="btn-portfolio pt-1 pb-1 pl-6 pr-6  bg-corp hover:bg-transparent ml-20 border rounded-md border-corp">
          Frameworks
        </button>
      </section>
      <section className="flex flex-wrap justify-center mt-9">
        {projectsData.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </section>
  );
};
