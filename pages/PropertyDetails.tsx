import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROPERTIES } from '../constants';
import { MapPin, Bed, Bath, Expand, Check, ArrowLeft, MessageCircle, Phone, Share2, Heart } from 'lucide-react';

const PropertyDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const property = PROPERTIES.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!property) {
    return (
        <div className="min-h-screen flex items-center justify-center flex-col">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Property Not Found</h2>
            <Link to="/properties" className="text-accent hover:underline flex items-center text-lg">
                <ArrowLeft className="w-5 h-5 mr-2" /> Back to Listings
            </Link>
        </div>
    );
  }

  const formatPrice = (price: number) => {
    if (price >= 10000000) return `₹${(price / 10000000).toFixed(2)} Cr`;
    if (price >= 100000) return `₹${(price / 100000).toFixed(2)} Lac`;
    return `₹${price.toLocaleString('en-IN')}`;
  };
  
  const whatsappLink = `https://wa.me/?text=Hi, I am interested in ${property.title} listed on Baramati Estates.`;

  return (
    <div className="min-h-screen pt-24 pb-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Nav */}
        <div className="mb-8 flex items-center justify-between animate-fade-in">
             <div className="flex items-center text-sm text-gray-500">
                <Link to="/properties" className="hover:text-accent transition-colors flex items-center font-medium">
                    <ArrowLeft className="w-4 h-4 mr-1" /> Back to Listings
                </Link>
                <span className="mx-3 text-gray-300">/</span>
                <span className="text-gray-900 font-medium truncate max-w-[200px] md:max-w-md">{property.title}</span>
             </div>
             <div className="flex gap-2">
                <button className="p-2 rounded-full bg-white text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors shadow-sm">
                    <Heart className="w-5 h-5" />
                </button>
                <button className="p-2 rounded-full bg-white text-gray-400 hover:text-accent hover:bg-blue-50 transition-colors shadow-sm">
                    <Share2 className="w-5 h-5" />
                </button>
             </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column: Images & Desc */}
            <div className="lg:col-span-2 space-y-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                {/* Main Image */}
                <div className="aspect-video w-full rounded-3xl overflow-hidden shadow-xl relative group">
                    <img 
                        src={property.imageUrl} 
                        alt={property.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                        <span className="px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase bg-white/95 text-gray-900 shadow-md">
                             {property.status}
                        </span>
                        <span className="px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase bg-primary text-white shadow-md">
                             {property.type}
                        </span>
                    </div>
                </div>
                
                {/* Content */}
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                     <h1 className="text-3xl font-bold text-gray-900 mb-2">{property.title}</h1>
                     <div className="flex items-center text-gray-500 mb-8 text-lg">
                        <MapPin className="w-5 h-5 mr-2 text-accent" />
                        {property.location}
                     </div>

                     <div className="grid grid-cols-3 gap-6 py-8 border-y border-gray-100 mb-8">
                        {property.bedrooms && (
                            <div className="text-center">
                                <span className="block text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">Bedrooms</span>
                                <span className="flex items-center justify-center text-2xl font-bold text-gray-800">
                                    <Bed className="w-6 h-6 mr-2 text-accent" /> {property.bedrooms}
                                </span>
                            </div>
                        )}
                        {property.bathrooms && (
                            <div className="text-center border-l border-gray-100">
                                <span className="block text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">Bathrooms</span>
                                <span className="flex items-center justify-center text-2xl font-bold text-gray-800">
                                    <Bath className="w-6 h-6 mr-2 text-accent" /> {property.bathrooms}
                                </span>
                            </div>
                        )}
                         <div className="text-center border-l border-gray-100">
                                <span className="block text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">Area</span>
                                <span className="flex items-center justify-center text-2xl font-bold text-gray-800">
                                    <Expand className="w-6 h-6 mr-2 text-accent" /> {property.areaSqFt} <span className="text-sm text-gray-500 font-normal ml-1">sq.ft</span>
                                </span>
                        </div>
                     </div>

                     <div className="mb-10">
                         <h3 className="text-xl font-bold text-gray-900 mb-4">Description</h3>
                         <p className="text-gray-600 leading-relaxed text-lg">
                             {property.description}
                         </p>
                     </div>

                     <div>
                         <h3 className="text-xl font-bold text-gray-900 mb-6">Amenities & Features</h3>
                         <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                             {property.features.map((feature, i) => (
                                 <div key={i} className="flex items-center p-4 bg-gray-50 rounded-2xl text-gray-700 hover:bg-blue-50 transition-colors">
                                     <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 text-green-600 flex-shrink-0">
                                        <Check className="w-3 h-3" />
                                     </div>
                                     <span className="font-medium">{feature}</span>
                                 </div>
                             ))}
                         </div>
                     </div>
                </div>
            </div>

            {/* Right Column: Price & Contact */}
            <div className="lg:col-span-1 animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
                <div className="sticky top-28 space-y-6">
                    {/* Price Card */}
                    <div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-100">
                        <span className="block text-gray-500 font-medium text-sm mb-1 uppercase tracking-wide">Total Price</span>
                        <div className="text-4xl font-extrabold text-primary mb-6">
                            {formatPrice(property.price)}
                        </div>
                        
                        <div className="flex gap-3">
                             <a 
                                href={whatsappLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex-1 flex items-center justify-center py-4 rounded-xl font-bold text-white bg-green-500 hover:bg-green-600 transition-all shadow-lg hover:shadow-green-500/30"
                            >
                                <MessageCircle className="w-5 h-5 mr-2" />
                                WhatsApp
                            </a>
                            <button className="flex-none p-4 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors">
                                <Phone className="w-5 h-5" />
                            </button>
                        </div>
                        <button className="w-full mt-3 py-4 rounded-xl font-bold text-primary bg-white border-2 border-primary hover:bg-primary hover:text-white transition-all">
                            Request Callback
                        </button>
                    </div>
                    
                    {/* Agent/Safety Card */}
                    <div className="bg-blue-50 p-6 rounded-3xl border border-blue-100">
                        <h4 className="font-bold text-gray-900 mb-2">Verified Listing</h4>
                        <p className="text-sm text-gray-600 mb-4">
                            This property has been verified by Baramati Estates for authenticity.
                        </p>
                        <div className="flex items-center text-xs text-gray-400 uppercase tracking-widest font-semibold">
                            ID: #{property.id}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;