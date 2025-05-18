
import { Helmet } from "react-helmet";

interface MetadataProps {
  title: string;
  description: string;
}

export const Metadata = ({ title, description }: MetadataProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph meta tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      
      {/* Twitter Card meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      
      {/* Additional SEO meta tags */}
      <meta name="keywords" content="vulcanizare, vulcanizare mobila, anvelope, service auto, spalatorie auto, Timisoara" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="ro" />
      <link rel="canonical" href="https://your-domain.ro" />
      
      {/* Structured data for local business */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Service Vulcanizare Timișoara",
          "image": "",
          "@id": "",
          "url": "https://your-domain.ro",
          "telephone": "+40700000000",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Strada Exemplu 123",
            "addressLocality": "Timișoara",
            "postalCode": "300000",
            "addressCountry": "RO"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 45.687581994095275,
            "longitude": 21.172269167062527
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
          }
        })}
      </script>
    </Helmet>
  );
};
