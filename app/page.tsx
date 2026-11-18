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
      <section className="soft-grid overflow-hidden border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-[1.1fr_.9fr] lg:px-8 lg:py-28">
          <div className="relative z-10">
            <p className="mb-7 inline-flex items-center gap-2 rounded-full border border-line bg-white/75 px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-plum"><span className="text-rose">✦</span> Selected work · WDD 430</p>
            <h1 className="max-w-4xl font-display text-6xl leading-[0.95] tracking-tight text-ink sm:text-8xl">Thoughtful work,<br /><em className="text-rose">softer edges.</em></h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-ink/70">A professional portfolio for thoughtful interfaces, practical systems, and the details that make digital work feel personal.</p>
            <div className="mt-10 flex items-center gap-4 font-mono text-xs uppercase tracking-wider text-plum"><span className="h-px w-12 bg-rose" /> Scroll to explore</div>
          </div>
          <div className="relative flex min-h-[330px] items-center justify-center lg:min-h-0">
            <div className="petal float-soft absolute right-4 top-2 h-44 w-44 bg-blush/80 sm:h-56 sm:w-56" aria-hidden="true" />
            <div className="petal absolute bottom-6 left-6 h-28 w-28 rotate-12 bg-lavender/90" aria-hidden="true" />
            <img src="/manus-storage/async-images/92r8vwUKdMDI8HencyOmE1/image-1.webp" alt="Illustrated professional woman holding a notebook" className="lady-float absolute bottom-0 right-0 z-20 h-[21rem] w-auto max-w-[72%] object-contain drop-shadow-[0_18px_18px_rgba(116,61,104,.16)] sm:h-[24rem]" />
            <div className="relative z-10 mr-20 mt-10 max-w-xs rounded-[2rem] border border-white bg-white/80 p-7 shadow-soft backdrop-blur sm:mr-28">
              <div className="mb-8 flex items-center justify-between"><span className="font-mono text-[10px] uppercase tracking-[0.22em] text-plum">Currently learning</span><span className="text-rose">♡</span></div>
              <p className="font-display text-3xl leading-tight">Turning ideas into useful, beautiful things.</p>
              <div className="mt-7 flex items-center gap-2 text-xs font-bold text-gold"><span className="h-2 w-2 rounded-full bg-rose" /> Available for the next chapter</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="mb-10 flex flex-col justify-between gap-4 border-b border-line pb-5 sm:flex-row sm:items-end">
          <div><p className="font-mono text-xs uppercase tracking-[0.2em] text-rose">01 / Selected work</p><h2 className="mt-2 font-display text-4xl">Built with intention.</h2></div>
          <p className="max-w-xs text-sm leading-6 text-ink/65">Two small studies in building clear, durable web experiences.</p>
        </div>
        <ProjectList projects={projects} />
      </section>
    </main>
  );
}
