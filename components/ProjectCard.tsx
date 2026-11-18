interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export default function ProjectCard({ title, description, technologies, link }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col border-t-2 border-ink bg-white/40 p-6 transition-all hover:-translate-y-1 hover:bg-white/70 hover:shadow-[8px_8px_0_0_#d9d0c0]">
      <div className="mb-10 flex items-start justify-between gap-4">
        <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-signal">Case study</span>
        <span className="font-mono text-xs text-moss">↗ 0{technologies.length}</span>
      </div>
      <h3 className="font-display text-3xl leading-tight text-ink">{title}</h3>
      <p className="mt-4 max-w-md text-base leading-7 text-ink/75">{description}</p>
      <div className="mt-auto pt-8">
        <p className="font-mono text-xs uppercase tracking-wide text-moss"><strong className="text-ink">Stack:</strong> {technologies.join(' · ')}</p>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="focus-ring mt-5 inline-flex items-center gap-2 border-b border-signal pb-1 text-sm font-bold text-signal transition-colors hover:border-ink hover:text-ink">
            View project <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </article>
  );
}
