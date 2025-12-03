import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-16 animate-fade-in">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About Baramati Estates</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          We provide trusted property listings for Baramati and nearby areas. 
          Our mission is to connect buyers, sellers, and agents through a simple, secure, and easy-to-use platform.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center animate-slide-up">
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Why Choose Us?</h2>
            <div className="space-y-4">
                <div className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-accent font-bold text-xs mt-1">1</div>
                    <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">Local Expertise</h3>
                        <p className="text-gray-500">Deep understanding of Baramati's real estate market trends and property values.</p>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-accent font-bold text-xs mt-1">2</div>
                    <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">Verified Listings</h3>
                        <p className="text-gray-500">We aim to provide genuine listings to ensure a safe transaction experience.</p>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-accent font-bold text-xs mt-1">3</div>
                    <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">Technology Driven</h3>
                        <p className="text-gray-500">Using modern tech like AI to help you list better and search faster.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
            <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="About us" 
                className="w-full h-full object-cover"
            />
        </div>
      </div>
    </div>
  );
};

export default About;