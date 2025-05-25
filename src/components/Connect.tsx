import React from 'react';
import { Linkedin, Mail, Globe } from 'lucide-react';

const Connect = () => {
  return (
    <section className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <span className="bg-blue-100 text-blue-800 p-1 rounded mr-2">🤝</span> Let's Connect!
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <a 
          href="https://www.linkedin.com/in/rotte-rachana/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors"
        >
          <div className="bg-blue-100 p-3 rounded-full mr-4">
            <Linkedin className="w-6 h-6 text-blue-700" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">LinkedIn</h3>
            <p className="text-sm text-gray-600">Professional Network</p>
          </div>
        </a>
        
        <a 
          href="https://rachana-portfolio.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors"
        >
          <div className="bg-purple-100 p-3 rounded-full mr-4">
            <Globe className="w-6 h-6 text-purple-700" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Portfolio</h3>
            <p className="text-sm text-gray-600">Projects & Experience</p>
          </div>
        </a>
        
        <a 
          href="mailto:rachana1603@gmail.com" 
          className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors"
        >
          <div className="bg-green-100 p-3 rounded-full mr-4">
            <Mail className="w-6 h-6 text-green-700" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Email</h3>
            <p className="text-sm text-gray-600">rachana1603@gmail.com</p>
          </div>
        </a>
      </div>
      
      <div className="mt-6 bg-blue-50 border border-blue-100 rounded-lg p-4">
        <p className="text-blue-800 text-center">
          🚀 I'm always open to <strong>collaborations</strong>, <strong>mentorship</strong>, and <strong>new opportunities</strong>. 
          Feel free to reach out!
        </p>
      </div>
    </section>
  );
};

export default Connect;