import { Badge, BadgeDot } from "../ui/badge";

interface Props {
  title: string;
  description: string;
  badge: string;
}

export const SectionHeader = ({ title, description, badge }: Props) => {
  return (
    <div className="grid grid-cols-2 items-center gap-4">
      <div>
        <Badge>
          <BadgeDot />
          {badge}
        </Badge>
        <h2 className="mt-4 text-pretty font-medium text-3xl">{title}</h2>
      </div>
      <p className="text-balance text-lg">{description}</p>
    </div>
  );
};
