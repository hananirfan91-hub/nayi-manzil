import React from "react";
import { SEO } from "../components/SEO";

function Title({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl font-bold text-white mt-12 mb-6 tracking-tight">{children}</h2>;
}

export default function Terms() {
  return (
    <>
      <SEO title="Terms & Conditions | Nayi Manzil" description="Terms and Conditions for use of Nayi Manzil website." />
      <div className="pt-32 pb-24 container mx-auto px-4 max-w-4xl">
        <div className="prose prose-invert prose-cyan max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Terms & Conditions</h1>
          <p className="text-slate-400 text-lg mb-12 border-b border-slate-800 pb-8">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

          <p className="text-slate-300 leading-relaxed text-lg">
            Welcome to Nayi Manzil. These terms and conditions outline the rules and regulations for the use of Nayi Manzil's Website, located at https://nayi-manzil.vercel.app/. By accessing this website, we assume you accept these terms and conditions.
          </p>

          <Title>1. Introduction</Title>
          <p className="text-slate-300 leading-relaxed mb-6">
            The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company's terms and conditions. "The Company", "Ourselves", "We", "Our", and "Us", refers to Nayi Manzil.
          </p>

          <Title>2. Intellectual Property Rights</Title>
          <p className="text-slate-300 leading-relaxed mb-4">
            Other than the content you own, under these Terms, Nayi Manzil and/or its licensors own all the intellectual property rights and materials contained in this Website. You are granted limited license only for purposes of viewing the material contained on this Website.
          </p>

          <Title>3. Restrictions</Title>
          <p className="text-slate-300 leading-relaxed mb-4">You are specifically restricted from all of the following:</p>
          <ul className="list-disc pl-6 space-y-2 text-slate-300 mb-6 marker:text-cyan-500">
            <li>Publishing any Website material in any other media without prior consent;</li>
            <li>Selling, sublicensing and/or otherwise commercializing any Website material;</li>
            <li>Using this Website in any way that is or may be damaging to this Website;</li>
            <li>Using this Website in any way that impacts user access to this Website;</li>
          </ul>

          <Title>4. Freelance and Project Services</Title>
          <p className="text-slate-300 leading-relaxed mb-6">
            Any project collaborations, web development services, SEO work, or consulting provided by Nayi Manzil will be subject to a separate, specific contract or agreement defined between Nayi Manzil and the client. This website acts solely as an informative digital presence.
          </p>

          <Title>5. No warranties</Title>
          <p className="text-slate-300 leading-relaxed mb-6">
            This Website is provided "as is," with all faults, and Nayi Manzil expresses no representations or warranties, of any kind related to this Website or the materials contained on this Website. Also, nothing contained on this Website shall be interpreted as advising you.
          </p>
        </div>
      </div>
    </>
  );
}
