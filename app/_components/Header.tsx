import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Section from "./Section";
import DevIcon from "./icons/Dev";
import GithubIcon from "./icons/GithubIcon";
import LinkedIn from "./icons/LinkedIn";

const Header = () => {
  return (
    <header className="sticky top-0 py-4">
      <Section className="flex items-baseline">
        <h1 className="text-lg font-bold text-primary">Alhassane D</h1>
        <div className="flex-1" />
        <ul className="flex items-center gap-2">
          <Link
            href="https://github.com/sadjoaldi"
            target="_blank"
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            <GithubIcon className="text-foreground" size={12} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/alhassanedialloo/"
            target="_blank"
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            <LinkedIn className="text-foreground" size={12} />
          </Link>
          <Link
            href="https://dev.to/sadjoaldi"
            target="_blank"
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            <DevIcon className="text-foreground" size={12} />
          </Link>
        </ul>
      </Section>
    </header>
  );
};

export default Header;
