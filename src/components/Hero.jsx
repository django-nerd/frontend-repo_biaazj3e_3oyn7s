import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white/90 dark:from-slate-900/70 dark:via-slate-900/60 dark:to-slate-900/90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-28 relative">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <span className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-indigo-700 bg-indigo-100 px-3 py-1 rounded-full dark:bg-indigo-900/30 dark:text-indigo-300">Portfolio / Hackathon Ready</span>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Transform 2D Blueprints into 3D Reality.
            </h1>
            <p className="mt-6 text-lg text-slate-600 dark:text-slate-300">
              Upload floor plans and instantly visualize interactive 3D layouts. Built for live demos, judges, and investor pitch moments.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#demo" className="inline-flex items-center justify-center px-5 py-3 rounded-xl text-white bg-gradient-to-r from-indigo-600 to-violet-500 shadow-lg hover:shadow-xl transition">Live Demo</a>
              <a href="#cases" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 dark:bg-slate-800 dark:text-white dark:border-slate-700 dark:hover:bg-slate-700 transition">View Case Studies</a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-slate-900 text-white hover:opacity-90 dark:bg-white dark:text-slate-900 transition">Get the Code</a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div className="rounded-2xl bg-white/70 dark:bg-slate-800/70 p-4 shadow-sm border border-slate-200/70 dark:border-slate-700/50">
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">AI-Powered 3D</p>
              </div>
              <div className="rounded-2xl bg-white/70 dark:bg-slate-800/70 p-4 shadow-sm border border-slate-200/70 dark:border-slate-700/50">
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">Fast Visualization</p>
              </div>
              <div className="rounded-2xl bg-white/70 dark:bg-slate-800/70 p-4 shadow-sm border border-slate-200/70 dark:border-slate-700/50">
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">Designer-First UX</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
