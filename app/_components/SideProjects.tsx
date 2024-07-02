import { LucideIcon } from "lucide-react";
import Link from "next/link";

//composant SideProjects permettant de générer les différents projets
export type SideProjectsProps = {
  Logo: LucideIcon;
  title: string;
  madeWith: string;
  description: string;
  url: string;
};
export const SideProjects = (props: {
  Logo: LucideIcon;
  title: string;
  madeWith: string;
  description: string;
  url: string;
}) => {
  return (
    <Link
      href={props.url}
      target="_blank"
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded "
    >
      <div className="bg-accent text-accent-foreground p-3 rounded-sm">
        <props.Logo size={24} />
      </div>
      <div>
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-lg font-semibold">{props.madeWith}</p>
        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
    </Link>
  );
};
