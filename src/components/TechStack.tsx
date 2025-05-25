import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface TechCategory {
  name: string;
  techs: Array<{
    name: string;
    color: string;
    isPrimary?: boolean;
  }>;
}

const techCategories: TechCategory[] = [
  {
    name: "Programming Languages & Scripting",
    techs: [
      { name: "Java", color: "bg-orange-500", isPrimary: true },
      { name: "Python", color: "bg-blue-600", isPrimary: true },
      { name: "C#", color: "bg-green-600" },
      { name: "C++", color: "bg-blue-800" },
      { name: "TypeScript", color: "bg-blue-500", isPrimary: true },
      { name: "Perl", color: "bg-purple-700" },
      { name: "PHP", color: "bg-indigo-600" },
      { name: "Bash Script", color: "bg-gray-800" },
    ]
  },
  {
    name: "Frontend & UI Tools",
    techs: [
      { name: "HTML5", color: "bg-orange-600" },
      { name: "CSS3", color: "bg-blue-500" },
      { name: "React", color: "bg-blue-400", isPrimary: true },
      { name: "Angular", color: "bg-red-600" },
      { name: "Next.js", color: "bg-black", isPrimary: true },
      { name: "TailwindCSS", color: "bg-teal-500", isPrimary: true },
      { name: "Bootstrap", color: "bg-purple-600" },
      { name: "jQuery", color: "bg-blue-600" },
      { name: "Vite", color: "bg-indigo-500" },
    ]
  },
  {
    name: "Backend & APIs",
    techs: [
      { name: "Node.js", color: "bg-green-600", isPrimary: true },
      { name: "Express.js", color: "bg-gray-700", isPrimary: true },
      { name: "Spring", color: "bg-green-500", isPrimary: true },
      { name: "Django", color: "bg-green-800" },
      { name: "Flask", color: "bg-black" },
      { name: "FastAPI", color: "bg-teal-600" },
      { name: "GraphQL", color: "bg-pink-600" },
      { name: "JWT", color: "bg-purple-800" },
    ]
  },
  {
    name: "Databases & Data Storage",
    techs: [
      { name: "MySQL", color: "bg-blue-700", isPrimary: true },
      { name: "PostgreSQL", color: "bg-blue-800", isPrimary: true },
      { name: "MongoDB", color: "bg-green-600" },
      { name: "DynamoDB", color: "bg-blue-900", isPrimary: true },
      { name: "Elasticsearch", color: "bg-blue-500" },
    ]
  },
  {
    name: "Cloud Platforms & Services",
    techs: [
      { name: "AWS", color: "bg-orange-500", isPrimary: true },
      { name: "Google Cloud", color: "bg-blue-500" },
    ]
  },
  {
    name: "DevOps, CI/CD & Version Control",
    techs: [
      { name: "Docker", color: "bg-blue-500", isPrimary: true },
      { name: "Kubernetes", color: "bg-blue-600", isPrimary: true },
      { name: "Jenkins", color: "bg-red-500" },
      { name: "Ansible", color: "bg-red-600" },
      { name: "Git", color: "bg-orange-600", isPrimary: true },
      { name: "GitHub", color: "bg-gray-800" },
      { name: "GitLab", color: "bg-orange-700" },
      { name: "Jira", color: "bg-blue-600" },
    ]
  },
];

const TechStack = () => {
  const [expandedCategories, setExpandedCategories] = useState<string[]>(
    ["Programming Languages & Scripting", "Frontend & UI Tools", "Backend & APIs", "Databases & Data Storage"]
  );

  const toggleCategory = (category: string) => {
    if (expandedCategories.includes(category)) {
      setExpandedCategories(expandedCategories.filter(cat => cat !== category));
    } else {
      setExpandedCategories([...expandedCategories, category]);
    }
  };

  return (
    <section className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <span className="bg-blue-100 text-blue-800 p-1 rounded mr-2">💻</span> Tech Stack
      </h2>
      
      <div className="space-y-6">
        {techCategories.map((category) => (
          <div key={category.name} className="border border-gray-200 rounded-lg overflow-hidden">
            <div 
              className="flex justify-between items-center p-4 bg-gray-50 cursor-pointer"
              onClick={() => toggleCategory(category.name)}
            >
              <h3 className="font-bold text-gray-800">{category.name}</h3>
              {expandedCategories.includes(category.name) ? (
                <ChevronUp className="w-5 h-5 text-gray-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-600" />
              )}
            </div>
            
            {expandedCategories.includes(category.name) && (
              <div className="p-4 bg-white">
                <div className="flex flex-wrap gap-2">
                  {category.techs.map((tech, index) => (
                    <span 
                      key={index}
                      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${tech.color} text-white ${tech.isPrimary ? 'ring-2 ring-offset-2 ring-blue-300' : ''}`}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;