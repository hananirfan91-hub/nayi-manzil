import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";
import { Monitor, Search, Sparkles, Zap, ChevronRight, BarChart } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "web-dev",
      icon: Monitor,
      title: "Frontend & Next.js Development",
      short: "Lightning-fast, highly interactive modern web applications.",
      desc: "I specialize in building robust Single Page Applications (SPAs) and Server-Side Rendered (SSR) websites using React and Next.js. My architecture focuses on clean code, reusable components, and extreme performance metrics to ensure zero layout shifts and instant loads. Experience this firsthand by visiting my project, the Free Tools Hub.",
      features: ["Custom React & Next.js Builds", "Tailwind CSS Architectures", "Framer Motion Animations", "Progressive Web Apps (PWA)"],
      link: "https://freetoolshub1.vercel.app/",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80"
    },
    {
      id: "seo",
      icon: Search,
      title: "Advanced Technical SEO",
      short: "Dominate Google search results with programmatic strategies.",
      desc: "Building a site is only half the battle. I engineer websites to be loved by search engines. By utilizing Semantic HTML, JSON-LD Schema markup, Topical Maps, and NLP-friendly content structures, I ensure your website ranks organically for high-value keywords. See my SEO strategies in action on the AI Tool Guide.",
      features: ["Core Web Vitals Optimization", "Schema Markup Engineering", "Topical Map Strategy", "AI-Search Engine Readiness"],
      link: "https://aitoolguide.vercel.app/",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
    },
    {
      id: "design",
      icon: Sparkles,
      title: "UI/UX & Brand Identity",
      short: "Visually stunning designs that convert visitors into clients.",
      desc: "Design is not just how it looks, but how it works. I employ modern design trends like Glassmorphism, animated gradients, and bento-grid layouts to create futuristic interfaces. Every pixel is placed with conversion intent. As led by the Hi Digital Group, we deliver premium brand identities.",
      features: ["Figma Wireframing", "High-Fidelity Mockups", "Graphic Design Assets", "Brand Identity Guidelines"],
      link: "https://hidigitalgroup.vercel.app/",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80"
    },
    {
      id: "opt",
      icon: Zap,
      title: "Website Speed Optimization",
      short: "Turn sluggish websites into high-speed digital assets.",
      desc: "A slow website kills revenue. I provide deep-level code auditing, image optimization, payload reduction, and lazy-loading implementations to achieve 90+ scores on Google PageSpeed Insights for both mobile and desktop.",
      features: ["Asset Minification", "LCP & CLS Fixing", "Dynamic Imports Strategy", "Server Response Time Tuning"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80"
    }
  ];

  return (
    <>
      <SEO 
        title="Professional Web Development & SEO Services | Nayi Manzil" 
        description="Hire Hanan Irfan for elite React/Next.js development, Technical SEO, Website Optimization, and custom UI/UX design. Transforming ideas into digital reality."
        keywords="Web Development Services, SEO Services Pakistan, Next.js Development, Website Speed Optimization, Professional Website Designer, Affordable SEO Services"
      />

      <section className="pt-32 pb-16 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-full h-[500px] bg-gradient-to-r from-cyan-900/20 to-blue-900/20 blur-[100px] pointer-events-none skew-y-12"></div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <motion.div className="text-center max-w-3xl mx-auto mb-20" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-cyan-500 font-bold tracking-wider uppercase text-sm mb-4 block">Premium Offerings</span>
            <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight text-white">Digital Solutions That <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Deliver Results</span></h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              From enterprise-grade web applications to programmatic SEO structures, I provide end-to-end digital services designed to scale your business.
            </p>
          </motion.div>

          {/* Service Details Layout */}
          <div className="space-y-24">
            {services.map((service, idx) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 flex items-center justify-center group shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                    <img 
                      src={service.image} 
                      alt={`${service.title} Services by Hanan Irfan in Pakistan`}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 mix-blend-overlay opacity-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/40 via-slate-950/80 to-slate-950 z-0"></div>
                    <service.icon size={80} className="text-cyan-400 drop-shadow-[0_0_15px_rgba(6,182,212,0.8)] group-hover:scale-110 group-hover:text-cyan-300 transition-all duration-500 relative z-10" />
                  </div>
                </div>
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 text-cyan-400 text-xs font-bold tracking-widest uppercase">
                    Service 0{idx + 1}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{service.title}</h2>
                  <p className="text-xl font-medium text-slate-300">{service.short}</p>
                  <p className="text-slate-400 leading-relaxed text-lg">{service.desc}</p>
                  
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 mb-6">
                    {service.features.map(feat => (
                      <li key={feat} className="flex items-center gap-3 text-slate-300">
                        <ChevronRight size={16} className="text-cyan-500 flex-shrink-0" />
                        <span className="text-sm">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {"link" in service && (
                    <a href={service.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-cyan-400 font-bold hover:text-cyan-300 transition-colors mt-4 bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-700/50 hover:border-cyan-500/50">
                      View Related Project <ChevronRight size={16} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Invest / ROI Section */}
      <section className="py-24 border-y border-slate-800 bg-slate-900/50">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Why Invest in Professional Engineering?</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-16 leading-relaxed">
            In today's digital landscape, templates and basic builders don't cut it. You need custom architecture to stand out, rank high, and load instantly.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-slate-950 border border-slate-800">
              <BarChart className="w-12 h-12 text-blue-500 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">Higher Conversions</h3>
              <p className="text-slate-400 text-sm">A 1-second delay in page response can result in a 7% reduction in conversions. My optimization guarantees instant interactions.</p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-950 border border-slate-800">
              <Search className="w-12 h-12 text-cyan-500 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">Organic Dominance</h3>
              <p className="text-slate-400 text-sm">Stop paying for ads. Sustainable Semantic SEO builds long-term authority and predictable organic traffic.</p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-950 border border-slate-800">
              <Monitor className="w-12 h-12 text-indigo-500 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">Brand Authority</h3>
              <p className="text-slate-400 text-sm">A premium, smooth, glassmorphism UI establishes immediate trust and positions you as a market leader.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-8">Need a Custom Web Solution?</h2>
          <Link to="/connect" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-lg hover:scale-105 transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)]">
            Consult With Me Free <ChevronRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
