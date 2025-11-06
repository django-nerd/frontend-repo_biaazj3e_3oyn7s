import { useEffect, useState } from 'react';
import { Github, Sun, Moon, Play, BookOpen, History, MessageSquare, LogIn } from 'lucide-react';

export default function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('pa-theme');
    if (saved === 'dark') {
      document.documentElement.classList.add('dark');
      setDark(true);
    }
  }, []);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('pa-theme', next ? 'dark' : 'light');
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-slate-900/60 border-b border-slate-200/60 dark:border-slate-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-semibold text-slate-900 dark:text-slate-100">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-500"></div>
          <span>Plan AI</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700 dark:text-slate-300">
          <a href="#home" className="hover:text-slate-900 dark:hover:text-white transition">Home</a>
          <a href="#demo" className="hover:text-slate-900 dark:hover:text-white transition flex items-center gap-1"><Play size={16}/> Demo</a>
          <a href="#how" className="hover:text-slate-900 dark:hover:text-white transition flex items-center gap-1"><BookOpen size={16}/> How It Works</a>
          <a href="#cases" className="hover:text-slate-900 dark:hover:text-white transition">Case Studies</a>
          <a href="#history" className="hover:text-slate-900 dark:hover:text-white transition flex items-center gap-1"><History size={16}/> History</a>
          <a href="#feedback" className="hover:text-slate-900 dark:hover:text-white transition flex items-center gap-1"><MessageSquare size={16}/> Feedback</a>
        </div>
        <div className="flex items-center gap-3">
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 text-white hover:opacity-90 dark:bg-white dark:text-slate-900 transition">
            <Github size={16} /> <span className="text-sm">Get the Code</span>
          </a>
          <button onClick={toggleDark} aria-label="Toggle dark mode" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition">
            {dark ? <Sun size={18} className="text-yellow-400"/> : <Moon size={18} className="text-indigo-500"/>}
          </button>
          <a href="#auth" className="inline-flex items-center gap-2 text-sm font-medium px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition">
            <LogIn size={16}/> Login
          </a>
        </div>
      </nav>
    </header>
  );
}
