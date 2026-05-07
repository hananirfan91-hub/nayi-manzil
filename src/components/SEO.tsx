import React from "react";
import { Helmet } from "react-helmet-async";
import { SEOProps, defaultSEO } from "../lib/seo";

export function SEO({ title, description, keywords, url, image, schema }: Partial<SEOProps>) {
  const metaTitle = title || defaultSEO.title;
  const metaDescription = description || defaultSEO.description;
  const metaKeywords = keywords || defaultSEO.keywords;
  const metaUrl = url || defaultSEO.url;
  const metaImage = image || defaultSEO.image;

  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:site_name" content="Nayi Manzil" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={metaUrl} />
      <meta property="twitter:title" content={metaTitle} />
      <meta property="twitter:description" content={metaDescription} />
      <meta property="twitter:image" content={metaImage} />
      <meta property="twitter:creator" content="@hananirfan2026" />
      <meta property="twitter:site" content="@hananirfan2026" />

      {/* Additional Author/Creator Meta */}
      <meta name="author" content="Hanan Irfan" />
      <meta name="creator" content="Hanan Irfan" />
      <meta name="publisher" content="Nayi Manzil" />
      
      {/* Canonical */}
      <link rel="canonical" href={metaUrl} />

      {/* JSON-LD Structured Data Schema */}
      {schema && (
        <script type="application/ld+json">
          {schema}
        </script>
      )}
    </Helmet>
  );
}
