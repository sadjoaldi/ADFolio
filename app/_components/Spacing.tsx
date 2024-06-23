import { cn } from "@/lib/utils";

export type SpacingProps = {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
};
const Spacing = ({ size = "md" }: SpacingProps) => {
  return (
    <div
      className={cn({
        "h-8 lg:h-16": size === "sm",
        "h-16 lg:h-24": size === "md",
        "h-24 lg:h-32": size === "lg",
      })}
    ></div>
  );
};

export default Spacing;
