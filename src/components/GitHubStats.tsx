import React, { useState } from 'react';
import { BarChart3, GitBranch, GitCommit } from 'lucide-react';

const GitHubStats = () => {
  const [theme, setTheme] = useState('default');
  
  return (
    <section className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <span className="bg-blue-100 text-blue-800 p-1 rounded mr-2">📊</span> GitHub Stats
      </h2>
      
      <div className="flex items-center justify-end mb-4 space-x-2">
        <span className="text-sm text-gray-600">Theme:</span>
        <select 
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          className="text-sm border border-gray-300 rounded p-1"
        >
          <option value="default">Default</option>
          <option value="dark">Dark</option>
          <option value="radical">Radical</option>
          <option value="merko">Merko</option>
          <option value="tokyonight">Tokyo Night</option>
        </select>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-gray-200 rounded-lg p-4 flex flex-col items-center">
          <div className="flex items-center mb-2 text-gray-700">
            <GitCommit className="w-5 h-5 mr-2" />
            <span>Stats Overview</span>
          </div>
          <div className="w-full bg-gray-100 rounded-lg p-4 h-48 flex items-center justify-center">
            <img 
              src="https://github-readme-stats.vercel.app/api?username=rotte007&theme=default&hide_border=false&include_all_commits=true&count_private=false" 
              alt="GitHub Stats"
              className="max-w-full max-h-full"
            />
          </div>
        </div>
        
        <div className="border border-gray-200 rounded-lg p-4 flex flex-col items-center">
          <div className="flex items-center mb-2 text-gray-700">
            <GitBranch className="w-5 h-5 mr-2" />
            <span>Contribution Streak</span>
          </div>
          <div className="w-full bg-gray-100 rounded-lg p-4 h-48 flex items-center justify-center">
            <img 
              src="https://nirzak-streak-stats.vercel.app/?user=rotte007&theme=default&hide_border=false" 
              alt="GitHub Streak"
              className="max-w-full max-h-full"
            />
          </div>
        </div>
      </div>
      
      <div className="mt-6 border border-gray-200 rounded-lg p-4 flex flex-col items-center">
        <div className="flex items-center mb-2 text-gray-700">
          <BarChart3 className="w-5 h-5 mr-2" />
          <span>Top Languages</span>
        </div>
        <div className="w-full bg-gray-100 rounded-lg p-4 flex items-center justify-center">
          <img 
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=rotte007&theme=default&hide_border=false&include_all_commits=true&count_private=false&layout=compact" 
            alt="Top Languages"
            className="max-w-full max-h-64"
          />
        </div>
      </div>
      
      <div className="mt-6 text-center">
        <div className="inline-block bg-gray-100 px-4 py-2 rounded-lg">
          <span className="text-gray-600">Profile visits: </span>
          <img 
            src="https://komarev.com/ghpvc/?username=rotte007&style=flat&color=grey&label=PROFILE+VIEWS" 
            alt="Visit Counter"
            className="inline-block"
          />
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;