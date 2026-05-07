import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppLayout } from './components/Layout';

// Lazy load pages for performance
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Services = React.lazy(() => import('./pages/Services'));
const Portfolio = React.lazy(() => import('./pages/Portfolio'));
const Connect = React.lazy(() => import('./pages/Connect'));
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Disclaimer = React.lazy(() => import('./pages/Disclaimer'));
const CookiePolicy = React.lazy(() => import('./pages/CookiePolicy'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

export default function App() {
  return (
    <AppLayout>
      <React.Suspense fallback={
        <div className="min-h-[80vh] flex items-center justify-center">
          <div className="h-12 w-12 rounded-full border-4 border-cyan-500/20 border-t-cyan-500 animate-spin"></div>
        </div>
      }>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </React.Suspense>
    </AppLayout>
  );
}
