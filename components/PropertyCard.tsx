import React from 'react';
import { Link } from 'react-router-dom';
import { Property } from '../types';
import { MapPin, Bed, Bath, Expand, ArrowUpRight } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
  index: number;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, index }) => {
  // Stagger animation delay based on index
  const delayStyle = { animationDelay: `${index * 150}ms` };

  const formatPrice = (price: number) => {
    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(2)} Cr`;
    } else if (price >= 100000) {
      return `₹${(price / 100000).toFixed(2)} Lac`;
    }
    return `₹${price.toLocaleString('en-IN')}`;
  };

  return (
    <Link 
      to={`/property/${property.id}`}
      className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 card-hover animate-slide-up flex flex-col h-full"
      style={delayStyle}
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <img 
          src={property.imageUrl} 
          alt={property.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase backdrop-blur-md shadow-sm ${
            property.status === 'For Sale' 
            ? 'bg-white/95 text-gray-900' 
            : 'bg-accent text-white'
          }`}>
            {property.status}
          </span>
        </div>
        
        <div className="absolute bottom-4 left-4 right-4 text-white">
             <div className="text-xl font-bold tracking-tight mb-1">{formatPrice(property.price)}</div>
             <div className="flex items-center text-white/90 text-sm">
                <MapPin className="w-3.5 h-3.5 mr-1" />
                <span className="truncate">{property.location}</span>
            </div>
        </div>
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-lg font-bold text-gray-900 group-hover:text-accent transition-colors line-clamp-2 mb-2 leading-snug">
            {property.title}
        </h3>

        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4 mt-auto pt-4">
          {property.bedrooms && (
            <div className="flex items-center tooltip" title="Bedrooms">
              <Bed className="w-4 h-4 mr-1.5 text-gray-400" />
              <span>{property.bedrooms}</span>
            </div>
          )}
          {property.bathrooms && (
            <div className="flex items-center" title="Bathrooms">
              <Bath className="w-4 h-4 mr-1.5 text-gray-400" />
              <span>{property.bathrooms}</span>
            </div>
          )}
           <div className="flex items-center" title="Area">
              <Expand className="w-4 h-4 mr-1.5 text-gray-400" />
              <span>{property.areaSqFt} <span className="text-xs">sq.ft</span></span>
            </div>
        </div>
        
        <div className="pt-4 border-t border-gray-50 flex items-center justify-between text-accent font-medium text-sm group-hover:translate-x-1 transition-transform duration-300">
            <span>View Details</span>
            <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;