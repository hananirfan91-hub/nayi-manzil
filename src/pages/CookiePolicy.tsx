import React from "react";
import { SEO } from "../components/SEO";

function Title({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl font-bold text-white mt-12 mb-6 tracking-tight">{children}</h2>;
}

export default function CookiePolicy() {
  return (
    <>
      <SEO title="Cookie Policy | Nayi Manzil" description="Cookie Policy for Nayi Manzil website." />
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
            We use continuous performance cookies as well as third-party advertising cookies. Third party vendors, including Google, use the DoubleClick DART cookie to serve personalized ads based on your visit to our website and other websites across the internet. Google's use of advertising cookies enables it and its partners to serve ads to our users. Users can always opt out of personalized ads by visiting the Google Ads Settings page or tracking choices offered by www.aboutads.info.
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
