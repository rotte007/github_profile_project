import React from 'react';
import { GraduationCap, Briefcase, Brain, Code, Sparkles, Zap, Award } from 'lucide-react';
import profilePic from './image.jpg';

const Header = () => {
  return (
    <section className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 h-32"></div>
        <div className="absolute -bottom-16 left-8">
          <img 
            src={profilePic}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
          />
        </div>
      </div>
      
      <div className="pt-20 px-8 pb-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">👋 Hi there, I'm Rachana Rotte</h1>
            <p className="mt-2 text-lg text-blue-700 font-medium">
              Cloud-savvy full-stack engineer turning business problems into production-grade, serverless solutions
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800">
              <Award className="w-4 h-4 mr-1" />
              AWS Certified
            </span>
          </div>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start space-x-3">
            <GraduationCap className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-medium text-gray-900">Education</h3>
              <p className="text-gray-700">Computer Science Graduate Student at the University of Florida</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <Briefcase className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-medium text-gray-900">Experience</h3>
              <p className="text-gray-700">Software Engineer with 3+ YOE, Ex-Deloitte USI</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <Brain className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-medium text-gray-900">Background</h3>
              <p className="text-gray-700">Always a Gator🐊 and NITian🎓</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <Code className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-medium text-gray-900">Expertise</h3>
              <p className="text-gray-700">Java, Python, AWS, Spring Microservices, Node.js, Databases</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <Sparkles className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-medium text-gray-900">Core Principle</h3>
              <p className="text-gray-700">BuiltForImpact</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <Zap className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-medium text-gray-900">Fun Fact</h3>
              <p className="text-gray-700">I'm a Problem Solver, Cook, Finance & AI enthusiast!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;