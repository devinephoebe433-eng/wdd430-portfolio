import ProjectCard from './ProjectCard';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

interface ProjectListProps {
  projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <section aria-labelledby="selected-work" className="grid gap-8 md:grid-cols-2">
      <h2 id="selected-work" className="sr-only">Selected work</h2>
      {projects.map((project) => <ProjectCard key={project.title} {...project} />)}
    </section>
  );
}
