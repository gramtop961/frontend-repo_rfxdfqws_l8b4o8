import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Narrative CMS with Django',
    summary:
      'A content platform combining WYSIWYG storytelling with structured data. Role‑based permissions, image pipelines, and custom editor plugins.',
    stack: ['Django', 'PostgreSQL', 'Celery', 'Tailwind'],
    links: { live: '#', repo: '#' },
  },
  {
    title: 'Realtime Insights API',
    summary:
      'Event ingestion and aggregation service with websockets for live dashboards. Focus on observability and performance.',
    stack: ['Django REST', 'Redis', 'WebSockets', 'Docker'],
    links: { live: '#', repo: '#' },
  },
  {
    title: 'Storytelling Portfolio',
    summary:
      'Interactive narrative website with 3D scenes and smooth motion. Emphasis on accessibility and responsive design.',
    stack: ['React', 'Spline', 'Framer Motion'],
    links: { live: '#', repo: '#' },
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-slate-950 py-24 text-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(45,212,191,0.08),transparent_50%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <h2 className="text-3xl font-bold md:text-4xl">Featured Projects</h2>
          <p className="mt-3 max-w-2xl text-slate-300">
            Selected work highlighting systems thinking, pragmatic engineering, and a love for
            narrative experiences.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 backdrop-blur"
            >
              <div className="relative z-10">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{p.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-3">
                  <a
                    href={p.links.live}
                    className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm transition hover:bg-white/10"
                  >
                    <ExternalLink size={16} /> Live
                  </a>
                  <a
                    href={p.links.repo}
                    className="inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-2 text-sm transition hover:border-white/20"
                  >
                    <Github size={16} /> Code
                  </a>
                </div>
              </div>
              <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-teal-400/10 blur-2xl transition-all duration-500 group-hover:bg-teal-400/20" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
