import { cn } from "@/lib/utils";
import { Experience } from "@/types/experience";
import { Separator } from "../../ui/separator";
import BulletList from "../../ui/bullet-list";

export default function ExperienceCard({
  ref,
  onClick,
  className,
  data,
}: {
  ref: React.Ref<HTMLDivElement>;
  onClick: () => void;
  className: string;
  data: Experience;
}) {
  return (
    <div
      ref={ref}
      onClick={onClick}
      className={cn(
        "w-88 shrink-0 snap-center rounded-xl outline-1 outline-offset-5 outline-indigo-400 bg-card p-6 text-card-foreground shadow-sm cursor-pointer transition-all duration-300 ease-out",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-xl font-semibold">{data.role}</h3>
      </div>
      <p className="text-indigo-400 font-semibold text-sm mt-1">
        {data.company}
        {data.industry ? ` · ${data.industry}` : ""}
      </p>
      <p className="text-muted-foreground text-xs mt-1 mb-2">{data.period}</p>
      <Separator />
      <ul className="mt-4 space-y-2 list-disc list-inside text-sm text-muted-foreground">
        {data.achievements.map((achievement: string) => (
          <li key={achievement} className="list-none">
            <BulletList>{achievement}</BulletList>
          </li>
        ))}
      </ul>
    </div>
  );
}
