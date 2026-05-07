import React from "react";
import { SEO } from "../components/SEO";

function Title({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl font-bold text-white mt-12 mb-6 tracking-tight">{children}</h2>;
}

export default function Disclaimer() {
  return (
    <>
      <SEO title="Disclaimer | Nayi Manzil - Hanan Irfan" description="Official Disclaimer for Nayi Manzil, Hanan Irfan's digital portfolio." />
      <div className="pt-32 pb-24 container mx-auto px-4 max-w-4xl">
        <div className="prose prose-invert prose-cyan max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Disclaimer</h1>
          <p className="text-slate-400 text-lg mb-12 border-b border-slate-800 pb-8">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

          <p className="text-slate-300 leading-relaxed text-lg font-medium">
            The information contained on https://nayi-manzil.vercel.app/ website (the "Service") is for general information purposes only.
          </p>

          <Title>General Disclaimer</Title>
          <p className="text-slate-300 leading-relaxed mb-6">
            Nayi Manzil (Hanan Irfan) assumes no responsibility for errors or omissions in the contents on the Service. In no event shall Nayi Manzil be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or other tort, arising out of or in connection with the use of the Service or the contents of the Service. Nayi Manzil reserves the right to make additions, deletions, or modification to the contents on the Service at any time without prior notice.
          </p>

          <Title>External Links Disclaimer</Title>
          <p className="text-slate-300 leading-relaxed mb-6">
            https://nayi-manzil.vercel.app/ website may contain links to external websites that are not provided or maintained by or in any way affiliated with Nayi Manzil. Please note that the Nayi Manzil does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites. Projects featured in the portfolio represent past work; the live status or current content of external client projects is beyond our direct control.
          </p>

          <Title>Professional Guarantee</Title>
          <p className="text-slate-300 leading-relaxed mb-6">
            While Hanan Irfan utilizes industry-standard best practices in Full Stack Development, React/Next.js architectures, and Semantic SEO, web-based outcomes such as Search Engine Rankings, Traffic Volume, and Conversion Rates cannot be absolutely guaranteed due to the constantly changing nature of search algorithms and third-party platform rules. Any SEO advice or case studies cited represent historical performance and not a guarantee of identical future results.
          </p>
        </div>
      </div>
    </>
  );
}
