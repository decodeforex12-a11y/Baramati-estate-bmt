import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-xl font-bold text-primary mb-4 block">
              <span className="text-accent">Baramati</span>Estates
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              Your trusted partner for buying, selling, and renting properties across Baramati. We make real estate simple and transparent.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/properties" className="text-gray-500 hover:text-accent text-sm">All Properties</Link></li>
              <li><Link to="/properties?type=Residential" className="text-gray-500 hover:text-accent text-sm">Residential</Link></li>
              <li><Link to="/properties?type=Commercial" className="text-gray-500 hover:text-accent text-sm">Commercial</Link></li>
              <li><Link to="/post-property" className="text-gray-500 hover:text-accent text-sm">List Your Property</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-500 text-sm">
                <MapPin className="w-4 h-4 mr-2" /> Baramati, Pune - 413102
              </li>
              <li className="flex items-center text-gray-500 text-sm">
                <Phone className="w-4 h-4 mr-2" /> +91 98765 43210
              </li>
              <li className="flex items-center text-gray-500 text-sm">
                <Mail className="w-4 h-4 mr-2" /> info@baramatiestates.com
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Social</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Baramati Estates. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;