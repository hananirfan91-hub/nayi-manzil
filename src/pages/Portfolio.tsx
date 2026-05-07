import React from "react";
import { motion } from "motion/react";
import { SEO } from "../components/SEO";
import { ExternalLink, Github, CodeSquare, BarChart } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "AI Tool Guide",
      url: "https://aitoolguide.vercel.app/",
      category: "Full Stack & SEO",
      desc: "A massive directory platform indexing hundreds of AI tools. Engineered with Next.js for high-speed SSR, featuring complex filtering, programmatic SEO structures, and dynamic routing to capture long-tail AI search queries.",
      tech: ["Next.js", "Tailwind CSS", "Semantic SEO", "JSON-LD"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
    },
    {
      title: "Free Tools Hub",
      url: "https://freetoolshub1.vercel.app/",
      category: "Web Application",
      desc: "A central hub of utility micro-apps (calculators, formatters, generators). Focuses heavily on client-side performance, React state management, and ensuring a fast, ad-sense friendly layout.",
      tech: ["React.js", "Vite", "Responsive UI", "Algorithms"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
    },
    {
      title: "Nayi Manzil Portfolio (Legacy/V1)",
      url: "https://hananirfanportfolio.vercel.app/",
      category: "Personal Branding",
      desc: "The predecessor to this site, showcasing early mastery of animations, layout structuring, and personal brand messaging.",
      tech: ["React", "Framer Motion", "Tailwind"],
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80"
    },
    {
      title: "Hi Digital Group",
      url: "https://hidigitalgroup.vercel.app/",
      category: "Corporate Website",
      desc: "A sleek, professional agency website designed to generate B2B leads. Implements a highly accessible design system, strict Core Web Vitals optimizations, and localized SEO.",
      tech: ["Next.js", "UI/UX Design", "Lead Generation"],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
    },
    {
      title: "Nexa POS System",
      url: "https://nexapossystem.vercel.app/",
      category: "SaaS Interface",
      desc: "A conceptual frontend for a modern Point of Sale (POS) system. Features complex dashboard layouts, data visualization, and heavily interactive inventory management grids.",
      tech: ["React", "Dashboard UI", "State Management"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
    },
    {
      title: "ACM KFUEIT Chapter",
      url: "https://acm-kfueit.vercel.app/",
      category: "Organization Portal",
      desc: "Official web portal for an ACM student chapter. Focuses on an academic aesthetic, event management layouts, and fast information retrieval for students.",
      tech: ["Frontend Development", "Community Platform"],
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80"
    },
    {
      title: "Caesar 2026",
      url: "https://caesar2026.vercel.app/",
      category: "Creative Showcase",
      desc: "An experimental, highly animated dark-mode showcase pushing the limits of CSS transitions and visual storytelling on the web.",
      tech: ["CSS Animations", "Creative Coding", "WebGL"],
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80"
    },
    {
      title: "Garden Layout Tips",
      url: "https://gardenlayouttips.vercel.app/",
      category: "Niche Content Site",
      desc: "A content-heavy niche affiliate/AdSense website. Built explicitly following Google's E-E-A-T guidelines, topical mapping, and structured semantic HTML to dominate a specific gardening niche.",
      tech: ["Programmatic SEO", "Content Architecture", "AdSense Ready"],
      image: "https://images.unsplash.com/photo-1416879598555-220b8f1dca9a?w=800&q=80"
    },
    {
      title: "AI Course Platform",
      url: "https://aicoursebyhananirfan.vercel.app/",
      category: "E-Learning",
      desc: "A landing page and portal architecture for selling artificial intelligence courses. Highly optimized for conversion rate with persuasive copy and strategic CTA placements.",
      tech: ["Landing Page", "Conversion Rate Optimization"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80"
    },
    {
      title: "Quick Work IT Center",
      url: "https://quickworkitcenter.lovable.app/",
      category: "Business Website",
      desc: "Corporate IT services website built rapidly using cutting-edge AI scaffolding tools combined with manual UI/UX refinement for a local IT service center.",
      tech: ["AI Assisted", "Rapid Prototyping", "Local SEO"],
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80"
    }
  ];

  return (
    <>
      <SEO 
        title="Modern Web Developer Portfolio | Hanan Irfan | Nayi Manzil" 
        description="Explore the advanced developer portfolio of Hanan Irfan. View cutting-edge Next.js apps, SEO-optimized content sites, and premium digital agency websites."
        keywords="React Developer Portfolio, Next.js Developer Portfolio, Frontend Developer Portfolio, Best Developer Portfolio, Nayi Manzil Projects"
      />

      <section className="pt-32 pb-24 relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div className="text-center mb-20" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-white">Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Showcase</span></h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              A curated collection of web applications, corporate websites, and SEO-driven platforms engineered to perform.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 lg:gap-14">
            {projects.map((project, i) => (
              <motion.div 
                key={project.url}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: (i % 2) * 0.1 }}
                className="group flex flex-col"
              >
                {/* Visual Card */}
                <a href={project.url} target="_blank" rel="noopener noreferrer dofollow" className="block relative aspect-[16/10] rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 mb-6 group-hover:border-cyan-500/50 transition-all shadow-lg group-hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]" title={`Visit the ${project.title} live project`}>
                  <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700/50 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                    {project.category}
                  </div>
                  
                  {/* Decorative Abstract Background for Project */}
                  <div className="absolute inset-0 bg-slate-900 flex items-center justify-center overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={`${project.title} - Web Development Project by Hanan Irfan`} 
                      loading="lazy" 
                      className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-60 mix-blend-overlay"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-slate-900/40"></div>
                    <div className="w-full h-full p-8 flex flex-col pt-4 px-6 relative items-center justify-center opacity-80 group-hover:opacity-0 transition-opacity duration-300">
                       <CodeSquare size={48} className="text-slate-600 mb-4" />
                       <h3 className="text-2xl font-bold text-slate-400 tracking-tight text-center">{project.title}</h3>
                       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-gradient-to-t from-cyan-900/40 to-transparent blur-xl"></div>
                    </div>
                  </div>
                  
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10 backdrop-blur-sm">
                    <span className="px-6 py-3 rounded-full bg-cyan-500 text-white font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      Visit Live Site <ExternalLink size={18} />
                    </span>
                  </div>
                </a>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    <a href={project.url} target="_blank" rel="noopener noreferrer dofollow" title={`Go to ${project.title}`}>{project.title}</a>
                  </h3>
                  <p className="text-slate-400 leading-relaxed mb-6 flex-1 text-lg">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map(tech => (
                      <span key={tech} className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
