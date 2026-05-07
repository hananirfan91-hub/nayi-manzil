import React from "react";
import { SEO } from "../components/SEO";

function Title({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl font-bold text-white mt-12 mb-6 tracking-tight">{children}</h2>;
}

export default function CookiePolicy() {
  return (
    <>
      <SEO title="Cookie Policy | Nayi Manzil - Hanan Irfan" description="Cookie Policy for Nayi Manzil portfolio website." />
      <div className="pt-32 pb-24 container mx-auto px-4 max-w-4xl">
        <div className="prose prose-invert prose-cyan max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Cookie Policy</h1>
          <p className="text-slate-400 text-lg mb-12 border-b border-slate-800 pb-8">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

          <p className="text-slate-300 leading-relaxed text-lg">
            This Cookie Policy explains how Nayi Manzil ("Company", "we", "us", and "our") uses cookies and similar technologies to recognize you when you visit our website at https://nayi-manzil.vercel.app/. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
          </p>

          <Title>What are cookies?</Title>
          <p className="text-slate-300 leading-relaxed mb-6">
            Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
          </p>

          <Title>Why do we use cookies?</Title>
          <p className="text-slate-300 leading-relaxed mb-6">
            We currently do not use aggressive third-party tracking or advertising cookies. Any cookies set by this site are purely for technical performance, security (such as Cloudflare or Vercel infrastructure cookies), and essential analytical purposes to ensure the portfolio loads fast and reliably. If we implement Google Analytics or Google AdSense in the future, standard analytical and advertising cookies may be deployed in accordance with Google's policies.
          </p>

          <Title>How can I control cookies?</Title>
          <p className="text-slate-300 leading-relaxed mb-6">
            You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in your web browser controls. For more information, please visit the help menu of your specific browser.
          </p>
        </div>
      </div>
    </>
  );
}
