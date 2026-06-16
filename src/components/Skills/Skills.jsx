import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../Common/SectionWrapper.jsx';
import { portfolioData } from '../../data/portfolioData.js';

export default function Skills() {
  const categories = portfolioData.skills.map((skill) => skill.category);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const activeSkills = useMemo(
    () => portfolioData.skills.find((skill) => skill.category === activeCategory)?.items ?? [],
    [activeCategory]
  );

  return (
    <SectionWrapper id="skills" title={portfolioData.skillsSectionTitle}>
      <div className="mb-8 flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
              activeCategory === category
                ? 'border-sky-400 bg-sky-500/10 text-sky-200'
                : 'border-slate-800 bg-slate-900/80 text-slate-300 hover:border-slate-600 hover:text-white'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {activeSkills.map((skill) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="glass-card border-slate-800/80 p-6"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                <p className="mt-1 text-sm uppercase tracking-[0.24em] text-slate-400">{skill.level}</p>
              </div>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300 shadow-inner shadow-slate-950/30">
                {skill.progress}%
              </span>
            </div>

            <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-800/70">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.progress}%` }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
              />
            </div>

            <p className="mt-5 text-sm leading-6 text-slate-300">{skill.description}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
