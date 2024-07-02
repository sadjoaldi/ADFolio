import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

//composant
export const ContactCard = (props: {
  image: string;
  // mediumImage: string;
  name: string;
  description: string;
  url: string;
}) => {
  return (
    <Card className="p-3 bg-accent/10 flex items-center gap-4 my-4 hover:bg-accent/30 transition-colors group">
      <div className="relative">
        <img
          src={props.image}
          alt={props.name}
          className="w-12 h-12  rounded-full"
        />
      </div>
      <div className="mr-auto">
        <p className="text-lg font-semibold">{props.name}</p>
        <Link href={props.url} target="_blank">
          <p className="text-xs text-muted-foreground w-20 mx-auto ">
            {props.description}
          </p>
        </Link>
      </div>
      <ArrowUpRight
        size={16}
        className="group-hover:translate-x-1 group-hover:-translate-y-1  transition:transform"
      />
    </Card>
  );
};
