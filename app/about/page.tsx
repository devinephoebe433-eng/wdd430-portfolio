import SkillCard from '@/components/SkillCard';

const skills = [
  { skill: 'Frontend craft', detail: 'Accessible web interfaces with clear hierarchy, responsive behavior, and thoughtful visual details.' },
  { skill: 'Backend foundations', detail: 'Node.js services, Express routes, MongoDB-backed APIs, and Swagger documentation.' },
  { skill: 'Always learning', detail: 'A steady practice of learning through web development coursework and hands-on software projects.' }
];

export default function About() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-start">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-white/70 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-plum"><span className="text-rose">✦</span> 02 / About Devine</p>
          <h1 className="mt-7 font-display text-6xl leading-none sm:text-8xl">Make it clear.<br /><em className="text-rose">Make it matter.</em></h1>
          <p className="mt-10 max-w-2xl text-xl leading-9 text-ink/70">I&apos;m <strong className="text-ink">Devine Phoebe Nabugobero</strong>, a software developer who enjoys reading, travelling, and discovering so much more along the way. I&apos;m building my skills through practical web development, APIs, and software projects.</p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-ink/65">My public GitHub profile shares a simple reminder that guides me: <em>&ldquo;Life with Christ has a meaning.&rdquo;</em></p>
        </div>
        <aside className="rounded-[2rem] border border-line bg-white/75 p-7 shadow-soft">
          <img src="https://avatars.githubusercontent.com/u/230410023?v=4" alt="Devine Phoebe's GitHub profile avatar" className="h-20 w-20 rounded-full border-4 border-blush object-cover" />
          <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-rose">A little more about me</p>
          <dl className="mt-5 space-y-4 text-sm">
            <div><dt className="font-bold text-plum">Focus</dt><dd className="mt-1 text-ink/70">Software development and the web</dd></div>
            <div><dt className="font-bold text-plum">Affiliation</dt><dd className="mt-1 text-ink/70">BYU-Idaho</dd></div>
            <div><dt className="font-bold text-plum">Enjoys</dt><dd className="mt-1 text-ink/70">Reading, travelling, and learning</dd></div>
          </dl>
          <a href="https://github.com/devinephoebe433-eng" target="_blank" rel="noopener noreferrer" className="focus-ring mt-7 inline-flex rounded-full bg-plum px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-rose">Visit my GitHub ↗</a>
        </aside>
      </div>

      <section aria-labelledby="approach" className="mt-24 grid gap-10 border-t border-line pt-8 md:grid-cols-[.75fr_1.25fr]">
        <div><p className="font-mono text-xs uppercase tracking-[0.2em] text-rose">Approach</p><h2 id="approach" className="mt-3 font-display text-4xl">Small steps.<br />Strong foundations.</h2></div>
        <div className="grid gap-5 sm:grid-cols-3">{skills.map((item) => <SkillCard key={item.skill} {...item} />)}</div>
      </section>
    </main>
  );
}
