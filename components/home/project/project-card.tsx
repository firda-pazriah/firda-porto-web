import Badge from "@/components/ui/badge";
import { Project } from "@/types/project-type";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      key={project.id}
      className="bg-accent/50 rounded-xl p-4 space-y-4 h-full outline-1 outline-offset-5"
    >
      <span className="text-indigo-400 text-sm font-semibold">
        {project.year}
      </span>
      <h1 className="font-medium text-lg">
        {project.name} |{" "}
        <span className="text-indigo-400">{project.company}</span>
      </h1>
      <p className="text-muted-foreground">{project.description}</p>
      <div className="flex gap-2 flex-wrap">
        {project.tech.map((item) => (
          <Badge key={item}>{item}</Badge>
        ))}
      </div>
    </div>
  );
}
