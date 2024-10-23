import Translation from "../translate/Translation";
import {
  Css,
  Express,
  Html,
  JavaScript,
  Laravel,
  Liverwire,
  Nextjs,
  Node,
  Php,
  React,
  ReactNative,
  Sass,
  Tailwind,
  Typescript,
  Vue,
} from "./stacks";

export const About = ({theme} : {theme: string}) => {
  return (
    <section
      id="about"
      className="container  mx-auto w-[90%] md:w-[80%] sm:w-[90%] lg:w-[65%]"
    >
      <h2 className="text-center mt-10 text-4xl font-bold">
        <Translation translationKey="about.me" />
        <strong className="font-bold">.</strong>
      </h2>

      <section className="mt-7">
        <div className="flex flex-col items-center text-xl">
          <p className="">
            <Translation
              style="text-wrap"
              translationKey="about.px"
            />
         </p>
{/*
            <Translation translationKey="about.p" />
          </p>
           <p className="">
            <Translation translationKey="about.p1" />
          </p>
          <p className="">
            <Translation translationKey="about.p2" />
          </p> */}
        </div>
      </section>
      <section className=" flex flex-col items-center">
        <section className=" mt-4 w-[90%] md:w-[80%] sm:w-[90%] lg:w-[70%]">
          <h3 className="text-left font-bold text-2xl ">
            <Translation translationKey="about.tech" />
          </h3>
          {/* <ul className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-2"> */}
          <ul className="mt-3 grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-5">
            <Html />
            <Css />
            <JavaScript />
            <React />
            <ReactNative />
            <Typescript />
            <Sass />
            <Tailwind />
            {/* <Bootstrap/> */}
            {/* <Mui/> */}
            <Nextjs theme={theme} />
            {/* <Nestjs/> */}
            <Node />
            <Express theme={theme} />
            <Php />
            <Liverwire />
            <Laravel />
            <Vue />
            {/* <Threejs/> */}
          </ul>
        </section>
      </section>
    </section>
  );
};
