import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { SEO } from "../components/SEO";
import { CheckCircle2, GraduationCap, Target, Heart, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <>
      <SEO 
        title="About Hanan Irfan | Nayi Manzil Developer Portfolio" 
        description="Learn about Hanan Irfan, a passionate Full Stack Developer and SEO Expert from Pakistan. Discover the 'Nayi Manzil' journey from struggle to digital excellence."
        keywords="Hanan Irfan, About Hanan Irfan, Hanan Irfan Developer, Full Stack Developer Pakistan, Nayi Manzil Creator, Technical SEO Expert Story"
      />
      
      {/* Header */}
      <section className="pt-32 pb-16 relative">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-white"
          >
            The Architect Behind <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Nayi Manzil</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
          >
            I am Hanan Irfan, a multidisciplinary developer and digital strategist obsessed with performance, design, and search engine dominance.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-slate-900/30 border-y border-slate-800 relative z-10">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Image Column */}
            <div className="lg:col-span-5 relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="sticky top-24"
              >
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-slate-700 shadow-[0_0_40px_rgba(0,0,0,0.5)] group">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80" 
                    alt="Hanan Irfan - Full Stack Developer and Expert SEO Professional" 
                    loading="lazy" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-slate-950/80 backdrop-blur-md rounded-2xl p-4 border border-slate-800 group-hover:border-cyan-500/50 transition-colors">
                      <h3 className="text-xl font-bold text-white tracking-tight">Hanan Irfan</h3>
                      <p className="text-cyan-400 text-sm font-medium">Founder, Nayi Manzil</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7">
              <div className="prose prose-invert prose-lg prose-cyan max-w-none">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <Target className="text-cyan-400" /> Bridging the Gap Between Design and Intelligence
                </h2>
                <h3 className="text-2xl font-bold text-white mb-4 mt-8">Who I Am</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              Hanan Irfan is a multidisciplinary developer, researcher, and digital strategist based in Rahim Yar Khan, Pakistan. Currently a student at the <strong>Khwaja Fareed University of Engineering and Information Technology (KFUEIT)</strong>, Hanan is in his 4th semester (as of 2026), where he is refining the intersection of rigorous engineering principles and creative digital design.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              At just 18 years old, Hanan has established himself as a forward-thinking creator who doesn't just write code—he builds ecosystems. His philosophy centers on the belief that technology should be as intuitive as it is powerful, leading him to specialize in solutions that integrate <strong>Artificial Intelligence</strong> into everyday human workflows. Like many aspiring developers, the journey began with immense struggle and competitive pressures, which ultimately fueled the creation of <strong>Nayi Manzil</strong>.
            </p>

            <h3 className="text-2xl font-bold text-white mb-4 mt-8">Professional Expertise & Custom Web Solutions</h3>
            <h4 className="text-xl font-bold text-cyan-400 mb-2 mt-6">Full-Stack Web Engineering</h4>
            <p className="text-slate-300 leading-relaxed mb-6">
              Hanan specializes in architecting the digital backbone of modern businesses. From scalable backend infrastructures that handle complex data to high-fidelity, responsive user interfaces, he ensures that every project is performance-optimized and user-centric. His expertise covers both web and mobile platforms, ensuring a seamless experience across all devices. To see the full scope of technical solutions offered, explore his comprehensive <Link to="/services" className="text-cyan-400 hover:text-cyan-300 underline font-medium transition-colors">Digital Services</Link> focusing on frontend mastery and advanced performance optimization.
            </p>

            <h4 className="text-xl font-bold text-cyan-400 mb-2 mt-6">AI & Machine Learning Implementations</h4>
            <p className="text-slate-300 leading-relaxed mb-4">
              A deep interest in the future of automation has led Hanan to the forefront of AI implementation. His technical repertoire includes:
            </p>
            <ul className="text-slate-300 leading-relaxed mb-6 space-y-3">
              <li className="flex items-start gap-3"><CheckCircle2 className="text-cyan-500 mt-1 flex-shrink-0" size={20} /><span><strong>Neural Network Training:</strong> Developing custom models tailored for complex, domain-specific data challenges and predictive analytics.</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="text-cyan-500 mt-1 flex-shrink-0" size={20} /><span><strong>LLM & RAG Systems:</strong> Implementing Large Language Models and Retrieval-Augmented Generation to create intelligent, context-aware automation tools (like the architecture behind <a href="https://aitoolguide.vercel.app/" target="_blank" rel="noopener noreferrer dofollow" className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium">AI Tool Guide</a>, detailed in his extensive <Link to="/portfolio" className="text-cyan-400 hover:text-cyan-300 underline font-medium transition-colors">Project Portfolio</Link>).</span></li>
              <li className="flex items-start gap-3"><CheckCircle2 className="text-cyan-500 mt-1 flex-shrink-0" size={20} /><span><strong>Human-in-the-Loop (HITL):</strong> Designing AI frameworks that augment human capability rather than replacing it, ensuring ethical and reliable AI deployment.</span></li>
            </ul>

            <h4 className="text-xl font-bold text-cyan-400 mb-2 mt-6">Digital Leadership, SEO & Strategy</h4>
            <p className="text-slate-300 leading-relaxed mb-4">
              As a core figure behind the <a href="https://hidigitalgroup.vercel.app/" target="_blank" rel="noopener noreferrer dofollow" className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium">Hi Digital Group</a>, Hanan leads a multi-talented team dedicated to sweeping digital transformation. The agency's approach is deeply integrated with his core offerings:
            </p>
            <ul className="text-slate-300 leading-relaxed mb-10 space-y-3">
              <li className="flex items-start gap-3"><Target className="text-cyan-500 mt-1 flex-shrink-0" size={20} /><span><strong>SEO & Growth Hacking:</strong> Helping brands dominate search engine rankings through strategic Topical Mapping, programmatic content, and Semantic Architecture. Discover how this drives traffic in his <Link to="/services" className="text-cyan-400 hover:text-cyan-300 underline font-medium transition-colors">Technical SEO Services</Link>.</span></li>
              <li className="flex items-start gap-3"><Target className="text-cyan-500 mt-1 flex-shrink-0" size={20} /><span><strong>Graphic Design & Brand Identity:</strong> Creating visually stunning UI/UX layouts that capture attention, build trust, and drastically improve user conversion rates.</span></li>
              <li className="flex items-start gap-3"><Target className="text-cyan-500 mt-1 flex-shrink-0" size={20} /><span><strong>Web Development Excellence:</strong> Crafting high-converting digital storefronts and robust web platforms, highly evident in successful builds such as the <a href="https://freetoolshub1.vercel.app/" target="_blank" rel="noopener noreferrer dofollow" className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium">Free Tools Hub</a>. Browse the full <Link to="/portfolio" className="text-cyan-400 hover:text-cyan-300 underline font-medium transition-colors">Portfolio Showcase</Link> to view real-world case studies and business impact.</span></li>
            </ul>

            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3 mt-12">
              <Heart className="text-cyan-400" /> Vision & Mission
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-cyan-400 mb-3 mt-0">My Vision</h3>
                <p className="text-slate-400 text-base leading-relaxed m-0">
                  To become a leading name in web development globally, recognized for transforming complex business challenges into sleek, high-ranking, and profitable digital realities.
                </p>
              </div>
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-cyan-400 mb-3 mt-0">My Mission</h3>
                <p className="text-slate-400 text-base leading-relaxed m-0">
                  To empower startups, creators, and businesses by delivering SEO-first, performance-obsessed web applications that stand out in an AI-driven search era.
                </p>
              </div>
            </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Breakdown */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-bold text-center text-white mb-16">Technical Arsenal</h2>
          
          <div className="space-y-12">
            {[
              {
                category: "Frontend Development",
                skills: ["React 19", "Next.js 15", "TypeScript", "Tailwind CSS v4", "Framer Motion", "ShadCN UI", "Redux", "Zustand"]
              },
              {
                category: "SEO & Performance",
                skills: ["Technical SEO", "Semantic HTML", "Schema Markup (JSON-LD)", "Core Web Vitals", "Programmatic SEO", "On-Page SEO", "Topical Mapping"]
              },
              {
                category: "Backend & Systems",
                skills: ["Node.js", "Express", "Firebase", "Supabase", "REST APIs", "GraphQL", "Vercel Deployment"]
              },
              {
                category: "Design & UX",
                skills: ["Figma", "UI/UX Principles", "Glassmorphism UI", "Responsive Design", "Accessibility (a11y)", "Graphic Design", "Brand Identity"]
              }
            ].map((domain, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 lg:p-10"
              >
                <h3 className="text-2xl font-bold text-white mb-6 border-b border-slate-800 pb-4 inline-block">{domain.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {domain.skills.map(skill => (
                    <span key={skill} className="px-4 py-2 bg-slate-950 border border-slate-800 text-slate-300 rounded-lg flex items-center gap-2 hover:border-cyan-500/50 transition-colors">
                      <CheckCircle2 size={16} className="text-cyan-500" />
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
