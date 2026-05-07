import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Copy, Menu, X, ArrowUp, Briefcase, Code, User, FileText, Home, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";

const navLinks = [
  { name: "Home", path: "/", icon: Home },
  { name: "About", path: "/about", icon: User },
  { name: "Services", path: "/services", icon: Code },
  { name: "Portfolio", path: "/portfolio", icon: Briefcase },
  { name: "Connect", path: "/connect", icon: MessageSquare },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b border-transparent",
          isScrolled
            ? "bg-slate-950/80 backdrop-blur-xl border-slate-800 shadow-lg py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between">
          <Link to="/" className="relative flex items-center gap-2 group">
            {/* Enhanced Logo Presentation */}
            <div className="relative h-12 w-12 flex items-center justify-center rounded-xl bg-slate-900 border border-slate-700 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:border-cyan-500/50 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all duration-300 overflow-hidden p-1.5">
              <img src="/logo.png" alt="Nayi Manzil Logo" className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.2)] z-10" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-slate-300 tracking-tight">
                Nayi Manzil
              </span>
              <span className="text-[0.6rem] uppercase tracking-[0.2em] text-cyan-400 font-medium">
                Hanan Irfan
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-cyan-400 relative py-2 group",
                  location.pathname === link.path ? "text-cyan-400" : "text-slate-300"
                )}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400/50 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
              </Link>
            ))}
            <Link
              to="/connect"
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium text-sm hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all hover:scale-105 active:scale-95"
            >
              Hire Me
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-slate-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-2xl md:hidden pt-24 px-4 pb-8 flex flex-col"
          >
            <nav className="flex flex-col gap-4 flex-1">
              {navLinks.map((link, i) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.path}
                >
                  <Link
                    to={link.path}
                    className={cn(
                      "flex items-center gap-4 p-4 rounded-2xl text-lg font-medium transition-all",
                      location.pathname === link.path
                        ? "bg-slate-900 border border-slate-800 text-cyan-400 shadow-lg shadow-black/50"
                        : "text-slate-300 hover:bg-slate-900/50"
                    )}
                  >
                    <link.icon size={20} className={location.pathname === link.path ? "text-cyan-400" : "text-slate-500"} />
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link
                to="/connect"
                className="w-full py-4 mt-8 rounded-2xl flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold text-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]"
              >
                Start a Project
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-900/50 to-transparent"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-slate-900 border border-slate-800 shadow-[0_0_15px_rgba(0,0,0,0.3)] p-1.5 overflow-hidden group-hover:border-slate-600 transition-colors">
               <img src="/logo.png" alt="Logo" className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white tracking-tight">Nayi Manzil</span>
                <span className="text-xs uppercase tracking-widest text-cyan-400 font-medium">Hanan Irfan</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs pt-4">
              Your New Destination to Digital Success. Specializing in highly optimized React & Next.js web applications, and technical SEO strategies.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-slate-400 hover:text-cyan-400 text-sm transition-colors flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-slate-700"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {["Full Stack Development", "Frontend & UI/UX", "Technical SEO", "Graphic Design"].map(service => (
                <li key={service}>
                  <Link to="/services" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-slate-700"></span>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Legal</h3>
            <ul className="space-y-3">
              <li><Link to="/privacy-policy" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/disclaimer" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">Disclaimer</Link></li>
              <li><Link to="/cookie-policy" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Nayi Manzil (Hanan Irfan). All rights reserved.
          </p>
          <div className="flex gap-4">
             <a href="https://api.whatsapp.com/send/?phone=923106359235&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors">WhatsApp</a>
             <a href="https://instagram.com/hananirfan2026" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors">Instagram</a>
             <a href="https://facebook.com/HananIrfan001" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function AppLayout({ children }: { children: React.ReactNode }) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-cyan-500/30 selection:text-cyan-100 flex flex-col relative overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none w-full h-full">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] mix-blend-screen mix-blend-plus-lighter" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] mix-blend-screen mix-blend-plus-lighter" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-900/20 to-transparent shadow-[0_0_30px_rgba(6,182,212,0.1)]" />
      </div>

      <Navbar />
      
      <main className="flex-1 w-full relative z-10">
        {children}
      </main>

      <Footer />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a 
          href="https://api.whatsapp.com/send/?phone=923106359235&text=Hello%20Hanan%2C%20I%20would%20like%20to%20discuss%20a%20project!&type=phone_number&app_absent=0"
          target="_blank"
          rel="noreferrer"
          className="h-14 w-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:scale-110 active:scale-95 transition-all outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-400 focus-visible:ring-offset-slate-950 group"
          aria-label="Contact on WhatsApp"
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
          </svg>
        </a>

        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={scrollToTop}
              className="h-12 w-12 rounded-full bg-slate-800 text-white flex items-center justify-center shadow-lg hover:bg-slate-700 hover:scale-110 active:scale-95 transition-all outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-slate-950"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
