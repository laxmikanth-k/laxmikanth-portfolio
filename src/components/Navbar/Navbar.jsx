import { NavLink, useLocation } from 'react-router-dom';
import { portfolioData } from '../../data/portfolioData.js';
import { HiOutlineMenu } from 'react-icons/hi';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const currentHash = location.hash || '';

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <NavLink to="/" className="text-lg font-semibold text-white">
          {portfolioData.personalInfo.brand}
        </NavLink>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-2xl border border-slate-800 bg-slate-900/90 px-4 py-3 text-base text-slate-300 transition hover:border-sky-500/60 hover:text-sky-300 sm:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <HiOutlineMenu className="h-5 w-5" />
          Menu
        </button>
        <nav className={`hidden flex-wrap items-center gap-8 text-sm font-medium sm:flex ${isOpen ? 'block' : ''}`}>
          {portfolioData.navLinks.map((link) => {
            // treat in-page anchors (paths like '/#experience') specially
            if (link.path.startsWith('/#')) {
              const hash = `#${link.path.split('/#')[1]}`;
              const isActive = currentHash === hash;
              return (
                <a
                  key={link.path}
                  href={link.path}
                  className={`transition ${isActive ? 'text-sky-300' : 'text-slate-400 hover:text-slate-100'}`}
                >
                  {link.label}
                </a>
              );
            }

            return (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `transition ${isActive ? 'text-sky-300' : 'text-slate-400 hover:text-slate-100'}`
                }
              >
                {link.label}
              </NavLink>
            );
          })}
        </nav>
      </div>
      {isOpen && (
        <nav className="space-y-3 border-t border-slate-800/80 bg-slate-950/95 px-4 py-4 sm:hidden">
          {portfolioData.navLinks.map((link) => {
            if (link.path.startsWith('/#')) {
              return (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-base text-slate-300 transition hover:text-sky-300"
                >
                  {link.label}
                </a>
              );
            }

            return (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block rounded-2xl px-4 py-3 text-base text-slate-300 transition hover:text-sky-300"
              >
                {link.label}
              </NavLink>
            );
          })}
        </nav>
      )}
    </header>
  );
}
