import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiLinkedin } from 'react-icons/fi';
import { SiGithub, SiJavascript, SiSpringboot, SiReact, SiNodedotjs, SiMysql } from 'react-icons/si';
import { portfolioData } from '../../data/portfolioData.js';

const iconMap = {
  Java: SiJavascript,
  'Spring Boot': SiSpringboot,
  React: SiReact,
  'Node.js': SiNodedotjs,
  MySQL: SiMysql,
};

export default function Hero() {
  const { personalInfo, hero, socialLinks } = portfolioData;
  const [activeText, setActiveText] = useState('Java');
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [stackIndex, setStackIndex] = useState(0);

  useEffect(() => {
    const currentWord = hero.techStack[stackIndex % hero.techStack.length];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        if (displayedText === currentWord) {
          setTimeout(() => setIsDeleting(true), 800);
        }
      } else {
        setDisplayedText(currentWord.slice(0, displayedText.length - 1));
        if (displayedText === '') {
          setIsDeleting(false);
          setStackIndex((prev) => prev + 1);
        }
      }
    }, isDeleting ? 80 : 120);

    return () => clearTimeout(timeout);
  }, [displayedText, hero.techStack, isDeleting, stackIndex]);

  useEffect(() => {
    setActiveText(hero.techStack[stackIndex % hero.techStack.length]);
  }, [stackIndex, hero.techStack]);

  return (
    <section className="relative min-h-screen overflow-hidden px-4 pt-24 pb-10 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-hero-radial opacity-90" aria-hidden="true" />
      <div className="absolute left-1/4 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" aria-hidden="true" />
      <div className="absolute right-10 top-32 h-56 w-56 rounded-full bg-secondary/15 blur-3xl" aria-hidden="true" />
      <div className="absolute left-10 bottom-24 h-44 w-44 rounded-full bg-accent/20 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto flex min-h-[calc(100vh-96px)] max-w-6xl flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-glow backdrop-blur-xl sm:p-12 lg:p-16"
        >
          <span className="inline-flex items-center rounded-full border border-sky-500/40 bg-sky-500/10 px-4 py-2 text-xs uppercase tracking-[0.32em] text-sky-200">
            {personalInfo.greeting}
          </span>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl xl:text-6xl">
            {personalInfo.name}
          </h1>
          <p className="mt-3 text-xl font-medium text-slate-200 sm:text-2xl">{personalInfo.title}</p>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            {personalInfo.summary}
          </p>

          <div className="mt-10 rounded-3xl border border-slate-800/80 bg-slate-900/80 p-5 text-slate-200 shadow-soft sm:p-6">
            <p className="text-sm uppercase tracking-[0.28em] text-sky-300/80">Tech stack</p>
            <div className="mt-3 flex flex-wrap items-center gap-3 text-lg font-semibold text-white">
              <span>{displayedText || activeText}</span>
              <span className="animate-pulse">|</span>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={hero.resumeLink}
              target="_blank"
              rel="noreferrer"
              className="accent-btn w-full justify-center sm:w-auto"
            >
              {hero.resumeLabel}
            </a>
            <Link
              to="/projects"
              className="inline-flex w-full items-center justify-center rounded-3xl border border-slate-800 bg-slate-900/90 px-6 py-3 text-base font-semibold text-white transition hover:border-sky-500/70 sm:w-auto"
            >
              {personalInfo.ctaLabel}
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-4 text-sm text-slate-300">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-3xl border border-slate-800/80 bg-slate-900/90 px-4 py-3 transition hover:border-sky-500/70 hover:text-white"
            >
              <SiGithub className="h-5 w-5 text-slate-200" /> GitHub
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-3xl border border-slate-800/80 bg-slate-900/90 px-4 py-3 transition hover:border-sky-500/70 hover:text-white"
            >
              <FiLinkedin className="h-5 w-5 text-slate-200" /> LinkedIn
            </a>
          </div>
        </motion.div>

        <div className="pointer-events-none absolute inset-x-0 bottom-10 flex justify-center">
          <a
            href="#about"
            className="group inline-flex items-center gap-3 rounded-full border border-slate-700/80 bg-slate-900/90 px-5 py-3 text-sm text-slate-300 transition hover:border-sky-500/80 hover:text-white"
          >
            <span className="h-3 w-3 rounded-full bg-sky-400 animate-bounce" />
            {hero.mousePrompt}
          </a>
        </div>

        <div className="pointer-events-none absolute right-0 top-20 hidden h-full w-[280px] lg:block">
          <div className="relative h-full w-full">
            {hero.techStack.map((tech, index) => {
              const Icon = iconMap[tech];
              return (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: [0, -12, 0], x: [0, 8, 0] }}
                  transition={{ duration: 5, delay: index * 0.2, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
                  className={`absolute ${
                    index === 0
                      ? 'top-10 left-10'
                      : index === 1
                      ? 'top-32 right-8'
                      : index === 2
                      ? 'top-1/2 left-16'
                      : index === 3
                      ? 'bottom-36 right-14'
                      : 'bottom-16 left-10'
                  } flex h-16 w-16 items-center justify-center rounded-3xl border border-slate-800/90 bg-slate-900/90 shadow-glow`}
                >
                  {Icon ? <Icon className="h-8 w-8 text-slate-100" /> : <span className="text-sm text-slate-100">{tech}</span>}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
