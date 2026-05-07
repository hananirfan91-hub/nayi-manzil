import React from "react";
import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";

export default function NotFound() {
  return (
    <>
      <SEO title="404 - Page Not Found | Nayi Manzil" description="The page you are looking for does not exist on " />
      <div className="min-h-[80vh] flex flex-col justify-center items-center px-4 text-center">
        <h1 className="text-9xl font-black bg-clip-text text-transparent bg-gradient-to-br from-cyan-400 to-blue-600 drop-shadow-[0_0_30px_rgba(6,182,212,0.5)]">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">Destination Not Found</h2>
        <p className="text-slate-400 max-w-md mx-auto mb-8 text-lg">
          It seems you've wandered off the path. Don't worry, every journey has a few detours. Let's get you back to exactly what you're looking for.
        </p>
        <Link 
          to="/" 
          className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all hover:scale-105"
        >
          Return to Home
        </Link>
      </div>
    </>
  );
}
