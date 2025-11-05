import React from 'react';
import { Github } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Simple sticky navigation */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#home" className="font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-teal-300 to-blue-400 bg-clip-text text-transparent">Innovator.dev</span>
          </a>
          <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a className="hover:text-white" href="#about">About</a>
            <a className="hover:text-white" href="#projects">Projects</a>
            <a className="hover:text-white" href="#contact">Contact</a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-1.5 text-slate-200 transition hover:border-white/20"
            >
              <Github size={16} /> GitHub
            </a>
          </div>
        </nav>
      </header>

      {/* Sections */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-950/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 text-sm text-slate-400">
          <p>© {new Date().getFullYear()} Innovator.dev — Crafted with Python, Django, and a love for stories.</p>
          <a href="#home" className="hover:text-slate-200">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
};

export default App;
