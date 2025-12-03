import React, { useState } from 'react';
import { PropertyType, ListingStatus } from '../types';
import { generatePropertyDescription } from '../services/geminiService';
import { LOCATIONS } from '../constants';
import { Sparkles, Upload, Check, Loader2, Home, User, MapPin, DollarSign } from 'lucide-react';

const PostProperty: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    type: PropertyType.RESIDENTIAL,
    status: ListingStatus.FOR_SALE,
    location: '',
    price: '',
    bedrooms: '',
    features: '',
    description: ''
  });

  const [isGenerating, setIsGenerating] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGenerateDescription = async () => {
    if (!formData.type || !formData.location || !formData.price) {
      alert("Please fill in Type, Location, and Price first.");
      return;
    }
    
    setIsGenerating(true);
    const desc = await generatePropertyDescription(
      formData.type,
      formData.location,
      formData.price,
      formData.features || "Standard features"
    );
    setFormData(prev => ({ ...prev, description: desc }));
    setIsGenerating(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
    }, 2000);
  };

  if (isSuccess) {
      return (
          <div className="min-h-screen pt-24 pb-12 flex items-center justify-center px-4 bg-gray-50">
              <div className="max-w-lg w-full bg-white p-10 rounded-3xl shadow-xl text-center animate-fade-in-up border border-gray-100">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce-slow">
                      <Check className="w-10 h-10 text-green-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">Submission Successful!</h2>
                  <p className="text-gray-500 mb-8 text-lg">Thank you! Your property listing has been submitted for review. Our team will contact you shortly.</p>
                  <button 
                    onClick={() => window.location.reload()} 
                    className="inline-flex items-center justify-center px-8 py-3 rounded-full text-white bg-primary hover:bg-black transition-colors shadow-lg font-medium"
                  >
                      Submit Another Property
                  </button>
              </div>
          </div>
      )
  }

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-12 animate-fade-in-up">
        <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-2 block">Sell Faster</span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">List Your Property</h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">Fill in the details below to reach thousands of potential buyers in Baramati.</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 animate-slide-up space-y-10" style={{ animationDelay: '0.1s' }}>
        
        {/* Personal Details */}
        <div>
            <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-accent mr-4">
                    <User className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Owner Details</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2 transition-colors group-focus-within:text-accent">Full Name</label>
                    <input 
                        required
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent focus:bg-white outline-none transition-all duration-300"
                        placeholder="e.g. Rahul Patil"
                    />
                </div>
                <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2 transition-colors group-focus-within:text-accent">Phone Number</label>
                    <input 
                        required
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent focus:bg-white outline-none transition-all duration-300"
                        placeholder="e.g. +91 98765 43210"
                    />
                </div>
            </div>
        </div>

        <div className="h-px bg-gray-100"></div>

        {/* Property Details */}
        <div>
             <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-accent mr-4">
                    <Home className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Property Information</h3>
            </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-accent">I want to</label>
                    <select 
                        name="status"
                        value={formData.status}
                        onChange={handleInputChange}
                        className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent outline-none cursor-pointer transition-all duration-300 hover:bg-gray-100"
                    >
                        {Object.values(ListingStatus).map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                </div>
                <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-accent">Property Type</label>
                    <select 
                        name="type"
                        value={formData.type}
                        onChange={handleInputChange}
                        className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent outline-none cursor-pointer transition-all duration-300 hover:bg-gray-100"
                    >
                        {Object.values(PropertyType).map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                </div>
                <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-accent">Location</label>
                    <div className="relative">
                        <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <select 
                            required
                            name="location"
                            value={formData.location}
                            onChange={handleInputChange}
                            className="w-full pl-12 pr-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent outline-none cursor-pointer transition-all duration-300"
                        >
                            <option value="">Select Area in Baramati</option>
                            {LOCATIONS.map(l => <option key={l} value={l}>{l}</option>)}
                        </select>
                    </div>
                </div>
                <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-accent">Price (₹)</label>
                    <div className="relative">
                        <DollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input 
                            required
                            type="number" 
                            name="price"
                            value={formData.price}
                            onChange={handleInputChange}
                            className="w-full pl-12 pr-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent focus:bg-white outline-none transition-all duration-300"
                            placeholder="e.g. 3500000"
                        />
                    </div>
                </div>
                {formData.type === PropertyType.RESIDENTIAL && (
                    <div className="group">
                        <label className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-accent">Bedrooms</label>
                        <input 
                            type="number" 
                            name="bedrooms"
                            value={formData.bedrooms}
                            onChange={handleInputChange}
                            className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent focus:bg-white outline-none transition-all duration-300"
                            placeholder="e.g. 2"
                        />
                    </div>
                )}
                 <div className="group md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-accent">Key Features</label>
                    <input 
                        type="text" 
                        name="features"
                        value={formData.features}
                        onChange={handleInputChange}
                        className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent focus:bg-white outline-none transition-all duration-300"
                        placeholder="e.g. Garden, Parking, Security, Main Road Facing"
                    />
                </div>
             </div>

             <div className="relative group">
                <div className="flex justify-between items-center mb-2">
                    <label className="block text-sm font-semibold text-gray-700 group-focus-within:text-accent transition-colors">Description</label>
                    <button 
                        type="button"
                        onClick={handleGenerateDescription}
                        disabled={isGenerating}
                        className="text-xs flex items-center px-3 py-1.5 rounded-lg bg-blue-50 text-accent hover:bg-blue-100 transition-colors disabled:opacity-50 font-medium"
                    >
                        {isGenerating ? <Loader2 className="w-3 h-3 mr-1 animate-spin"/> : <Sparkles className="w-3 h-3 mr-1" />}
                        {isGenerating ? 'AI Writing...' : 'Generate with AI'}
                    </button>
                </div>
                <textarea 
                    required
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent outline-none transition-all duration-300 resize-none"
                    placeholder="Describe your property. What makes it unique?"
                />
             </div>
        </div>

        <div className="h-px bg-gray-100"></div>

        {/* Upload */}
        <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">Property Photos</label>
            <div className="border-2 border-dashed border-gray-300 rounded-2xl p-10 text-center hover:bg-gray-50 hover:border-accent transition-all duration-300 cursor-pointer group">
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-50 transition-colors">
                     <Upload className="w-8 h-8 text-gray-400 group-hover:text-accent transition-colors" />
                </div>
                <p className="text-base font-medium text-gray-700">Click to upload or drag and drop</p>
                <p className="text-sm text-gray-400 mt-1">High quality photos increase interest</p>
                <input type="file" className="hidden" />
            </div>
        </div>

        <div className="pt-4">
            <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:bg-gray-900 transition-all transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
            >
                {isSubmitting ? <Loader2 className="w-6 h-6 animate-spin mr-2" /> : null}
                {isSubmitting ? 'Submitting...' : 'Post Your Property'}
            </button>
        </div>

      </form>
    </div>
  );
};

export default PostProperty;