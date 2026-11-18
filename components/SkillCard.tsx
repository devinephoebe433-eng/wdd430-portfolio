interface SkillCardProps {
  skill: string;
  detail: string;
}

export default function SkillCard({ skill, detail }: SkillCardProps) {
  return (
    <article className="rounded-3xl border border-line bg-white/70 p-5 transition-colors hover:bg-lavender">
      <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-full bg-blush text-lg text-rose" aria-hidden="true">✦</div>
      <h3 className="font-display text-2xl text-ink">{skill}</h3>
      <p className="mt-2 text-sm leading-6 text-ink/70">{detail}</p>
    </article>
  );
}
