import ProjectList from '@/components/ProjectList';

const projects = [
  {
    title: 'WDD 430 Portfolio',
    description: 'A responsive Next.js portfolio built for the WDD 430 course, with App Router pages, reusable TypeScript components, and a small API route.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    link: 'https://github.com/devinephoebe433-eng/wdd430-portfolio'
  },
  {
    title: 'Hello API Route',
    description: 'A focused backend exercise that exposes a typed JSON response through the Next.js App Router and documents the boundary between UI and server logic.',
    technologies: ['Next.js API Routes', 'TypeScript', 'REST'],
    link: 'https://github.com/devinephoebe433-eng/wdd430-portfolio/tree/main/app/api/hello'
  }
];

export default function Home() {
  return (
    <main>
      <section className="grid-paper border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-[1.1fr_.9fr] lg:px-8 lg:py-28">
          <div>
            <p className="mb-7 font-mono text-xs font-bold uppercase tracking-[0.25em] text-signal">Selected work · WDD 430</p>
            <h1 className="max-w-4xl font-display text-6xl leading-[0.95] tracking-tight text-ink sm:text-8xl">Ideas, made <em className="text-signal">tangible.</em></h1>
          </div>
          <div className="flex flex-col justify-end lg:pb-2">
            <p className="max-w-md text-lg leading-8 text-ink/75">A working portfolio for thoughtful interfaces, practical systems, and the small details that make digital work feel human.</p>
            <div className="mt-10 flex items-center gap-4 font-mono text-xs uppercase tracking-wider text-moss"><span className="h-px w-12 bg-signal" /> Scroll to explore</div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="mb-10 flex flex-col justify-between gap-4 border-b border-line pb-5 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-moss">01 / Selected work</p>
            <h2 className="mt-2 font-display text-4xl">Built to be useful.</h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-ink/65">Two small studies in building clear, durable web experiences.</p>
        </div>
        <ProjectList projects={projects} />
      </section>
    </main>
  );
}
