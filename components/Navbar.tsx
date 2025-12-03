import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Building2, PenTool, Info, ArrowRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/', icon: <Home className="w-4 h-4 mr-1.5" /> },
    { name: 'Properties', path: '/properties', icon: <Building2 className="w-4 h-4 mr-1.5" /> },
    { name: 'About', path: '/about', icon: <Info className="w-4 h-4 mr-1.5" /> },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled || isOpen ? 'glass-nav py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center group">
            <Link to="/" className={`text-2xl font-bold tracking-tight transition-colors duration-300 flex items-center ${
              scrolled || isOpen || location.pathname !== '/' ? 'text-primary' : 'text-white'
            }`}>
              <span className="text-accent mr-1">Baramati</span>Estates
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? 'text-accent bg-accent-light'
                    : (scrolled || location.pathname !== '/' ? 'text-gray-600 hover:text-accent hover:bg-gray-50' : 'text-white/90 hover:text-white hover:bg-white/10')
                }`}
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
            
            <Link
              to="/post-property"
              className={`ml-4 flex items-center px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${
                 scrolled || location.pathname !== '/' 
                 ? 'bg-primary text-white hover:bg-accent' 
                 : 'bg-white text-primary hover:bg-gray-100'
              }`}
            >
              List Property <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors ${
                scrolled || isOpen || location.pathname !== '/' ? 'text-gray-600 hover:text-primary hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-xl absolute w-full left-0 animate-fade-in-up">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                   isActive(link.path)
                    ? 'text-accent bg-accent-light'
                    : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                }`}
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
             <Link
                to="/post-property"
                onClick={() => setIsOpen(false)}
                className="flex items-center w-full mt-4 px-4 py-3 rounded-xl text-base font-medium text-white bg-primary hover:bg-accent transition-colors shadow-md"
              >
                <PenTool className="w-4 h-4 mr-2" />
                List Your Property
              </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;