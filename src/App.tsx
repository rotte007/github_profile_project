import React, { useState } from 'react';
import { Github, Linkedin, Mail, Globe, ChevronDown, ChevronUp, Star, GitBranch, Award, Lightbulb } from 'lucide-react';
import Header from './components/Header';
import CoreSkills from './components/CoreSkills';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import GitHubStats from './components/GitHubStats';
import Connect from './components/Connect';
import Footer from './components/Footer';
import PreviewMarkdown from './components/PreviewMarkdown';

function App() {
  const [showMarkdown, setShowMarkdown] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <nav className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-2">
            <Github className="h-6 w-6" />
            <span className="font-bold text-lg">GitHub Profile Showcase</span>
          </div>
          <button 
            onClick={() => setShowMarkdown(!showMarkdown)}
            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            {showMarkdown ? (
              <>
                <span>View Preview</span>
                <ChevronUp className="h-4 w-4" />
              </>
            ) : (
              <>
                <span>View Markdown</span>
                <ChevronDown className="h-4 w-4" />
              </>
            )}
          </button>
        </nav>
        
        {showMarkdown ? (
          <PreviewMarkdown />
        ) : (
          <div className="space-y-10">
            <Header />
            <CoreSkills />
            <TechStack />
            <Projects />
            <GitHubStats />
            <Connect />
            <Footer />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;