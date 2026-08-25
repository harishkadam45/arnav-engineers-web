import { SITE } from './site';

const businessId = SITE.url;

/** Core LocalBusiness entity — reused across pages via stable @id */
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'Manufacturer'],
  '@id': businessId,
  name: SITE.name,
  description: SITE.description,
  url: SITE.url,
  telephone: SITE.phone,
  email: SITE.email,
  image: `${SITE.url}/og.jpg`,
  logo: `${SITE.url}/icon-512.png`,
  founder: { '@type': 'Person', name: SITE.proprietor },
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.address.line1,
    addressLocality: SITE.address.line2,
    addressRegion: SITE.address.state,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.countryCode,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: SITE.geo.lat,
    longitude: SITE.geo.lng,
  },
  // Open Mon–Sat 8:30 AM – 5:00 PM IST; Thursday is the weekly holiday
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Friday', 'Saturday'],
      opens: SITE.hours.opensSchema,
      closes: SITE.hours.closesSchema,
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'Pune' },
    { '@type': 'State', name: 'Maharashtra' },
    { '@type': 'Country', name: 'India' },
  ],
  taxID: SITE.gst,
  knowsAbout: [
    'Precision machined components',
    'Welding fixtures',
    'Inspection fixtures',
    'Prototype parts',
    'Tool room job work',
    'MIG welding',
    'TIG welding',
    'Arc welding',
    'Milling machine work',
    'Lathe machine work',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Manufacturing Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Precision Machined Components Manufacturing',
          description:
            'Manufacture & supply of precision machined components on M1TR, universal milling and heavy-duty lathe machines.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Welding Fixture Design & Manufacturing',
          description:
            'Design, manufacture & supply of welding fixtures for automotive and automation applications.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Inspection Fixture Design & Manufacturing',
          description:
            'Design, manufacture & supply of inspection fixtures verified with calibrated MITUTOYO instruments.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Prototype Parts Development',
          description: 'Rapid development of prototype parts and tool room job works to customer drawings.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Welding Services (Arc / MIG / TIG)',
          description:
            'Arc welding up to 400 AMP, MIG welding up to 350 AMP and TIG welding up to 400 AMP.',
        },
      },
    ],
  },
};

export const breadcrumbSchema = (items: { name: string; path?: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    ...(item.path ? { item: new URL(item.path, SITE.url).href } : {}),
  })),
});
