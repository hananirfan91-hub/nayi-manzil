export interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  url?: string;
  image?: string;
  schema?: string;
}

export const defaultSEO: SEOProps = {
  title: "Nayi Manzil | A Story of Digital Success & Innovation",
  description: "Discover Nayi Manzil - a story of resilience, innovation, and digital transformation. Your ultimate new destination for technical SEO, web development, and digital branding strategies.",
  keywords: "Nayi Manzil, Nayi Manzil Story, Nayi Manzil Official Website, Nayi Manzil Digital Brand, Nayi Manzil Journey, SEO Strategies, Web Development Experiences, Hanan Irfan",
  url: "https://nayi-manzil.vercel.app/",
  image: "/logo.png"
};
