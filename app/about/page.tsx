import SkillCard from '@/components/SkillCard';

const skills = [
  { skill: 'Frontend craft', detail: 'Accessible React interfaces with clear hierarchy, thoughtful spacing, and responsive behavior.' },
  { skill: 'Systems thinking', detail: 'TypeScript structures that make the relationship between data, components, and routes easy to follow.' },
  { skill: 'Curiosity', detail: 'A steady practice of learning by shipping small experiments and refining what works.' }
];

export default function About() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
      <div className="max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal">02 / About</p>
        <h1 className="mt-5 font-display text-6xl leading-none sm:text-8xl">Make it clear.<br /><em className="text-signal">Make it matter.</em></h1>
        <p className="mt-10 max-w-2xl text-xl leading-9 text-ink/75">I am a full-stack developer in progress, learning how thoughtful design and dependable code can work together. This site is a living record of that practice.</p>
      </div>

      <section aria-labelledby="approach" className="mt-24 grid gap-10 border-t border-line pt-8 md:grid-cols-[.75fr_1.25fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-moss">Approach</p>
          <h2 id="approach" className="mt-3 font-display text-4xl">Small steps.<br />Strong foundations.</h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {skills.map((item) => <SkillCard key={item.skill} {...item} />)}
        </div>
      </section>
    </main>
  );
}
