import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../Common/SectionWrapper.jsx';
import { portfolioData } from '../../data/portfolioData.js';
import ProjectCard from './ProjectCard.jsx';

const filterOptions = [
  'All',
  'Enterprise',
  'Web Application',
  'AI / Media',
  'AI / Computer Vision',
  'Machine Learning',
  'Blockchain',
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    const q = search.trim().toLowerCase();
    return portfolioData.projects.filter((project) => {
      const matchesFilter = activeFilter === 'All' || project.category === activeFilter;
      const inTitle = project.title.toLowerCase().includes(q);
      const inCategory = project.category.toLowerCase().includes(q);
      const inTags = project.tags.join(' ').toLowerCase().includes(q);
      const matchesSearch = q === '' || inTitle || inTags || inCategory || project.summary.toLowerCase().includes(q);
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, search]);

  return (
    <SectionWrapper id="projects" title={`${portfolioData.projectsSectionTitle} (${portfolioData.projects.length})`}>
      <div className="grid gap-6">
        <div className="flex flex-col gap-4 rounded-[2rem] border border-slate-800/80 bg-slate-900/80 p-6 shadow-soft md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-3">
            {filterOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setActiveFilter(opt)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition duration-300 ${
                  activeFilter === opt
                    ? 'bg-sky-500 text-slate-950 shadow-lg shadow-sky-500/20'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <input
              aria-label="Search projects"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search projects by name, tech or category..."
              className="w-full rounded-full border border-slate-700 bg-slate-950/90 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} onOpen={setSelectedProject} />
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-slate-950/80 px-4 py-10 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-3xl rounded-2xl border border-slate-800 bg-slate-900/95 p-8 shadow-2xl"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-sky-300/90">{selectedProject.category}</p>
                <h2 className="mt-2 text-3xl font-semibold text-white">{selectedProject.title}</h2>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="rounded-full border border-slate-700 bg-slate-950/90 px-4 py-2 text-sm text-slate-200 transition hover:border-sky-500 hover:text-sky-300"
              >
                Close
              </button>
            </div>

            <p className="mt-4 text-slate-300">{selectedProject.summary}</p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {selectedProject.details.map((d) => (
                <div key={d} className="rounded-xl border border-slate-800/90 bg-slate-950/90 p-4 text-slate-200">
                  <p>{d}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {selectedProject.tags.map((t) => (
                <span key={t} className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-xs text-slate-300">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {selectedProject.demoLink && (
                <a href={selectedProject.demoLink} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400">
                  Open Live Demo
                </a>
              )}
              <a href={selectedProject.repo && selectedProject.repo !== 'Add Placeholder' ? selectedProject.repo : '#'} target="_blank" rel="noreferrer" className={`inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/90 px-5 py-3 text-sm font-semibold text-slate-100 transition ${selectedProject.repo && selectedProject.repo !== 'Add Placeholder' ? 'hover:border-sky-400 hover:text-sky-300' : 'opacity-60 cursor-not-allowed'}`}>
                View GitHub
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </SectionWrapper>
  );
}
