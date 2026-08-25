export const SITE = {
  name: 'Arnav Engineers',
  tagline: 'Engineering Strength & Delivering Excellence.',
  url: 'https://www.arnavengineers.com',
  description:
    'Arnav Engineers is a Pune-based tool room company manufacturing & supplying precision machined components, welding fixtures, inspection fixtures and prototype parts with on-time delivery and quality excellence.',
  phone: '+918956773435',
  phoneDisplay: '+91 89567 73435',
  email: 'dattatrayshinde435@gmail.com',
  proprietor: 'Dattatraya Shinde',
  gst: '27EHBPS2588K1ZO',
  address: {
    line1: 'Rajmata Industrial Estate, Gala No. 42, Plot No. T-58',
    line2: 'MIDC Bhosari, Pune',
    state: 'Maharashtra',
    postalCode: '411026',
    country: 'India',
    countryCode: 'IN',
  },
  // Approximate coordinates for MIDC Bhosari — update with exact gala coords when available
  geo: { lat: 18.6209, lng: 73.8542 },
} as const;

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About' },
  { href: '/capabilities/', label: 'Capabilities' },
  { href: '/products/', label: 'Products' },
  { href: '/contact/', label: 'Contact' },
] as const;
