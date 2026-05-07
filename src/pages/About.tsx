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
        keywords="Hanan Irfan, About Hanan Irfan, Hanan Irfan Developer, Full Stack Developer Pakistan, Nayi Manzil Creator, Technical SEO Expert Story, Graphic Designer"
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
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQChAODxAODggODQ0ODgcICBAODg4OFREWGBYRExYYHSggGCYlGxUWKDEhJTU3Li4uIyszODMsNygtLisBCgoKDg0OFRAQFyseFx0rKy0rLSsrLS0rKy03Ky0rLTctLSsrLSstLSstLS0rLTctLS0rKy0rNzcrKzcrKystLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAAAwECBAUGBwj/xAA8EAADAAECAwQGCAQGAwEAAAAAAQIDBBEFEiEGEzFBIjJRUmFxI0JicoGRobEHFNHhMzSCksHwU6LxFf/EABkBAQADAQEAAAAAAAAAAAAAAAABAwQCBf/EACMRAQEBAAICAQQDAQAAAAAAAAABAgMRITESBCJBUTJCYRP/2gAMAwEAAhEDEQA/APhxJBIEEoNiUgJSJSBEoCSQSLJAQkW2JSLJAVSLbFlJZICmwbDOUnlAVsGw3kDlAVsRsO5SOUBLRGw3Yq0ApojYa0UaAWyBjRVoBbIaLsqwKAWaKgAAAASQSgJRZEJFkBKJSBIukAJF0gSLpAQkWUlpkupAqpLKS6kspAopJ5RkwW5AE8pPKO5COUBLkryj3JVyAhyVcj2ijkBDRVodUlGgFNFWhrRVoBNIqNaKNALZVl2ioFQJ2ACEWRBZASi6RCLICyRdIqkXlAWlDEiJkZKAJkZMkzIyYAiZLzBeYGqQFqCygVl12KOjpOvdj0v2M98Xj6s0/vdANvIRyGGeLp/U/wDYZPFJ85pfd2YGhwUclsWrx30T2r3a6DagDK5KOTS4KVIGZyUaH1JRyBnaKND2hdIBLRRoa0UpAKZRjaQtgVAkAILIqi6Asi8oqkMSAlIZCKyh0SBeUMmSJQ2EBMyOmAxyXz5FGOrfqyt/m/JAZtbrZxTt62R+EfD2s4+p1l5PWe0+5PSf7icuR1bqutN7soAABK2/71Atjlt9P6G3rM9Zf+rbYz4oj2vm+1tsMeTl8PV86mt/zT8UShGTH0559Xznp+a9pp4fxFpqLe+N9FVeKMdZ1zbpbbrrM+CfwEUyEvWVAuoG6W1eOWmn6K35fbt1JqQMlSJqTZciKkDNSF0jRSFWgM9IW0OpC6QCaFsbSFsCoAAEIuiiLoC8jJRSRsgXhDpRSENlANhDpRSEOhAMxo5/H8u0RHvN0/kv/p1IRyu0cdMVffn9gOIBBfHDqtl6wEFolukl1p/idbhXBu9yqbpzP2fE9/wfsxgx7VMp1719X+pTvmzlfx/T6359Pn2m4LqMvSMWRz71zsjr4ewOurrWNqdve3PsOgwRyLaUtlt6p2tPK5Nmin/vq+lt4MZfnrL2O1M828Vyym+blPPrG99vY9mfp/WaWXFdF4H524zpO61uaX09O9vlv0LuLkur1VXNxzMlhHDszxWnv9G3tUno6nzPIXnZ7GOsS/bMv9C+qGa5M9o2XJnyIgZaE0aLQm0Ai0JofQqkAmhTG0hVAVAAAhF5KIvIDJGyhcjZAdA6BUDoAdA/GhEGrGgHQjndo4+gl+zIvwTT/sdSEL4lh5tLlT6+hVL5rqv2A8YdHhmJvd7eL2Rzjo6bUZZSnDO3K+uSYTbfzZzqdx1m9Xy9lwLQt2m1se+0Ogex8ew8X10fW8/r4k/2R6XhHbzNiSWeE155opL9H1MnJw7vlt4+fHXXp9T0ONquX2nbw4fRPmubtjU41mxy8m7UxOOd3VNN8v5Jv5I83xXtRxLPk/zL0uF7fQY62e34f1OePF/Jy6/T7TqVPqbrmfhPN1Z8H/iZor0/FqdL6LLKy4628/Cl+a/U9Lwvg2XJE5s2sv02uXNz3MOn5Ktmt/gYe2ulrLgeLLm5s2jV5sWpz1WV3hcdcapStvSles1ts9t+hbxzrfcqrd7x5j5tinmyJL61Kfzex7mp26L1V0XyPLcF0l3qYai6x46VZMmOHUwtt06a6JbnrKRqZWa0ZsiNmRGTIBlsRZptGewEUKodQqwE2JodQqgKASAFEMkWhkgNQyBcjJAfA6RMDoAfBpxmaDTjA1YyNbnWPDV0m525XM/HoTiJ12n73BeNetS6feXVCpnt5DA2svLDczTU71tvy77/APB0tbpbmY5H6Pdx6vt29J/7uYw1Lm5aW3IpdV5+Sf6s9LoM8WommlklPbmneXLe+3Tqnu2/B77+W3Wu66WZxLenG0C5ck1TdYvr4q50/Hry8r8fn7fAHgp211c21Ec89N6ey3/M9fWLFMKny/7KS/VIwTjmrnPup02LItubZOq8G9l5L/n4HE5V14JH0O+AYcPDNPlwR9Hp8s3qIqebnxXFY7y7vrLnn5nt9VPx2R5jtF2Kyd9kqYeXDk3S5ci3jw2a3Pp3ZjUYr005JuXj5V61Lr08BWpxZMF+MZNI9+6mt5qJ9ymt90vJ7eHj16vP3ZJVtn3XNeQ7Ndkp/lolzljJL9LNWVd5a2SUtz4pJJJeHzO5xPg+K8Osx1K5XpMOn7z602lkyNr2PbLjf5He0ayVPoLDi+1y3m/T0TJxlLFpLhOqyUrq82XbnyW/Gnt09i2XRJJLoiNW9d2onXfxk8PG9jeF5sHZzHlw5njzZ8v8xWLDMNWqrlUVvv02SW3Q81r8anPkmdu7nLkmeXw5VTSPeLSLQaXNkx7rRLBhWDFVc09902qfhzbM+fZDRwd261+1P1HUmcz8M2Qy5DXkMuQ0MzLkEWaMhnsBFCqG0KoBNCqG0KoCoAAFEMkWhkgNkZIqRsgPgdIiB8APg0YzNBpxgasRqxmXEaoA5fFtHL5tkua036XTl3fV7/8AfM4ukzctb7+H1vI9heGL9eZv78Kv3PNdosHJqd0tseSVS9nMujX7fmcXKz5+nQw5u8X6HN4jiyJ8s2+7/wDHNdDIs17KYe247D3vOk3MLdfS312OJnpbd/Lw9h2WrJixxptRkyTptTu47i7mp5evrS0/Z4H1Hs3oceHTcrzZs+7bWTXZ3kcp/VTfkeA4RpNVUY1/PaTuZfoZpwJ5cfwT2X7no1w3VNcka9Xje29Vo53S+z6W/wCZn101/CyPV48ijfka5fKfZ8Dkce1kqFkvfuVeN13fi551ujn8E0OXTXkx5M1Z+d805blJpezoYu1etTmcMvfd81efReC/VFeZ8tzLjV+Obpfthx/Dn02PDgqr9NZMmSsbjZJNTPXx9bf8DxljqE2ehnMzOo8/Wrq91nyGXIacrMuRnSGfIZ7HZGItgKoTQ22JoBVC6GUKoCoAAFEXkWi6AdIyRUjJAfDHQZ4HwwNEM0Y2ZYZohgbMTNUUYcdGiKA1yzkdqKl4Yndd6r5lj5vS5dnu9vZ4CeK8a7vfHi2eVdKy+Kl+xe1nAx26yOqbqmnvVPdtkVM9rYb2Z0dNheV+O32uY5WSfMvg1dQ+hzZ36WZvXt9C7PdkYy7c+fLO/VTFVtufQOHcIenxqVfPjS9avFnyDh/a7Lj5PPk2/E9xwzj+s1cLusLmdv8AM594hfLzf4GPkzr+zbneb/F3uKajkcqPT1NvljHPn8X7F8TkdptP3WPBu081PK7yeHNbU+Hw6dEdXhHD6xt3krvdTXrZ6/ZexHnv4uQ//wA3Dc780amd6nfeU8drffy67fmc8N63Ec0+yuRYnIzymj49lx9KfeY/dyesvkzq4+NYr96K921/Q9F58nfpry0ZcjGVkTW6ac+9PUz5KCCcjE0XtiqYFKE0xlMVQFKFUXoWwIAgAKIsiiLIBsjZYmRksB8MbDESxssDTDHRRlljZoDZFk6jPyYbtfVltfPboZu8SW7aUr61dEc/iHEVUPHPWXtvk8PPfoBzGy+F9RRZMDVtuKqScdmuse63Rx30t67P7Nd2tVCypctPZVXgmfZ+FbNJR/hrw5fDY+QcDxR3i5t1sz65wPNKxrZeXrUYvqL3ps4J1l1vATr8EZcbm5m8T3VYrneWmtmmg7z9S2prbHvvt9ooi18M7WcI/ldZUz/gU3UfBe6cWK2Z7L+IOVO5W6ez6M8Wz0+K3WO687lkzvw24NTUveXt7Z8mdDHqlfwrzk4vMQqO4jdldumLpnOjV0vH0vvD51cvx6fe8CVZtMU2S63KUwK0xbLUyjAgCAAqWRQsgGJl5YpF0wHSxk0ZnkSF1mfy+6Et7zJeLE5Nf5Sv9VGJsgC+TLVdabZQACAAAB09Jw95Mac9TbwfSN6lYrTXN0XzK9m+NRpqay46yYqafNFJOH57J9H5eaPofAVodbavDkh6ifS7mvQzLb7L6v5rdGblus9+PDZwzF6vflxH2dy6e1SXNL6+qem4VlpuMT6b+J6uMMVj2peklscWNJyarnXqrfYxatvtrz1J4detIkluzm9ocW+lqer3XvbG/BqObdP1jzHavtfptNzYubvdWujwYdqcP7T8F+/wOsYtvhXrUnt8w7TZt9Rybt8vvdfwOKx+t1DyZryNbO6dbeOy8kIPUzOs9PO1e9WobIJAIBAAELTbXgNnLv4iCQNDZRlZZIABAAQSiAAsgqiERQEMgnYGgIAAAAAAAlEATPAZ8PL2E9ZaqW1s05uejTX7Mq/BF1Xn4+TXtL7M6Q9dwH+Imr06WPLtqtMun01bZZXwvz/1JnsMHbfRZcbyd53Vyt602onavw8q/DqfHqXs9Xy/uVMe+DNv6XY5tZ/17LtF25yZd8emdYcD3Tz+GS18PdX6nj/HqyqJL+LjzmePSve7q90UVACN67vaIAADkAEgBAE7AAIsQAEgQAASAAAEEgQBJAEATsAEAAAQBJAEgmQBPdAWS+KXRvrv1+BUCBO5AAT3QAAECQAkAAAAAAAAA2JAAAAAkAACCQACNiQAgCQAggsQBAbEgBGxGxYAK7BsSAEbBsSAAAEgQBIbAAASBAAAAAEgQBIAAAAACAAAAAAAAAAAAAAAAIAAAAAAAAAAAAJAAAAAAAAAAAAAAACR/9k=" 
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
