export enum PropertyType {
  RESIDENTIAL = 'Residential',
  COMMERCIAL = 'Commercial',
  PLOT = 'Plot',
  RENTAL = 'Rental'
}

export enum ListingStatus {
  FOR_SALE = 'For Sale',
  FOR_RENT = 'For Rent'
}

export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  type: PropertyType;
  status: ListingStatus;
  bedrooms?: number;
  bathrooms?: number;
  areaSqFt: number;
  description: string;
  imageUrl: string;
  features: string[];
  isFeatured?: boolean;
}

export interface SearchFilters {
  query: string;
  type: string;
  budgetRange: string;
}