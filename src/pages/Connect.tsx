import React from "react";
import { SEO } from "../components/SEO";
import { motion } from "motion/react";

export default function Connect() {
  return (
    <>
      <SEO 
        title="Connect with Nayi Manzil | Official Digital Studio" 
        description="Connect with Nayi Manzil, a premium digital studio specializing in Full Stack Web Development and Technical SEO. Available for freelance opportunities and collaborations." 
        keywords="Hire Frontend Developer, Freelance Web Designer, Nayi Manzil Contact, Nayi Manzil Connect, Hire SEO Expert Pakistan, Digital Studio Pakistan"
      />
      <div className="pt-32 pb-24 container mx-auto px-4 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 font-bold uppercase tracking-widest text-sm mb-4 block">Let's Collaborate</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">New Destination</span></h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Ready to transform your ideas into reality? I am currently available for freelance projects, remote roles, and creative collaborations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col justify-center items-center text-center group hover:border-cyan-500/50 transition-all"
          >
            <div className="h-20 w-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-10 h-10 text-green-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4">Direct Messaging</h2>
            <p className="text-slate-400 mb-8 max-w-sm">
              Skip the forms. Reach out directly on WhatsApp for the fastest response to your inquiries, project proposals, or consultations.
            </p>
            <a 
              href="https://api.whatsapp.com/send/?phone=923106359235&text=Hello%20Hanan%21%20I'd%20like%20to%20discuss%20a%20project%20with%20you.&type=phone_number&app_absent=0" 
              target="_blank" 
              rel="noreferrer"
              className="px-8 py-4 rounded-full bg-green-500 text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(34,197,94,0.4)] transition-all hover:scale-105 inline-flex items-center gap-2"
            >
              Chat on WhatsApp
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="p-8 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col justify-center items-center text-center"
          >
            <h2 className="text-2xl font-bold mb-6">Connect on Social</h2>
            <p className="text-slate-400 mb-8 max-w-sm">
              Follow my journey, discover digital creation tips, and stay updated on my latest web development and SEO strategies.
            </p>
            <div className="flex flex-col w-full gap-4 max-w-xs">
              <a href="https://instagram.com/hananirfan2026" target="_blank" rel="noreferrer" className="w-full py-4 px-6 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium flex justify-between items-center transition-colors">
                <span>Instagram</span>
                <span className="text-cyan-400 text-sm">@hananirfan2026</span>
              </a>
              <a href="https://tiktok.com/@pathan_x_babrian565" target="_blank" rel="noreferrer" className="w-full py-4 px-6 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium flex justify-between items-center transition-colors">
                <span>TikTok</span>
                <span className="text-cyan-400 text-sm">@pathan_x_babrian565</span>
              </a>
              <a href="https://facebook.com/HananIrfan001" target="_blank" rel="noreferrer" className="w-full py-4 px-6 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium flex justify-between items-center transition-colors">
                <span>Facebook</span>
                <span className="text-cyan-400 text-sm">Nayi Manzil</span>
              </a>
              <a href="https://www.youtube.com/@ancientmystery-0" target="_blank" rel="noreferrer" className="w-full py-4 px-6 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium flex justify-between items-center transition-colors">
                <span>YouTube</span>
                <span className="text-cyan-400 text-sm">Ancient Mystery</span>
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-cyan-900/40 to-blue-900/20 border border-cyan-800/50 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Availability Status</h2>
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-950/50 border border-slate-800 mb-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-slate-200 font-medium">Available for new projects</span>
            </div>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8">
              I am currently accepting select freelance projects, long-term partnerships, and remote opportunities. Whether you need an SEO audit, a complete website redesign, or a complex React/Next.js frontend build, let's discuss how I can help your business thrive digitally.
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
}
