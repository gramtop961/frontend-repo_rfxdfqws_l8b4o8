import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Database, Server } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative w-full bg-slate-950 py-24 text-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.08),transparent_50%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <h2 className="text-3xl font-bold md:text-4xl">About</h2>
          <p className="mt-3 max-w-2xl text-slate-300">
            I’m a full‑stack developer focusing on Python, Django, and modern front‑ends. I love
            turning complex systems into elegant products and weaving a clear story from concept to
            launch.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: User, title: 'Human‑centered', body: 'Design with empathy, craft with precision.' },
            { icon: Code, title: 'Clean Code', body: 'Readable, well‑tested and maintainable.' },
            { icon: Database, title: 'Data‑driven', body: 'Architect for scale and observability.' },
            { icon: Server, title: 'End‑to‑end', body: 'From REST APIs to CI/CD and cloud.' },
          ].map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <item.icon className="mb-4 text-teal-300" />
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
