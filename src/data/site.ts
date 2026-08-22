export const SITE = {
  name: 'Arnav Engineers',
  tagline: 'Precision Machined Components & Fixtures',
  url: 'https://www.arnavengineers.com',
  description:
    'Arnav Engineers is a Pune-based tool room company manufacturing & supplying precision machined components, welding fixtures, inspection fixtures and prototype parts with on-time delivery and quality excellence.',
  phone: '+918956773435',
  phoneDisplay: '+91 89567 73435',
  email: 'dattatrayshinde435@gmail.com',
  proprietor: 'Dattatraya Shinde',
  gst: '27EHBPS2588K1ZO',
  address: {
    line1: 'Ramkrishna Residency, Dehu-Alandi Road',
    line2: 'Chikhali, Pune',
    state: 'Maharashtra',
    postalCode: '411062',
    country: 'India',
    countryCode: 'IN',
  },
  // Approximate coordinates for Chikhali, Pimpri-Chinchwad — update with exact workshop coords when available
  geo: { lat: 18.7675, lng: 73.8128 },
} as const;

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About' },
  { href: '/capabilities/', label: 'Capabilities' },
  { href: '/products/', label: 'Products' },
  { href: '/contact/', label: 'Contact' },
] as const;
