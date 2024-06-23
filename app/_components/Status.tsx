/* eslint-disable @next/next/no-img-element */
import { Card } from "@/components/ui/card";
import {
  ArrowUpRight,
  Film,
  LucideIcon,
  Map,
  Orbit,
  Origami,
  Rss,
  Shell,
  Waypoints,
} from "lucide-react";
import Link from "next/link";
import Section from "./Section";

export default function Status() {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full">
        <Card className="w-full p-4 flex-col gap-2">
          <p className="text-lg text-muted-foreground">Side, Fun Projects</p>
          <div className="flex flex-col gap-4">
            {SIDE_PROJECTS.map((project, idx) => (
              <SideProjects
                key={idx}
                Logo={project.Logo}
                title={project.title}
                description={project.description}
                url={project.url}
              />
            ))}
          </div>
        </Card>
      </div>
      <div className="flex-[2] w-full flex flex-col  gap-4">
        <Card className="p-4 flex-1">
          <p className="text-lg text-muted-foreground">Work</p>
          <div className="flex flex-col gap-4">
            {WORKS.map((work, idx) => (
              <Work
                key={idx}
                image={work.image}
                title={work.title}
                role={work.role}
                date={work.date}
                url={work.url}
              />
            ))}{" "}
          </div>
        </Card>
        <Card className="p-4 flex-1">
          <p className="text-lg text-muted-foreground">contact me</p>
          <ContactCard
            image="https://avatars.githubusercontent.com/u/118755025?v=4"
            mediumImage="https://avatars.githubusercontent.com/u/118755025?v=4"
            name="Alhassane Diallo"
            description="Software Developer"
            url="/"
          />
          <ContactCard
            image="https://avatars.githubusercontent.com/u/118755025?v=4"
            mediumImage="https://avatars.githubusercontent.com/u/118755025?v=4"
            name="Alhassane Diallo"
            description="Software Developer"
            url="/"
          />
        </Card>
      </div>
    </Section>
  );
}

//composant
const ContactCard = (props: {
  image: string;
  mediumImage: string;
  name: string;
  description: string;
  url: string;
}) => {
  return (
    <Card className="p-3 bg-accent/10 flex items-center gap-4">
      <div className="relative">
        <img
          src={props.image}
          alt={props.name}
          className="w-12 h-12 object-contain rounded-full"
        />
        <img
          src={props.mediumImage}
          alt={props.name}
          className="w-8 h-8 object-contain rounded-full absolute -bottom-1 -right-1"
        />
      </div>
      <div className="mr-auto">
        <p className="text-lg font-semibold">{props.name}</p>
        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
      <ArrowUpRight size={16} />
    </Card>
  );
};

//contenu Contactcaard precedent:
{
  /* <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded "
    >
      <span className="bg-accent text-accent-foreground p-3 rounded-sm">
        <props.Logo />
      </span>
      <div>
        <p className="text-lg font-semibold">{props.title}</p>
      </div>
      <div>
        <p className="text-xl ">{props.description}</p>
      </div>
    </Link> */
}

//logo, nom et description des différents projets
const SIDE_PROJECTS: SideProjectsProps[] = [
  {
    Logo: Origami,
    title: "Portfolio",
    description:
      "This is my personal portfolio that I built using Next.js and Tailwind CSS.",
    url: "/",
  },
  {
    Logo: Shell,
    title: "Portfolio",
    description:
      "This is my personal portfolio that I built using Next.js and Tailwind CSS.",
    url: "/",
  },
  {
    Logo: Waypoints,
    title: "Portfolio",
    description:
      "This is my personal portfolio that I built using Next.js and Tailwind CSS.",
    url: "/",
  },
  {
    Logo: Orbit,
    title: "Portfolio",
    description:
      "This is my personal portfolio that I built using Next.js and Tailwind CSS.",
    url: "/",
  },
  {
    Logo: Film,
    title: "Portfolio",
    description:
      "This is my personal portfolio that I built using Next.js and Tailwind CSS.",
    url: "/",
  },
  {
    Logo: Rss,
    title: "Portfolio",
    description:
      "This is my personal portfolio that I built using Next.js and Tailwind CSS.",
    url: "/",
  },
  {
    Logo: Map,
    title: "Country",
    description:
      "This is my personal portfolio that I built using Next.js and Tailwind CSS.",
    url: "/",
  },
];

//composant SideProjects permettant de générer les différents projets
type SideProjectsProps = {
  Logo: LucideIcon;
  title: string;
  description: string;
  url: string;
};
export const SideProjects = (props: {
  Logo: LucideIcon;
  title: string;
  description: string;
  url: string;
}) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded "
    >
      <span className="bg-accent text-accent-foreground p-3 rounded-sm">
        <props.Logo size={24} />
      </span>
      <div>
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
    </Link>
  );
};

//logo, nom, description, date et url des différents projets
const WORKS: WorksProps[] = [
  {
    image: "https://avatars.githubusercontent.com/u/118755025?v=4",
    title: "Portfolio",
    role: "This is my personal portfolio that I built using Next.js and Tailwind CSS.",
    date: "2023 - 2024",
    url: "/",
  },
  {
    image: "https://avatars.githubusercontent.com/u/118755025?v=4",
    title: "Portfolio",
    role: "This is my personal portfolio that I built using Next.js and Tailwind CSS.",
    date: "2024 - 2024",
    url: "/",
  },
  {
    image: "https://avatars.githubusercontent.com/u/118755025?v=4",
    title: "Portfolio",
    role: "This is my personal portfolio that I built using Next.js and Tailwind CSS.",
    date: "2024 - 2024",
    url: "/",
  },
];

//typage des props de Work
type WorksProps = {
  image: string;
  title: string;
  role: string;
  url: string;
  date: string;
};
//composant Work qui permet de générer les différents projets
export const Work = (props: {
  image: string;
  title: string;
  role: string;
  url: string;
  date: string;
}) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded "
    >
      <span className="bg-accent text-accent-foreground px-3 rounded-sm">
        {" "}
        <img
          src={props.image}
          alt={props.title}
          className="w-12 h-12 object-contain rounded-sm"
        />
      </span>
      <div className="mr-auto">
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.role}</p>
      </div>
      <div className=" ml-auto">
        <p className="text-sm > text-muted-foreground">{props.date}</p>
      </div>
    </Link>
  );
};
