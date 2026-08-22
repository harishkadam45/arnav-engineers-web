import type { ImageMetadata } from 'astro';

import bronzeBushings from '../assets/products/bronze-bushings.avif';
import sleevesSpacers from '../assets/products/sleeves-spacers.avif';
import chassisPullRodSet from '../assets/products/chassis-pull-rod-set.jpg';
import connectingBrackets from '../assets/products/connecting-brackets.jpg';
import gearboxMountingPlate from '../assets/products/gearbox-mounting-plate.jpg';
import mountingBracket from '../assets/products/mounting-bracket.webp';
import laserCutParts from '../assets/products/laser-cut-parts.jpg';
import threadedShafts from '../assets/products/threaded-shafts.jpg';
import uBrackets from '../assets/products/u-brackets.jpg';
import angleBrackets from '../assets/products/angle-brackets.jpg';

export type ProductCategory =
  | 'Bushings & Sleeves'
  | 'Brackets'
  | 'Shafts & Rods'
  | 'Machined Parts';

export interface Product {
  name: string;
  category: ProductCategory;
  image: ImageMetadata;
  alt: string;
  blurb: string;
}

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  'Bushings & Sleeves',
  'Brackets',
  'Shafts & Rods',
  'Machined Parts',
];

export const PRODUCTS: Product[] = [
  {
    name: 'Bronze Bushings',
    category: 'Bushings & Sleeves',
    image: bronzeBushings,
    alt: 'Precision machined bronze bushings manufactured by Arnav Engineers',
    blurb: 'Precision-machined bronze bushings for smooth, low-wear rotational motion in assemblies and jigs.',
  },
  {
    name: 'Sleeves & Spacers',
    category: 'Bushings & Sleeves',
    image: sleevesSpacers,
    alt: 'Turned metal sleeves and spacers produced on precision lathe machines',
    blurb: 'Close-tolerance turned sleeves and spacers made to customer drawings in a range of materials.',
  },
  {
    name: 'Chassis Pull-Rod Set',
    category: 'Shafts & Rods',
    image: chassisPullRodSet,
    alt: 'Chassis pull-rod set fabricated and machined by Arnav Engineers',
    blurb: 'Fabricated and machined pull-rod sets for automotive chassis fixtures and prototypes.',
  },
  {
    name: 'Connecting Brackets',
    category: 'Brackets',
    image: connectingBrackets,
    alt: 'Steel connecting brackets machined to drawing tolerances',
    blurb: 'Machined connecting brackets for structural and fixture applications, built to drawing.',
  },
  {
    name: 'Gearbox Mounting Plate',
    category: 'Brackets',
    image: gearboxMountingPlate,
    alt: 'Gearbox mounting plate drilled and machined by Arnav Engineers',
    blurb: 'Drilled, bored and finished mounting plates for gearbox and driveline assemblies.',
  },
  {
    name: 'Mounting Brackets',
    category: 'Brackets',
    image: mountingBracket,
    alt: 'Metal mounting brackets supplied by Arnav Engineers',
    blurb: 'Sheet-metal and machined mounting brackets with accurate hole patterns and finishes.',
  },
  {
    name: 'Laser-Cut Steel Parts',
    category: 'Machined Parts',
    image: laserCutParts,
    alt: 'Profile-cut steel components ready for machining and assembly',
    blurb: 'Profile-cut steel blanks and parts prepared for secondary machining and assembly.',
  },
  {
    name: 'Threaded Shafts',
    category: 'Shafts & Rods',
    image: threadedShafts,
    alt: 'Threaded shafts turned and thread-rolled to specification',
    blurb: 'Turned threaded shafts with clean threads, precise diameters and smooth finish.',
  },
  {
    name: 'U-Brackets',
    category: 'Brackets',
    image: uBrackets,
    alt: 'U-shaped metal brackets bent, formed and machined by Arnav Engineers',
    blurb: 'Formed U-brackets for clamping, location and support in weldments and fixtures.',
  },
  {
    name: 'Angle Brackets',
    category: 'Brackets',
    image: angleBrackets,
    alt: 'Right-angle metal brackets manufactured to customer drawings',
    blurb: 'Right-angle brackets machined and finished for reliable perpendicular mounting.',
  },
];
