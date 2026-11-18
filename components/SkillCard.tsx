interface SkillCardProps {
  skill: string;
  detail: string;
}

export default function SkillCard({ skill, detail }: SkillCardProps) {
  return (
    <article className="border-l-2 border-signal pl-5">
      <h3 className="font-display text-2xl">{skill}</h3>
      <p className="mt-2 text-sm leading-6 text-ink/70">{detail}</p>
    </article>
  );
}
