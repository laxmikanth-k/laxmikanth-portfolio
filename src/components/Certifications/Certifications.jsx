import SectionWrapper from '../Common/SectionWrapper.jsx';
import { portfolioData } from '../../data/portfolioData.js';

export default function Certifications() {
  return (
    <SectionWrapper id="certifications" title={portfolioData.certificationsSectionTitle}>
      <div className="grid gap-6 md:grid-cols-3">
        {portfolioData.certifications.map((item) => (
          <article
            key={item.title}
            className="rounded-3xl border border-slate-800/80 bg-slate-900/80 p-6 text-slate-300 shadow-soft"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{item.issuer}</p>
              </div>
              {item.status && (
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] ${
                    item.status === 'Completed'
                      ? 'bg-emerald-600/10 text-emerald-300 ring-1 ring-emerald-500/20'
                      : 'bg-yellow-500/10 text-amber-300 ring-1 ring-amber-500/20'
                  }`}
                >
                  {item.status === 'Completed' ? 'Completed' : 'In Progress'}
                </span>
              )}
            </div>
            <p className="mt-4 text-xs uppercase tracking-[0.24em] text-sky-300/80">{item.date}</p>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
