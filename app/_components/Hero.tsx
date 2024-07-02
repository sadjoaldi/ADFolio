/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";
import Section from "./Section";

// code qui permet de mettre en valeur le texte
const Code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => {
  return (
    <span
      className={cn(
        "bg-accent/30 font-mono border border-accent p-1 m-1  text-xs rounded-sm text-primary hover:bg-accent/50 transition-colors duration-300 ease-in-out",
        className
      )}
      {...props}
    />
  );
};
// const Code2 = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => {
//   return (
//     <span
//       className={cn(
//         "bg-accent/30 font-mono border border-accent p-1 m-1  text-xs rounded-sm text-primary hover:bg-accent/50 transition-colors duration-300 ease-in-out",
//         className
//       )}
//       {...props}
//     />
//   );
// };

const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-center">
      <div className="flex-[3] flex-col gap-2">
        <h2 className="text-5xl font-caption text-primary">Alhassane Diallo</h2>
        <h3 className="text-3xl font-caption">Web developer</h3>
        <p>
          Hi! I m Alhassane Diallo a web developer based in Tours, French. I
          specialize in building websites and web applications using modern
          technologies like <Code>html</Code>, <Code>css</Code>,
          <Code>Scss</Code>, <Code> Tailwind CSS </Code>,{" "}
          <Code>JavaScript</Code>, <Code>React</Code>, <Code>Next.js</Code>,{" "}
          <Code>NodeJS</Code>, <Code>ExpressJS</Code>, <Code>SQL</Code>,{" "}
          <Code>MySql</Code>.
        </p>
      </div>
      <div className="w-72 h-fit group">
        <div className="flex-[2] max-md:m-auto ml-auto relative ">
          <img
            src="https://avatars.githubusercontent.com/u/118755025?v=4"
            alt="photo profile Alhassane Diallo"
            className="w-full h-auto   rounded-full max-w-xs max-md:w-28 cursor-pointer rotate-12 "
          />
          <div className="absolute h-full rounded-full w-full bg-black/20 flex justify-center items-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-500 cursor-pointer">
            <div className="text text-sm py-4 px-8 w-full ">
              <h2>Alhassane Diallo</h2>
              <p>Web developer Frontend</p>
              <p>06 95 30 38 41</p>
              <p>alsannealdi@hotmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
