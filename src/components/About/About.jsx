import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../Common/SectionWrapper.jsx';
import { portfolioData } from '../../data/portfolioData.js';

export default function About() {
  const { about } = portfolioData;
  const { profile } = about;
  const [counts, setCounts] = useState(profile.counters.map(() => 0));

  useEffect(() => {
    const intervals = profile.counters.map((counter, index) =>
      window.setInterval(() => {
        setCounts((current) =>
          current.map((value, idx) => {
            if (idx !== index) return value;
            const increment = Math.ceil(counter.value / 20);
            const next = value + increment;
            return next >= counter.value ? counter.value : next;
          })
        );
      }, 70)
    );

    return () => intervals.forEach(window.clearInterval);
  }, [profile.counters]);

  return (
    <SectionWrapper id="about" title={about.title}>
      <div className="grid gap-8 xl:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="glass-card p-8 sm:p-10"
        >
          <div className="flex flex-col items-center gap-6 rounded-[2rem] border border-slate-800/80 bg-slate-950/80 p-6 text-center shadow-soft sm:flex-row sm:text-left sm:items-start sm:p-8">
            <div className="flex h-32 w-32 items-center justify-center rounded-[1.75rem] bg-gradient-to-br from-primary/20 to-accent/20 text-4xl font-semibold text-white shadow-glow">
              {profile.profileInitials}
            </div>
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.32em] text-sky-300/80">{profile.role}</p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">{profile.name}</h2>
              <p className="text-slate-300 leading-7">{profile.headline}</p>
            </div>
          </div>

          <div className="mt-8 space-y-6">
            <p className="text-slate-300 leading-8">{profile.summary}</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {profile.strongSkills.map((skill) => (
                <div key={skill} className="rounded-3xl border border-slate-800/80 bg-slate-950/80 px-4 py-3 text-slate-100 shadow-inner shadow-slate-950/20">
                  <p className="text-sm font-medium">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            className="glass-card p-6 sm:p-8"
          >
            <h3 className="text-xl font-semibold text-white">Experience Highlights</h3>
            <ul className="mt-5 space-y-4">
              {profile.highlights.map((highlight) => (
                <li key={highlight} className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-4 text-slate-300 shadow-inner shadow-slate-950/20">
                  {highlight}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="grid gap-4 sm:grid-cols-3"
          >
            {profile.stats.map((stat) => (
              <div key={stat.label} className="glass-card p-6 text-center">
                <p className="text-3xl font-semibold text-white">{stat.value}</p>
                <p className="mt-3 text-sm uppercase tracking-[0.28em] text-slate-400 whitespace-normal break-words leading-tight">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            className="glass-card p-6 sm:p-8"
          >
            <h3 className="text-xl font-semibold text-white">Quick Counters</h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {profile.counters.map((counter, index) => (
                <div key={counter.label} className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-4 text-center shadow-inner shadow-slate-950/20">
                  <p className="text-3xl font-semibold text-sky-300">{counts[index]}</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.28em] text-slate-400 whitespace-normal break-words leading-tight">{counter.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
