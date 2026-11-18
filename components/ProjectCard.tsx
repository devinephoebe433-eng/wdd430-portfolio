interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export default function ProjectCard({ title, description, technologies, link }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-[2rem] border border-line bg-white/75 p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(116,61,104,.18)] sm:p-8">
      <div className="mb-10 flex items-start justify-between gap-4">
        <span className="rounded-full bg-blush px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-plum">Case study</span>
        <span className="font-mono text-xs text-gold">↗ 0{technologies.length}</span>
      </div>
      <h3 className="font-display text-3xl leading-tight text-ink">{title}</h3>
      <p className="mt-4 max-w-md text-base leading-7 text-ink/70">{description}</p>
      <div className="mt-auto pt-8">
        <p className="font-mono text-xs uppercase tracking-wide text-plum/75"><strong className="text-ink">Stack:</strong> {technologies.join(' · ')}</p>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="focus-ring mt-5 inline-flex items-center gap-2 rounded-full bg-plum px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-rose">
            View project <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </article>
  );
}
