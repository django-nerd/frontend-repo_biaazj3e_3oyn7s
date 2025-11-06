import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DemoSection from './components/DemoSection';
import HowItWorks from './components/HowItWorks';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Navbar />
      <Hero />
      <DemoSection />
      <HowItWorks />
      <footer className="border-t border-slate-200 dark:border-slate-800 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-slate-600 dark:text-slate-300">© {new Date().getFullYear()} Plan AI — Built for hackathons and investor demos.</p>
          <div className="flex flex-wrap gap-3">
            <a href="#demo" className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-500 text-white">Run Live Demo</a>
            <a href="#feedback" className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700">Request Pitch</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
