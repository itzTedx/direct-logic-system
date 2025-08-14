import { Badge, BadgeDot } from "../ui/badge";

interface Props {
  title: string;
  description: string;
  badge: string;
}

export const SectionHeader = ({ title, description, badge }: Props) => {
  return (
    <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-2 md:items-center md:gap-6 lg:gap-12">
      <div className="space-y-2">
        <Badge>
          <BadgeDot />
          {badge}
        </Badge>
        <h2 className="text-pretty font-medium text-2xl leading-tight sm:text-3xl lg:text-4xl" id="section-title">
          {title}
        </h2>
      </div>
      <p
        className="text-balance text-base text-muted-foreground leading-relaxed sm:text-lg lg:text-xl"
        id="section-description"
      >
        {description}
      </p>
    </div>
  );
};
