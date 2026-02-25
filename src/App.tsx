/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'motion/react';
import { 
  ArrowUpRight, 
  Github, 
  Linkedin, 
  Mail, 
  Code2, 
  Cpu, 
  ChevronDown,
  Layers,
  Zap,
  Shield,
  FileText,
  Award,
  BookOpen,
  Calendar,
  ExternalLink,
  Monitor,
  Terminal,
  Database,
  Globe
} from 'lucide-react';
import { PROJECTS, SKILLS, EXPERIENCES, CERTIFICATIONS, SOCIAL_LINKS } from './constants';
import { useRef, useEffect } from 'react';
import { ParticlesBackground } from './components/ParticlesBackground';

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.05], [1, 0.95]);

  // Parallax background effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { damping: 50, stiffness: 200 });
  const springY = useSpring(mouseY, { damping: 50, stiffness: 200 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const moveX = (clientX - window.innerWidth / 2) / 50;
      const moveY = (clientY - window.innerHeight / 2) / 50;
      mouseX.set(moveX);
      mouseY.set(moveY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const resumeUrl = "https://drive.google.com/file/d/1WgLcLJ0Dmk4LEBfDIlZpuCsQaMw3NWn2/view?usp=sharing";

  return (
    <div ref={containerRef} className="relative min-h-screen bg-bg text-white selection:bg-accent selection:text-white">
      <ParticlesBackground />
      
      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl">
        <div className="glass px-8 py-4 rounded-full flex justify-center items-center">
          <div className="flex gap-12">
            {['Work', 'About', 'Skills', 'Contact'].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-[11px] uppercase tracking-[0.2em] font-bold hover:text-accent transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center px-6 overflow-hidden pt-20">
        <motion.div 
          style={{ opacity, scale, x: springX, y: springY }}
          className="text-center z-10"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mb-10 inline-block"
          >
            <span className="glass px-6 py-2 rounded-full text-[11px] uppercase tracking-[0.4em] text-accent font-bold border-accent/20">
              B.Tech Artificial Intelligence @ SRM IST
            </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-6xl md:text-[9rem] font-bold leading-none mb-12 tracking-tighter"
          >
            N MANISH <br />
            <span className="text-gradient">DHARSHAN</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-muted max-w-2xl mx-auto text-xl leading-relaxed mb-16 font-medium"
          >
            Passionate AI student focused on building practical, user-focused applications 
            through computer vision, IoT, and full-stack development.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap justify-center gap-8"
          >
            <a 
              href={resumeUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary flex items-center gap-3"
            >
              <FileText className="w-5 h-5 text-accent" />
              <span>View Resume</span>
            </a>
            <a 
              href="#work" 
              className="btn-primary"
            >
              Explore Projects
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="mt-20"
          >
            <ChevronDown className="w-6 h-6 text-accent animate-bounce mx-auto" />
          </motion.div>
        </motion.div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-sm uppercase tracking-[0.4em] text-accent mb-4 font-bold">Portfolio</h2>
          <p className="text-5xl font-bold">Featured Projects</p>
          <div className="w-20 h-1 bg-accent mx-auto mt-8 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              <div className="glass p-10 rounded-[2.5rem] glass-hover h-full flex flex-col">
                <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center mb-8 border-accent/20 group-hover:bg-accent/10 transition-colors">
                  {project.id === 'gym-assistant' ? <Monitor className="w-8 h-8 text-accent" /> : <Layers className="w-8 h-8 text-accent" />}
                </div>
                <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                <p className="text-muted leading-relaxed mb-8 flex-grow font-medium">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-widest text-accent glass px-4 py-1.5 rounded-full border-accent/10 font-bold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About & Experience Section */}
      <section id="about" className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-sm uppercase tracking-[0.4em] text-accent font-bold">About Me</h2>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-[10px] uppercase tracking-widest text-emerald-500 font-bold">Open for Opportunities</span>
              </div>
            </div>
            <p className="text-4xl md:text-6xl font-bold leading-tight mb-10">
              Building <span className="text-accent">intelligent</span> solutions for real-world problems.
            </p>
            <p className="text-muted leading-relaxed mb-12 text-lg font-medium">
              I am a motivated AI student with a strong foundation in computer science concepts 
              and a passion for building practical applications. I continuously seek 
              opportunities to grow as a software developer and contribute to innovative projects.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: Zap, title: 'AI & ML', desc: 'Computer vision and predictive models.' },
                { icon: Layers, title: 'IoT', desc: 'Hardware-software integration.' },
                { icon: Shield, title: 'Full Stack', desc: 'End-to-end web applications.' },
                { icon: Code2, title: 'Algorithms', desc: 'Efficient problem solving.' },
              ].map((item, i) => (
                <div key={i} className="glass p-8 rounded-3xl border-white/5">
                  <item.icon className="w-6 h-6 text-accent mb-6" />
                  <h4 className="text-sm font-bold mb-3 uppercase tracking-widest">{item.title}</h4>
                  <p className="text-xs text-muted leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-12">
            <div>
              <h2 className="text-sm uppercase tracking-[0.4em] text-accent mb-8 font-bold">Experience</h2>
              {EXPERIENCES.map((exp, i) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass p-10 rounded-[2.5rem] glass-hover"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h4 className="text-2xl font-bold mb-2">{exp.role}</h4>
                      <p className="text-xs font-mono text-accent uppercase tracking-[0.2em] font-bold">{exp.company}</p>
                    </div>
                    <span className="text-[11px] font-mono text-muted font-bold">{exp.period}</span>
                  </div>
                  <p className="text-sm text-muted leading-relaxed font-medium">{exp.description}</p>
                </motion.div>
              ))}
            </div>

            <div>
              <h2 className="text-sm uppercase tracking-[0.4em] text-accent mb-8 font-bold">Certifications</h2>
              <div className="space-y-4">
                {CERTIFICATIONS.map((cert, i) => (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="glass p-6 rounded-2xl flex items-center gap-6 border-white/5"
                  >
                    <div className="w-12 h-12 glass rounded-xl flex items-center justify-center border-accent/20">
                      <Award className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-widest mb-1">{cert.title}</h4>
                      <p className="text-xs text-muted font-medium">{cert.issuer} • {cert.date}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-sm uppercase tracking-[0.4em] text-accent mb-4 font-bold">Technical Arsenal</h2>
          <p className="text-5xl font-bold">Skills & Expertise</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Terminal, label: 'Languages', items: SKILLS.filter(s => s.category === 'Frontend') },
            { icon: Cpu, label: 'Frameworks', items: SKILLS.filter(s => s.category === 'Backend') },
            { icon: BookOpen, label: 'Concepts', items: SKILLS.filter(s => s.category === 'Design') },
            { icon: Database, label: 'Tools', items: SKILLS.filter(s => s.category === 'Tools') },
          ].map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 glass rounded-[2.5rem] border-white/5"
            >
              <div className="w-12 h-12 glass rounded-xl flex items-center justify-center mb-8 border-accent/20">
                <cat.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl mb-6 font-bold uppercase tracking-widest">{cat.label}</h3>
              <ul className="space-y-3">
                {cat.items.map(skill => (
                  <li key={skill.name} className="text-sm text-muted flex items-center gap-3 font-medium">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    {skill.name}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto glass p-12 md:p-24 rounded-[4rem] relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />
          <h2 className="text-sm uppercase tracking-[0.4em] text-accent mb-10 font-bold">Initiate Connection</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start text-left">
            <div>
              <p className="text-4xl md:text-6xl font-bold leading-tight mb-8">
                Let's build something <span className="text-accent">extraordinary</span> together.
              </p>
              <p className="text-muted text-lg mb-12 font-medium">
                Whether you have a question or just want to say hi, my inbox is always open.
              </p>
              
              <div className="flex flex-col gap-6">
                <a 
                  href={SOCIAL_LINKS.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center justify-center gap-3 w-full sm:w-fit"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Schedule Meeting</span>
                </a>
                <div className="flex gap-6">
                  {[
                    { icon: Github, href: SOCIAL_LINKS.github },
                    { icon: Linkedin, href: SOCIAL_LINKS.linkedin },
                    { icon: Mail, href: `mailto:${SOCIAL_LINKS.email}` }
                  ].map((social, i) => (
                    <a 
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 glass rounded-full flex items-center justify-center hover:border-accent/50 hover:bg-accent/10 transition-all"
                    >
                      <social.icon className="w-5 h-5 text-muted hover:text-accent transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <form 
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const email = formData.get('email');
                const message = formData.get('message');
                window.location.href = `mailto:${SOCIAL_LINKS.email}?subject=Portfolio Contact from ${email}&body=${message}`;
              }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-accent font-bold ml-4">Your Email</label>
                <input 
                  name="email"
                  type="email" 
                  required
                  placeholder="hello@example.com"
                  className="w-full glass px-6 py-4 rounded-2xl focus:outline-none focus:border-accent/50 transition-all font-medium"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-accent font-bold ml-4">Your Message</label>
                <textarea 
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full glass px-6 py-4 rounded-2xl focus:outline-none focus:border-accent/50 transition-all font-medium resize-none"
                />
              </div>
              <button type="submit" className="btn-secondary w-full flex items-center justify-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col items-center md:items-start gap-3">
            <p className="text-sm font-bold text-accent tracking-[0.3em] uppercase">N MANISH DHARSHAN</p>
            <p className="text-[11px] text-muted uppercase tracking-[0.2em] font-bold">SRM IST • CLASS OF 2027</p>
          </div>
          <div className="flex gap-12 text-[11px] uppercase tracking-[0.2em] text-muted font-bold">
            <a href="#" className="hover:text-accent transition-colors">Privacy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms</a>
            <a href="#" className="hover:text-accent transition-colors">Connect</a>
          </div>
          <div className="text-[11px] text-muted uppercase tracking-[0.2em] text-right font-bold">
            Built with <br /> <span className="text-white">React & Tailwind</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
