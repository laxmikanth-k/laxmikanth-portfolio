import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer.jsx';
import useScrollToTop from './hooks/useScrollToTop.jsx';

const Home = lazy(() => import('./pages/Home.jsx'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage.jsx'));
const ContactPage = lazy(() => import('./pages/ContactPage.jsx'));

function App() {
  useScrollToTop();

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-sky-500 selection:text-slate-950 overflow-x-hidden">
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-slate-300">Loading portfolio...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </main>
  );
}

export default App;
