import { Film, Map, Orbit, Rss, Waypoints } from "lucide-react";
import { SideProjectsProps } from "./SideProjects";

//logo, nom et description des différents projets
export const SIDE_PROJECTS: SideProjectsProps[] = [
  // {
  //   Logo: Origami,
  //   title: "Portfolio",
  //   madeWith: "Next.js, Tailwind CSS",
  //   description:
  //     "This is my personal portfolio that I built using Next.js and Tailwind CSS.",
  //   url: "/",
  // },
  // {
  //   Logo: Shell,
  //   title: "Portfolio",
  //   madeWith: "Next.js, Tailwind CSS",
  //   description:
  //     "This is my personal portfolio that I built using Next.js and Tailwind CSS.",
  //   url: "/",
  // },
  {
    Logo: Waypoints,
    title: "BabyPlace",
    madeWith: "ReactJS, NodeJS, Express, MySQL",
    description:
      "Group project to create a daycare reservation application for parents and early childhood professionals",
    url: "https://github.com/WildCodeSchool-2023-09/JS-RemoteFR-jurascripts-P3-Babyplace",
  },
  {
    Logo: Orbit,
    title: "Tip calculator ",
    madeWith: "HTML, CSS, JavaScript",
    description:
      "This is a project that I built using HTML, CSS, and JavaScript. It allows you to calculate the tip and the total amount of a bill.",
    url: "https://github.com/sadjoaldi/tipCalc",
  },
  {
    Logo: Film,
    title: "Movies App",
    madeWith: "Next.js, Tailwind CSS",
    description:
      "Movies App is a project that I built using Next.js and Tailwind CSS. It allows you to search for movies and get information about them, and also watch trailers.",
    url: "/",
  },
  {
    Logo: Rss,
    title: "Portfolio",
    madeWith: "Next.js, Tailwind CSS",
    description:
      "This is my personal portfolio that I built using Next.js and Tailwind CSS. ",
    url: "https://web-alhassane-diallo.vercel.app/",
  },
  {
    Logo: Map,
    title: "Country",
    madeWith: "ReactJS and SCSS",
    description:
      "This is a project that I built using ReactJS and SCSS. It allows you to search for a country and get information about it.",
    url: "https://github.com/sadjoaldi/CountFind",
  },
];
