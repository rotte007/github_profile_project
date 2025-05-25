import React from 'react';
import { CheckCircle } from 'lucide-react';

const skills = [
  "Scalable Application Design",
  "Full-Stack Development",
  "Human-Computer Interaction",
  "User-Centric Design",
  "Data Structures & Algorithms",
  "Production-Ready Systems",
  "End-to-End Development",
  "Data Visualization",
  "Agile & Iterative",
  "Cross-Functional Collaboration",
  "Customer-Facing Features",
  "Ethical AI"
];

const CoreSkills = () => {
  return (
    <section className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <span className="bg-blue-100 text-blue-800 p-1 rounded mr-2">💼</span> Core Skills & Expertise
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div 
            key={index}
            className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 transition-colors rounded-lg p-3"
          >
            <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <span className="text-gray-800 font-medium">{skill}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreSkills;