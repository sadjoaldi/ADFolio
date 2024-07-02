/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

//typage des props de Work

export type WorksProps = {
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
      target="_blank"
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded "
    >
      <span className="bg-accent text-accent-foreground px-3 rounded-sm">
        {" "}
        <img
          src={props.image}
          alt={props.title}
          className="w-32 h-12 object-contain rounded-sm"
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
