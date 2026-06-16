import { motion } from 'framer-motion';
import SectionWrapper from '../Common/SectionWrapper.jsx';
import { portfolioData } from '../../data/portfolioData.js';

export default function Experience() {
  return (
    <SectionWrapper id="experience" title={portfolioData.experienceSectionTitle}>
      <div className="relative mx-auto grid max-w-4xl gap-10">
        <div className="absolute left-5 top-0 h-full w-1 rounded-full bg-slate-800 md:left-1/2 md:translate-x-1/2" />
        {portfolioData.experience.map((item, index) => (
          <motion.div
            key={`${item.role}-${item.company}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative grid gap-6 overflow-hidden rounded-[2rem] border border-slate-800/80 bg-slate-900/80 p-6 shadow-soft md:grid-cols-[1fr_1fr]"
          >
            <div className="absolute left-1 top-6 hidden h-6 w-6 -translate-x-1/2 rounded-full border border-slate-700 bg-slate-950 md:block" />
            <div className="space-y-4">
              <div className="text-sky-300">{item.date}</div>
              <h3 className="text-2xl font-semibold text-white">{item.role}</h3>
              <p className="text-sm uppercase tracking-[0.28em] text-slate-400">{item.company} • {item.location}</p>
              <ul className="space-y-2 text-slate-300">
                {item.responsibilities.map((task) => (
                  <li key={task} className="flex gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-400" />
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-5 rounded-[1.75rem] border border-slate-800/90 bg-slate-950/90 p-6 shadow-glow">
              <h4 className="text-lg font-semibold text-white">Achievement highlights</h4>
              <ul className="space-y-3 text-slate-300">
                {item.achievements.map((achievement) => (
                  <li key={achievement} className="rounded-3xl border border-slate-800/80 bg-slate-900/80 p-4">
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
