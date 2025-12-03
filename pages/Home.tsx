import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';
import { PROPERTIES, LOCATIONS } from '../constants';
import { Search, ArrowRight, MapPin, Home as HomeIcon, TrendingUp, ShieldCheck, Users } from 'lucide-react';
import { PropertyType } from '../types';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const featuredProperties = PROPERTIES.filter(p => p.isFeatured).slice(0, 3);
  
  const [searchLocation, setSearchLocation] = useState('');
  const [searchType, setSearchType] = useState('');
  
  const handleSearch = () => {
    navigate('/properties');
  };

  return (
    <div className="min-h-screen">
      {/* Premium Hero Section - Reduced Height for Compact/Professional feel */}
      <section className="relative h-[80vh] min-h-[550px] max-h-[800px] flex items-center justify-center overflow-hidden">
        {/* Background Image with subtle zoom animation */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Modern House in Baramati"
            className="w-full h-full object-cover animate-pulse-slow" 
            style={{ animationDuration: '20s', transform: 'scale(1.1)' }}
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center w-full flex flex-col items-center justify-center h-full pt-16">
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
             <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-widest uppercase mb-6 shadow-lg">
                Baramati's #1 Real Estate Portal
             </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 animate-fade-in-up tracking-tight leading-tight drop-shadow-lg" style={{ animationDelay: '0.2s' }}>
            Discover Your <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-blue-200">Dream Property</span>
          </h1>
          
          <p className="text-base md:text-lg text-blue-50 mb-10 max-w-2xl animate-fade-in-up font-medium leading-relaxed drop-shadow-md" style={{ animationDelay: '0.3s' }}>
             We connect you with trusted buyers, sellers, and genuine listings across Baramati and nearby areas.
          </p>
          
          {/* Modern Floating Search Bar - Compact */}
          <div className="w-full max-w-3xl bg-white/95 backdrop-blur-xl p-2 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-2 animate-slide-up border border-white/40 ring-1 ring-white/50" style={{ animationDelay: '0.5s' }}>
             <div className="flex-1 flex items-center px-4 py-2.5 bg-gray-50/50 hover:bg-white rounded-xl transition-all border border-transparent hover:border-blue-100 group">
                <MapPin className="text-accent w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                <div className="flex flex-col items-start w-full">
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider ml-1">Location</span>
                    <select 
                      className="bg-transparent w-full text-gray-900 font-bold outline-none text-sm cursor-pointer -ml-1"
                      value={searchLocation}
                      onChange={(e) => setSearchLocation(e.target.value)}
                    >
                        <option value="">All Baramati</option>
                        {LOCATIONS.map(loc => <option key={loc} value={loc}>{loc}</option>)}
                    </select>
                </div>
             </div>
             
             <div className="w-px bg-gray-200 my-2 hidden md:block"></div>

             <div className="flex-1 flex items-center px-4 py-2.5 bg-gray-50/50 hover:bg-white rounded-xl transition-all border border-transparent hover:border-blue-100 group">
                <HomeIcon className="text-accent w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                <div className="flex flex-col items-start w-full">
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider ml-1">Property Type</span>
                    <select 
                      className="bg-transparent w-full text-gray-900 font-bold outline-none text-sm cursor-pointer -ml-1"
                      value={searchType}
                      onChange={(e) => setSearchType(e.target.value)}
                    >
                        <option value="">Any Type</option>
                        {Object.values(PropertyType).map(type => <option key={type} value={type}>{type}</option>)}
                    </select>
                </div>
             </div>
             
             <button 
                onClick={handleSearch}
                className="bg-primary hover:bg-accent text-white px-8 py-3 rounded-xl font-bold text-base transition-all duration-300 flex items-center justify-center md:w-auto w-full shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-0.5"
             >
                <Search className="w-4 h-4 mr-2" />
                Search
             </button>
          </div>
        </div>
      </section>

      {/* Stats Section (Compact & Overlayed) */}
      <section className="bg-white py-10 border-b border-gray-100 relative z-20 -mt-8 mx-4 md:mx-auto max-w-6xl rounded-2xl shadow-xl">
          <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center group p-2 hover:bg-gray-50 rounded-xl transition-colors">
                      <h3 className="text-3xl font-extrabold text-primary mb-1 group-hover:text-accent transition-colors">500+</h3>
                      <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">Listings</p>
                  </div>
                  <div className="text-center group p-2 hover:bg-gray-50 rounded-xl transition-colors">
                      <h3 className="text-3xl font-extrabold text-primary mb-1 group-hover:text-accent transition-colors">2k+</h3>
                      <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">Customers</p>
                  </div>
                  <div className="text-center group p-2 hover:bg-gray-50 rounded-xl transition-colors">
                      <h3 className="text-3xl font-extrabold text-primary mb-1 group-hover:text-accent transition-colors">100%</h3>
                      <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">Verified</p>
                  </div>
                  <div className="text-center group p-2 hover:bg-gray-50 rounded-xl transition-colors">
                      <h3 className="text-3xl font-extrabold text-primary mb-1 group-hover:text-accent transition-colors">#1</h3>
                      <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">Ranked</p>
                  </div>
              </div>
          </div>
      </section>

      {/* Featured Properties - Reduced Padding */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-xl">
                <span className="text-accent font-bold tracking-wider uppercase text-xs mb-2 block flex items-center gap-2">
                   <span className="w-8 h-[2px] bg-accent"></span> Premium Selection
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">Featured Properties</h2>
                <p className="text-gray-500 text-base">Handpicked opportunities in prime locations.</p>
            </div>
            <button 
                onClick={() => navigate('/properties')}
                className="hidden md:flex items-center px-5 py-2.5 rounded-full border border-gray-200 text-gray-700 font-semibold text-sm hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm hover:shadow-md mt-6 md:mt-0 group"
            >
                View All Listings <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredProperties.map((property, idx) => (
                <PropertyCard key={property.id} property={property} index={idx} />
            ))}
        </div>
        
         <div className="mt-10 text-center md:hidden">
            <button 
                onClick={() => navigate('/properties')}
                className="bg-white border border-gray-200 text-primary px-8 py-3 rounded-full font-bold shadow-sm w-full"
            >
                View All Properties
            </button>
         </div>
      </section>
      
      {/* Visual CTA - Compact */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto bg-primary rounded-[2rem] p-10 md:p-16 relative overflow-hidden shadow-2xl">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-pulse-slow"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-600/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                        Sell or Rent <br/> Your Property?
                    </h2>
                    <p className="text-blue-100 text-base mb-8 max-w-md">
                        Join thousands of property owners. List your property in minutes.
                    </p>
                    <button 
                        onClick={() => navigate('/post-property')}
                        className="bg-white text-primary px-8 py-3.5 rounded-full font-bold text-sm shadow-xl hover:shadow-2xl hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center group"
                    >
                        List Property for Free <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
                <div className="relative hidden md:block">
                     {/* Decorative abstract UI card */}
                     <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 max-w-sm ml-auto shadow-2xl">
                        <div className="flex items-center space-x-3 mb-3">
                            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white">
                                <HomeIcon className="w-5 h-5"/>
                            </div>
                            <div>
                                <div className="h-3 w-24 bg-white/30 rounded mb-1.5"></div>
                                <div className="h-2 w-16 bg-white/10 rounded"></div>
                            </div>
                        </div>
                        <div className="h-24 bg-white/5 rounded-xl mb-3 w-full"></div>
                        <div className="flex justify-between">
                            <div className="h-6 w-16 bg-white/20 rounded-lg"></div>
                            <div className="h-6 w-16 bg-green-400 rounded-lg"></div>
                        </div>
                     </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;