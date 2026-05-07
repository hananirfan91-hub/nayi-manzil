export interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  url?: string;
  image?: string;
  schema?: string;
}

export const defaultSEO: SEOProps = {
  title: "Nayi Manzil - Hanan Irfan | Web Developer & SEO Expert",
  description: "Nayi Manzil is the professional portfolio of Hanan Irfan, a Full Stack Developer, Next.js Expert, and Semantic SEO Specialist from Pakistan.",
  keywords: "Nayi Manzil, Nayi Manzil Portfolio, Hanan Irfan, Hanan Irfan Developer, SEO Expert Pakistan, Web Developer Pakistan, Next.js Developer, React Developer, Frontend Developer",
  url: "https://nayi-manzil.vercel.app/",
  image: "/logo.png"
};
