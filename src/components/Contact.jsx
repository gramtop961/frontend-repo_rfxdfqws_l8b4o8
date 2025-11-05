import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative w-full bg-slate-950 py-24 text-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.08),transparent_50%)]" />
      <div className="relative mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold md:text-4xl">Let’s build something meaningful</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-300">
            I’m available for collaborations, consulting, and product engineering roles. Share your
            challenge — I’ll bring the code and the story.
          </p>

          <div className="mx-auto mt-8 max-w-md rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div>
                <label className="mb-1 block text-sm text-slate-300">Name</label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full rounded-md border border-white/10 bg-slate-900/60 px-3 py-2 text-slate-100 placeholder:text-slate-500 focus:border-teal-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-slate-300">Email</label>
                <input
                  type="email"
                  required
                  placeholder="you@domain.com"
                  className="w-full rounded-md border border-white/10 bg-slate-900/60 px-3 py-2 text-slate-100 placeholder:text-slate-500 focus:border-teal-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-slate-300">Message</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell me about your project..."
                  className="w-full rounded-md border border-white/10 bg-slate-900/60 px-3 py-2 text-slate-100 placeholder:text-slate-500 focus:border-teal-400 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-teal-400 px-4 py-2 font-medium text-slate-900 shadow-lg shadow-teal-400/20 transition hover:bg-teal-300"
              >
                <Mail size={18} /> Send message
                <ArrowRight size={18} />
              </button>
              <p className="text-xs text-slate-400">Or email me at <a className="underline hover:text-slate-200" href="mailto:hello@yourdomain.dev">hello@yourdomain.dev</a></p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
