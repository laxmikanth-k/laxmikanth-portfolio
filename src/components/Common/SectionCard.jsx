import { motion } from 'framer-motion';

export default function SectionCard({ title, subtitle, details, badge, link }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="w-full rounded-3xl border border-slate-800/80 bg-slate-900/90 p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-glow"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          {title && <h3 className="text-xl font-semibold text-white">{title}</h3>}
          {subtitle && <p className="mt-2 text-sm text-slate-400">{subtitle}</p>}
        </div>
        {badge && <span className="rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-sky-300">{badge}</span>}
      </div>
      {details && (
        <div className="mt-5 space-y-3 text-slate-300">
          {Array.isArray(details)
            ? details.map((item) => (
                <p key={item} className="text-sm leading-7">
                  {item}
                </p>
              ))
            : <p className="text-sm leading-7">{details}</p>}
      </div>
      )}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-sky-300 transition hover:text-white"
        >
          View project
        </a>
      )}
    </motion.article>
  );
}
