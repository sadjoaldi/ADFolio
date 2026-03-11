import { Library, Rss, Trophy, Webhook } from "lucide-react";
import { SideProjectsProps } from "./SideProjects";

//logo, nom et description des différents projets
export const SIDE_PROJECTS: SideProjectsProps[] = [
  {
    Logo: Trophy,
    title: "Sport dashboard",
    madeWith: "ReactJS, css, typescript, API",
    description:
      "Football explorer is a project that I built using ReactJS, css, typescript, and API. It allows you to explore football data and statistics.",
    url: "https://github.com/sadjoaldi/sportdashboard",
  },
  {
    Logo: Library,
    title: "Booktome",
    madeWith: "Reactjs, Typescript, Nodejs, Expressjs, TRPC",
    description:
      "This is a project that I built using HTML, CSS, and JavaScript. It allows you to calculate the tip and the total amount of a bill.",
    url: "https://github.com/sadjoaldi/booktome",
  },
  {
    Logo: Webhook,
    title: "Mingo social media",
    madeWith:
      "Reactjs, tailwind, nodejs, expressjs, sql, mysql, docker, ci/cd, github actions",
    description:
      "Mingo is a social media platform that allows users to connect with friends, share content, and engage in discussions. It is built using ReactJS for the frontend, Tailwind CSS for styling, NodeJS and ExpressJS for the backend, SQL and MySQL for database management, Docker for containerization, and CI/CD with GitHub Actions for continuous integration and deployment.",
    url: "https://github.com/sadjoaldi/2024-12-orleans-cda-project3-team-c",
  },
  {
    Logo: Rss,
    title: "Portfolio",
    madeWith: "Next.js, Tailwind CSS",
    description:
      "This is my personal portfolio that I built using Next.js and Tailwind CSS. ",
    url: "https://web-alhassane-diallo.vercel.app/",
  },
];
