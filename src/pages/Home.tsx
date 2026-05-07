import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { SEO } from "../components/SEO";
import { ArrowRight, Code, Search, Layers, Zap, PenTool, Layout, MonitorSmartphone, Smartphone, Database, Globe, Target, Terminal, ChevronRight } from "lucide-react";

export default function Home() {
  const homeSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://nayi-manzil.vercel.app/#person",
        "name": "Hanan Irfan",
        "url": "https://nayi-manzil.vercel.app/",
        "jobTitle": "Full Stack Developer & SEO Expert",
        "sameAs": [
          "https://instagram.com/hananirfan2026",
          "https://facebook.com/HananIrfan001",
          "https://www.youtube.com/@ancientmystery-0"
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://nayi-manzil.vercel.app/#organization",
        "name": "Nayi Manzil",
        "alternateName": "New Destination",
        "url": "https://nayi-manzil.vercel.app/",
        "founder": { "@id": "https://nayi-manzil.vercel.app/#person" }
      },
      {
        "@type": "WebSite",
        "@id": "https://nayi-manzil.vercel.app/#website",
        "url": "https://nayi-manzil.vercel.app/",
        "name": "Nayi Manzil",
        "publisher": { "@id": "https://nayi-manzil.vercel.app/#organization" }
      }
    ]
  });

  return (
    <>
      <SEO 
        title="Nayi Manzil - Official Portfolio of Hanan Irfan | Web Developer & SEO Expert" 
        description="Welcome to Nayi Manzil! From struggle to success, discover the professional portfolio of Hanan Irfan, a Full Stack Developer, Next.js Expert, and Semantic SEO Specialist from Pakistan."
        schema={homeSchema}
      />
      
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/microbial-mat.png')] opacity-20 mix-blend-overlay"></div>
        <div className="container mx-auto max-w-7xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-slate-700/50 backdrop-blur-md mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-cyan-400"></span>
            <span className="text-sm font-medium text-slate-300">Available for Freelance Projects</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter"
          >
            Your New Destination to <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 drop-shadow-[0_0_30px_rgba(6,182,212,0.6)]">
              Digital Success
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed font-light"
          >
            I am <strong className="text-white">Hanan Irfan</strong>, a Full Stack Developer & SEO Expert from Pakistan. I transform complex ideas into modern, scalable, and highly optimized digital realities.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/portfolio" className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all hover:scale-105 flex items-center justify-center gap-2">
              View Projects <ArrowRight size={20} />
            </Link>
            <Link to="/connect" className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-900 border border-slate-700 text-white font-bold text-lg hover:bg-slate-800 transition-all hover:scale-105">
              Hire Me
            </Link>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-50"
        >
          <span className="text-sm text-cyan-500 mb-2 font-medium tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-cyan-500 to-transparent"></div>
        </motion.div>
      </section>

      {/* 2. Animated Intro & Brand Story */}
      <section className="py-24 relative bg-slate-950/50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">The Story of <span className="text-cyan-400">Nayi Manzil</span></h2>
              <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
                <p>
                  "Nayi Manzil" literally translates to "New Destination". It represents my journey from struggle to success. Like many developers, my path wasn't entirely smooth. I struggled to find the right opportunities, faced intensive technical challenges, and had to continuously pivot my strategies.
                </p>
                <p>
                  But through immense hard work, endless nights of coding, and a relentless passion for learning, I built my brand. Today, Nayi Manzil stands as a testament to what dedication can achieve. It is not just a portfolio; it is a creative studio delivering premium web solutions to modern businesses worldwide.
                </p>
                <p className="border-l-4 border-cyan-500 pl-4 italic text-slate-400">
                  "Every great website starts with an idea, but it takes ambition and resilience to reach the new destination." - Hanan Irfan
                </p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square md:aspect-[4/5] lg:aspect-square rounded-3xl overflow-hidden glass-panel border border-slate-800 flex items-center justify-center bg-slate-900 group"
            >
               <img 
                 src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80" 
                 alt="Hanan Irfan - Full Stack Developer Workspace and Code Environment" 
                 loading="lazy" 
                 className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-60 mix-blend-overlay"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent"></div>
               {/* Abstract representation of a journey overlaid on image */}
               <div className="relative z-10 flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full border-4 border-cyan-500/80 border-t-cyan-300 animate-spin mb-8 backdrop-blur-sm"></div>
                  <h3 className="text-2xl font-bold text-white tracking-widest uppercase mb-2">From Struggle</h3>
                  <div className="h-2 w-16 bg-cyan-500 rounded-full mb-2"></div>
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 tracking-widest uppercase">To Success</h3>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Services / Expertise */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-cyan-500 font-bold tracking-wider uppercase text-sm mb-4 block">What I Do</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Expertise & Services</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">Comprehensive digital solutions designed to elevate your brand, optimize performance, and dominate search rankings.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Code, title: "Frontend Development", desc: "Building highly interactive, responsive, and performant user interfaces using React, Next.js, and Tailwind CSS." },
              { icon: Search, title: "Technical SEO Expert", desc: "Deep optimization of Core Web Vitals, site architecture, structured data, and topical maps to dominate Google." },
              { icon: Layout, title: "UI/UX Design", desc: "Crafting beautiful, intuitive, and user-centric designs focused on conversion and modern aesthetic principles." },
              { icon: Zap, title: "Website Optimization", desc: "Drastically improving load speeds, accessibility, and overall web performance for maximum user retention." },
              { icon: Terminal, title: "Full Stack Solutions", desc: "End-to-end web application development ensuring seamless integration between client-side and backend services." },
              { icon: PenTool, title: "Brand Identity", desc: "Developing cohesive digital branding, graphic design, and visually striking marketing assets." }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900 transition-all group"
              >
                <div className="h-14 w-14 rounded-xl bg-slate-800 flex items-center justify-center mb-6 group-hover:bg-cyan-900/50 transition-colors">
                  <service.icon className="text-cyan-400 w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Statistics & Milestones */}
      <section className="py-16 border-y border-slate-800 bg-slate-900/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: "50+", label: "Projects Completed" },
              { num: "100%", label: "Client Satisfaction" },
              { num: "3+", label: "Years Experience" },
              { num: "24/7", label: "Support Available" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <h4 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-blue-600 mb-2">{stat.num}</h4>
                <p className="text-slate-400 font-medium uppercase tracking-wider text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Featured Projects Snippet */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-cyan-500 font-bold tracking-wider uppercase text-sm mb-4 block">My Portfolio</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white">Featured Work</h2>
            </div>
            <Link to="/portfolio" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium uppercase tracking-wider text-sm group">
              View All Projects <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Quick manual map of 3 top projects */}
            {[
              {
                title: "AI Tool Guide",
                desc: "A comprehensive directory for AI tools with advanced filtering and SEO optimization.",
                tech: ["Next.js", "Tailwind", "SEO"],
                url: "https://aitoolguide.vercel.app/",
                image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
              },
              {
                title: "Free Tools Hub",
                desc: "A platform offering various free web utilities, engineered for extreme performance.",
                tech: ["React", "Vite", "Performance"],
                url: "https://freetoolshub1.vercel.app/",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
              },
              {
                title: "Hi Digital Group",
                desc: "Corporate website providing digital marketing and web solutions.",
                tech: ["Next.js", "Framer Motion", "UI/UX"],
                url: "https://hidigitalgroup.vercel.app/",
                image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
              }
            ].map((project, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group block relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-all"
              >
                <div className="aspect-video bg-slate-900 p-6 flex flex-col justify-end relative overflow-hidden group">
                   <img 
                     src={project.image} 
                     alt={`${project.title} - Modern web project by Hanan Irfan`} 
                     loading="lazy" 
                     className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-60"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent"></div>
                   <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                   <h3 className="text-2xl font-bold text-white relative z-10 group-hover:-translate-y-2 transition-transform duration-300 drop-shadow-md">{project.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-slate-400 mb-6 text-sm leading-relaxed">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map(t => (
                      <span key={t} className="px-3 py-1 bg-slate-800 text-cyan-400 text-xs font-medium rounded-full">{t}</span>
                    ))}
                  </div>
                  <a href={project.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white font-medium hover:text-cyan-400 transition-colors">
                    Visit Site <ArrowRight size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5.5 UI/UX & Quality */}
      <section className="py-24 bg-slate-900 overflow-hidden relative">
        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
             <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
               <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Uncompromising <span className="text-cyan-400">UI/UX Expertise</span></h2>
               <p className="text-slate-400 text-lg leading-relaxed mb-6">
                 I don't just build websites; I engineer experiences. Leveraging <strong className="text-white">Glassmorphism</strong>, progressive web features, and <strong className="text-white">Framer Motion</strong> micro-interactions, I ensure that every user journey feels premium and engaging. 
               </p>
               <ul className="space-y-4">
                 {["Accessible Design (WCAG 2.1 AA)", "Fluid Typography & Layouts", "Dark/Light Mode Optimization", "High-Fidelity Component Architecture"].map(item => (
                   <li key={item} className="flex items-center gap-3 text-slate-300">
                     <span className="h-2 w-2 rounded-full bg-cyan-500"></span>
                     {item}
                   </li>
                 ))}
               </ul>
             </motion.div>
             <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative">
               <div className="aspect-square md:aspect-[4/3] rounded-3xl bg-slate-950 border border-slate-800 p-8 shadow-2xl relative overflow-hidden group">
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-600"></div>
                  <div className="flex gap-2 mb-8">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="w-3/4 h-8 bg-slate-900 rounded-lg animate-pulse"></div>
                    <div className="w-1/2 h-4 bg-slate-900 rounded-lg animate-pulse"></div>
                    <div className="w-full h-32 bg-cyan-900/20 border border-cyan-500/20 rounded-xl mt-8"></div>
                  </div>
               </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* 5.6 FAQs */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-400 text-lg">Clear answers to your most pressing questions about my services.</p>
          </div>
          <div className="space-y-6">
            {[
              { q: "What technologies do you use for Frontend Development?", a: "I primarily build with React 19, Next.js 15, TypeScript, and Tailwind CSS v4. For animations and micro-interactions, I utilize Framer Motion. This stack ensures the highest possible performance and scalability." },
              { q: "How do you ensure strong Technical SEO?", a: "I implement strict semantic HTML5, programmatic structural routing, advanced JSON-LD Schema markup (Organization, LocalBusiness, Breadcrumb), and prioritize passing Core Web Vitals (LCP, FID, CLS)." },
              { q: "Are you available for remote freelance work?", a: "Yes, I am currently open to select freelance projects, remote contracting, and long-term partnerships worldwide." },
              { q: "How can I contact you to start a project?", a: "The fastest way to reach me is directly through WhatsApp. You can click the floating WhatsApp button or visit my Connect page for more social links." }
            ].map((faq, i) => (
              <details key={i} className="group bg-slate-900/50 border border-slate-800 rounded-2xl p-6 open:bg-slate-900 transition-colors">
                <summary className="font-bold text-white text-lg cursor-pointer flex justify-between items-center outline-none">
                  {faq.q}
                  <ChevronRight className="transform group-open:rotate-90 transition-transform text-cyan-500" />
                </summary>
                <p className="text-slate-400 mt-4 leading-relaxed pl-2 border-l-2 border-cyan-500/50">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Advanced SEO & CTA Section */}
      <section className="py-24 relative bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="container mx-auto px-4 max-w-5xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">Ready to build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Extraordinary?</span></h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
              Whether you need a high-performance Next.js application, an unbreakable SEO strategy, or a stunning corporate rebrand, let's achieve your goals together.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/connect" className="px-10 py-5 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-xl hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] transition-all hover:-translate-y-1">
                Start Your Project
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
