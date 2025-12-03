import { Property, PropertyType, ListingStatus } from './types';

export const PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Luxury Villa in Vidya Nagar',
    price: 12500000,
    location: 'Vidya Nagar, Baramati',
    type: PropertyType.RESIDENTIAL,
    status: ListingStatus.FOR_SALE,
    bedrooms: 4,
    bathrooms: 3,
    areaSqFt: 2500,
    description: 'A stunning modern villa located in the prestigious Vidya Nagar area. Features a private garden, modular kitchen, and premium fittings.',
    imageUrl: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['Garden', 'Parking', 'Modular Kitchen', 'Security'],
    isFeatured: true
  },
  {
    id: '2',
    title: 'Commercial Space at Bhigwan Road',
    price: 8500000,
    location: 'Bhigwan Road, Baramati',
    type: PropertyType.COMMERCIAL,
    status: ListingStatus.FOR_SALE,
    areaSqFt: 1200,
    description: 'Prime commercial office space situated on the busy Bhigwan Road. Ideal for IT offices, banks, or showrooms. High visibility.',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['Main Road Facing', 'Elevator', 'Power Backup'],
    isFeatured: true
  },
  {
    id: '3',
    title: '2BHK Apartment near MIDC',
    price: 3500000,
    location: 'MIDC, Baramati',
    type: PropertyType.RESIDENTIAL,
    status: ListingStatus.FOR_SALE,
    bedrooms: 2,
    bathrooms: 2,
    areaSqFt: 950,
    description: 'Affordable and cozy 2BHK apartment close to the industrial hub. Perfect for professionals working in MIDC.',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['Community Hall', 'Play Area', '24/7 Water'],
    isFeatured: false
  },
  {
    id: '4',
    title: 'Agricultural Plot in Malegaon',
    price: 5000000,
    location: 'Malegaon Budruk, Baramati',
    type: PropertyType.PLOT,
    status: ListingStatus.FOR_SALE,
    areaSqFt: 10000,
    description: 'Fertile agricultural land with water source nearby. Good connectivity to the main city.',
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['Water Well', 'Fenced', 'Road Access'],
    isFeatured: true
  },
  {
    id: '5',
    title: 'Modern 3BHK for Rent',
    price: 25000,
    location: 'Ashok Nagar, Baramati',
    type: PropertyType.RENTAL,
    status: ListingStatus.FOR_RENT,
    bedrooms: 3,
    bathrooms: 3,
    areaSqFt: 1500,
    description: 'Spacious 3BHK flat available for rent. Semi-furnished with wardrobes and kitchen cabinets.',
    imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['Balcony', 'Lift', 'Covered Parking'],
    isFeatured: false
  },
  {
    id: '6',
    title: 'Shop for Rent near TC College',
    price: 15000,
    location: 'TC College Road, Baramati',
    type: PropertyType.RENTAL,
    status: ListingStatus.FOR_RENT,
    areaSqFt: 300,
    description: 'Small shop ideal for stationery, cafe, or mobile accessories store. Heavy student footfall.',
    imageUrl: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['Ground Floor', 'Water Connection'],
    isFeatured: false
  }
];

export const LOCATIONS = [
  'Vidya Nagar',
  'Bhigwan Road',
  'MIDC',
  'Ashok Nagar',
  'TC College Road',
  'Malegaon',
  'Gunawadi',
  'Jalochi'
];