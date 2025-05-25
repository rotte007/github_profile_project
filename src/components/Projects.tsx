import React from 'react';
import { ExternalLink, Github, Award, BarChart3, ShoppingCart } from 'lucide-react';

const projects = [
  {
    title: "AWS Certified Developer Associate",
    description: "Earned professional AWS certification demonstrating expertise in cloud services and architecture",
    icon: <Award className="w-8 h-8 text-orange-500" />,
    metrics: "Global industry recognition",
    tech: ["AWS", "Cloud Architecture", "Serverless"],
    links: []
  },
  {
    title: "Serverless Notes Web App",
    description: "Designed a secure note-taking app with Google Auth using AWS Lambda, API Gateway & DynamoDB.",
    icon: <ExternalLink className="w-8 h-8 text-blue-500" />,
    metrics: "Scaled to 500+ daily users",
    tech: ["AWS Lambda", "API Gateway", "DynamoDB", "Google Auth"],
    links: [
      { name: "GitHub", icon: <Github className="w-4 h-4" />, url: "#" },
      { name: "Demo", icon: <ExternalLink className="w-4 h-4" />, url: "#" }
    ]
  },
  {
    title: "Incident Data Analyzer",
    description: "Built a Python/Flask dashboard with Plotly & Google Maps for geospatial clustering of 1,000+ police reports.",
    icon: <BarChart3 className="w-8 h-8 text-green-500" />,
    metrics: "Processed 1,000+ reports",
    tech: ["Python", "Flask", "Plotly", "Google Maps API"],
    links: [
      { name: "GitHub", icon: <Github className="w-4 h-4" />, url: "#" }
    ]
  },
  {
    title: "E-Commerce 'My Cart'",
    description: "Developed a Java/Spring Boot microservices storefront with secure payments and responsive UI.",
    icon: <ShoppingCart className="w-8 h-8 text-purple-500" />,
    metrics: "Reduced checkout time by 30%",
    tech: ["Java", "Spring Boot", "Microservices", "React"],
    links: [
      { name: "GitHub", icon: <Github className="w-4 h-4" />, url: "#" },
      { name: "Demo", icon: <ExternalLink className="w-4 h-4" />, url: "#" }
    ]
  }
];

const Projects = () => {
  return (
    <section className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <span className="bg-blue-100 text-blue-800 p-1 rounded mr-2">🌟</span> Notable Projects & Accomplishments
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="border border-gray-200 rounded-lg p-6 transition-all hover:shadow-md"
          >
            <div className="flex items-start space-x-4">
              <div className="bg-gray-100 p-3 rounded-lg">
                {project.icon}
              </div>
              
              <div className="flex-1">
                <h3 className="font-bold text-lg text-gray-900">{project.title}</h3>
                <p className="mt-1 text-gray-600 text-sm">{project.description}</p>
                
                {project.metrics && (
                  <div className="mt-3 flex items-center">
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                      📈 {project.metrics}
                    </span>
                  </div>
                )}
                
                <div className="mt-3">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {project.links.length > 0 && (
                  <div className="mt-4 flex space-x-3">
                    {project.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.url}
                        className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
                      >
                        {link.icon}
                        <span className="ml-1">{link.name}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-gray-600 italic">
          👀 <em>Want to see more? Check out my repos and ⭐️ a project that interests you!</em>
        </p>
      </div>
    </section>
  );
};

export default Projects;