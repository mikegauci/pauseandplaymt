import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: string;
  name?: string;
  image?: string;
}

export default function SEO({
  title,
  description,
  canonical = 'https://pauseandplay.mt',
  type = 'website',
  name = 'Pause and Play Festival',
  image = 'https://pauseandplay.mt/og-image.jpg', // Make sure to add this image to your public folder
}: SEOProps) {
  const siteTitle = `${title} | ${name}`;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{siteTitle}</title>
      <meta name='description' content={description} />
      <link rel='canonical' href={canonical} />

      {/* OpenGraph tags */}
      <meta property='og:title' content={siteTitle} />
      <meta property='og:description' content={description} />
      <meta property='og:type' content={type} />
      <meta property='og:url' content={canonical} />
      <meta property='og:image' content={image} />
      <meta property='og:site_name' content={name} />

      {/* Twitter Card tags */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={siteTitle} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={image} />
    </Helmet>
  );
} 