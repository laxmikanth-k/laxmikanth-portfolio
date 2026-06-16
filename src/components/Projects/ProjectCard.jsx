import { motion } from 'framer-motion';

export default function ProjectCard({ project, onOpen }) {
  const isCompleted = project.status === 'Completed';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="group h-full overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/80 p-6 shadow-soft transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
    >
      <div className="flex h-full flex-col justify-between">
        <div>
          <div className="flex items-center justify-between">
            <p className="text-xs uppercase tracking-wider text-sky-300">{project.category}</p>
            <div className="flex items-center gap-3">
              <span
                className={`flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ${
                  isCompleted
                    ? 'bg-emerald-600/10 text-emerald-300 ring-1 ring-emerald-500/20'
                    : 'bg-yellow-500/10 text-amber-300 ring-1 ring-amber-500/20'
                }`}
              >
                <span
                  className={`inline-block h-2.5 w-2.5 rounded-full ${
                    isCompleted ? 'bg-emerald-300' : 'bg-amber-300 animate-pulse'
                  }`}
                />
                {isCompleted ? 'Status: Completed' : 'Status: In Progress'}
              </span>
            </div>
          </div>

          <h3 className="mt-4 text-xl font-semibold text-white">{project.title}</h3>
          <p className="mt-3 text-sm text-slate-300">{project.summary}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-slate-800/60 bg-slate-950/50 px-3 py-1 text-xs text-slate-200 transition-transform duration-200 group-hover:translate-y-[-2px]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          {project.demoLink ? (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
            >
              Live Demo
            </a>
          ) : null}

          <a
            href={project.repo && project.repo !== 'Add Placeholder' ? project.repo : '#'}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/90 px-4 py-2 text-sm font-semibold transition ${
              project.repo && project.repo !== 'Add Placeholder' ? 'text-slate-100 hover:border-sky-400 hover:text-sky-300' : 'text-slate-500 cursor-not-allowed opacity-60'
            }`}
          >
            GitHub Repository
          </a>

          <button
            onClick={() => onOpen(project)}
            className="ml-auto inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/90 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-sky-400 hover:text-sky-300"
          >
            Details
          </button>
        </div>
      </div>
    </motion.div>
  );
}
