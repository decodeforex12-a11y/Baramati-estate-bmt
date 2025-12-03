import React, { useState, useMemo } from 'react';
import PropertyCard from '../components/PropertyCard';
import { PROPERTIES, LOCATIONS } from '../constants';
import { PropertyType, ListingStatus } from '../types';
import { Filter } from 'lucide-react';

const Listings: React.FC = () => {
  const [filterType, setFilterType] = useState<string>('All');
  const [filterStatus, setFilterStatus] = useState<string>('All');
  const [filterLocation, setFilterLocation] = useState<string>('All');

  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter(p => {
      const matchType = filterType === 'All' || p.type === filterType;
      const matchStatus = filterStatus === 'All' || p.status === filterStatus;
      const matchLocation = filterLocation === 'All' || p.location.includes(filterLocation);
      return matchType && matchStatus && matchLocation;
    });
  }, [filterType, filterStatus, filterLocation]);

  return (
    <div className="min-h-screen pt-20 pb-12 px-4 max-w-7xl mx-auto">
      <div className="mb-10 animate-fade-in">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Your Dream Property</h1>
        <p className="text-gray-500">Explore the best real estate opportunities in Baramati.</p>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-8 flex flex-col md:flex-row gap-4 items-center animate-slide-up">
        <div className="flex items-center text-gray-500 font-medium mr-2">
            <Filter className="w-4 h-4 mr-2" /> Filters:
        </div>
        
        <select 
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="w-full md:w-auto px-4 py-2 bg-gray-50 border-0 rounded-lg text-sm focus:ring-2 focus:ring-accent outline-none"
        >
            <option value="All">All Status</option>
            {Object.values(ListingStatus).map(s => <option key={s} value={s}>{s}</option>)}
        </select>

        <select 
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="w-full md:w-auto px-4 py-2 bg-gray-50 border-0 rounded-lg text-sm focus:ring-2 focus:ring-accent outline-none"
        >
            <option value="All">All Types</option>
            {Object.values(PropertyType).map(t => <option key={t} value={t}>{t}</option>)}
        </select>

        <select 
            value={filterLocation}
            onChange={(e) => setFilterLocation(e.target.value)}
            className="w-full md:w-auto px-4 py-2 bg-gray-50 border-0 rounded-lg text-sm focus:ring-2 focus:ring-accent outline-none"
        >
            <option value="All">All Locations</option>
            {LOCATIONS.map(l => <option key={l} value={l}>{l}</option>)}
        </select>

        <div className="ml-auto text-sm text-gray-500">
            Showing {filteredProperties.length} results
        </div>
      </div>

      {/* Grid */}
      {filteredProperties.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property, idx) => (
            <PropertyCard key={property.id} property={property} index={idx} />
            ))}
        </div>
      ) : (
          <div className="text-center py-20 text-gray-400">
              <p className="text-lg">No properties found matching your criteria.</p>
              <button 
                onClick={() => {setFilterType('All'); setFilterStatus('All'); setFilterLocation('All')}}
                className="mt-4 text-accent hover:underline"
              >
                  Clear Filters
              </button>
          </div>
      )}
    </div>
  );
};

export default Listings;