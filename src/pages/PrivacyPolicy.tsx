import React from "react";
import { SEO } from "../components/SEO";

function Title({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl font-bold text-white mt-12 mb-6 tracking-tight">{children}</h2>;
}

export default function PrivacyPolicy() {
  return (
    <>
      <SEO title="Privacy Policy | Nayi Manzil" description="Privacy Policy for Nayi Manzil digital brand." />
      <div className="pt-32 pb-24 container mx-auto px-4 max-w-4xl">
        <div className="prose prose-invert prose-cyan max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Privacy Policy</h1>
          <p className="text-slate-400 text-lg mb-12 border-b border-slate-800 pb-8">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

          <p className="text-slate-300 leading-relaxed text-lg">
            At Nayi Manzil, accessible from https://nayi-manzil.vercel.app/, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Nayi Manzil and how we use it.
          </p>

          <Title>1. General Information</Title>
          <p className="text-slate-300 leading-relaxed mb-6">
            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us. This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Nayi Manzil. This policy is not applicable to any information collected offline or via channels other than this website.
          </p>

          <Title>2. Information We Collect</Title>
          <p className="text-slate-300 leading-relaxed mb-4">
            The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
          </p>
          <p className="text-slate-300 leading-relaxed mb-6">
            Currently, as this is a portfolio website without user accounts, databases, or direct forms, we do not inherently collect personal data through standard input mechanisms. Any communication happens via external platforms (such as WhatsApp or Social Media). When you contact us via WhatsApp, we will see your phone number and the name associated with your WhatsApp profile.
          </p>

          <Title>3. How We Use Your Information</Title>
          <p className="text-slate-300 leading-relaxed mb-4">
            We use the information we collect in various ways, including to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-300 mb-6 marker:text-cyan-500">
            <li>Provide, operate, and maintain our website</li>
            <li>Improve, personalize, and expand our website</li>
            <li>Understand and analyze how you use our website</li>
            <li>Develop new products, services, features, and functionality</li>
            <li>Communicate with you (via requested external channels like WhatsApp) to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
          </ul>

          <Title>4. Third-Party Links & Advertising (Google AdSense)</Title>
          <p className="text-slate-300 leading-relaxed mb-4">
            Third party vendors, including Google, use cookies to serve ads based on a user's prior visits to this website or other websites. Google's use of advertising cookies enables it and its partners to serve ads to users based on their visit to our sites and/or other sites on the Internet. Users may opt-out of personalized advertising by visiting <a href="https://myadcenter.google.com/" className="text-cyan-400 hover:text-cyan-300 underline font-medium">Ads Settings</a>.
          </p>
          <p className="text-slate-300 leading-relaxed mb-6">
            Nayi Manzil's Privacy Policy does not apply to other advertisers or websites. Therefore, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information.
          </p>

          <Title>5. Children's Information</Title>
          <p className="text-slate-300 leading-relaxed mb-6">
            Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity. Nayi Manzil does not knowingly collect any Personal Identifiable Information from children under the age of 13.
          </p>
        </div>
      </div>
    </>
  );
}
