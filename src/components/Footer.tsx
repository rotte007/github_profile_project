import React from 'react';
import { Quote } from 'lucide-react';

const Footer = () => {
  return (
    <section className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <span className="bg-blue-100 text-blue-800 p-1 rounded mr-2">✍️</span> Random Dev Quote
        </h2>
        
        <div className="flex items-start">
          <Quote className="w-12 h-12 text-gray-300 flex-shrink-0 mr-4" />
          <div>
            <blockquote className="text-lg italic text-gray-700">
              "Your code is like your signature. Make it clean, elegant, and something you're proud to put your name on."
            </blockquote>
            <p className="mt-2 text-right text-gray-500">- Unknown</p>
          </div>
        </div>
      </div>
      
      <div className="text-center text-gray-500 text-sm">
        <p>⭐️ Don't forget to star or follow to stay updated with my latest projects! ⭐️</p>
      </div>
    </section>
  );
};

export default Footer;