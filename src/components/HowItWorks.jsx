import { motion } from 'framer-motion';
import { Upload, Scan, Box, Download } from 'lucide-react';

const steps = [
  { icon: Upload, title: 'Upload', desc: 'Drag & drop your PNG/JPG/SVG blueprint.' },
  { icon: Scan, title: 'Analyze', desc: 'AI detects walls, rooms, and objects.' },
  { icon: Box, title: 'Visualize', desc: 'Explore the layout in an interactive 3D scene.' },
  { icon: Download, title: 'Export', desc: 'Download a GLTF or share the demo link.' },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">How It Works</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">Four simple steps from 2D to interactive 3D.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.07 }} className="rounded-2xl p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg">
              <s.icon className="text-indigo-600" />
              <h3 className="mt-4 font-semibold text-slate-900 dark:text-white">{s.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">{s.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 grid place-items-center">
          <div className="relative w-full max-w-3xl aspect-video rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl">
            <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop" alt="Demo thumbnail" className="w-full h-full object-cover" />
            <div className="absolute inset-0 grid place-items-center bg-black/40">
              <button className="px-5 py-2.5 rounded-full bg-white text-slate-900 font-medium shadow">Play Demo</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
