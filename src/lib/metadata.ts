import { Metadata } from 'next';
import { person } from './data';

function getBaseUrl() {
  return (
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    process.env.URL ||
    process.env.DEPLOY_PRIME_URL ||
    person.website ||
    'https://naveenkanaparthi.dev'
  );
}

interface GenerateMetadataProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export function generateMetadata({
  title,
  description,
  image = '/images/og-default.svg',
  url = ''
}: GenerateMetadataProps = {}): Metadata {
  const siteTitle = title ? `${title} | ${person.name}` : person.name;
  const siteDescription = description || person.shortBio;
  const siteUrl = getBaseUrl();
  const fullUrl = `${siteUrl}${url}`;
  const imageUrl = `${siteUrl}${image}`;

  return {
    title: siteTitle,
    description: siteDescription,
    keywords: [
      'Data Engineer',
      'ETL',
      'Python',
      'BigQuery',
      'Kafka',
      'Airflow',
      'Dagster',
      'Analytics',
      'Machine Learning',
      'Data Pipeline'
    ],
    authors: [{ name: person.name, url: siteUrl }],
    creator: person.name,
    publisher: person.name,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: fullUrl,
      title: siteTitle,
      description: siteDescription,
      siteName: person.name,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: siteTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: siteTitle,
      description: siteDescription,
      images: [imageUrl],
    },
    alternates: {
      canonical: fullUrl,
    },
  };
}

type JsonLdArticle = {
  title: string;
  summary: string;
  url: string;
  publishedAt?: string;
};

export function generateJsonLd(type: 'Person' | 'Article', data?: JsonLdArticle) {
  const baseUrl = getBaseUrl();
  
  if (type === 'Person') {
    return {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: person.name,
      jobTitle: person.title,
      description: person.shortBio,
      url: baseUrl,
      email: person.email,
      address: {
        '@type': 'PostalAddress',
        addressLocality: person.location,
      },
      sameAs: Object.values(person.social).filter(Boolean),
    };
  }

  if (type === 'Article' && data) {
    return {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: data.title,
      description: data.summary,
      author: {
        '@type': 'Person',
        name: person.name,
      },
      publisher: {
        '@type': 'Person',
        name: person.name,
      },
      datePublished: data.publishedAt || new Date().toISOString(),
      url: `${baseUrl}${data.url}`,
    };
  }

  return null;
}
