'use client';

import { useState, useEffect } from 'react';
import { GitHubRepo, GitHubUser } from '@/types/github';
import { GitHubService } from '@/lib/github';
import ProjectCard from './ProjectCard';
import GitHubProfile from './GitHubProfile';
import { Search, Loader2, AlertCircle } from 'lucide-react';

interface ProjectsSectionProps {
  username: string;
  className?: string;
}

export default function ProjectsSection({ username, className = '' }: ProjectsSectionProps) {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [filteredRepos, setFilteredRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('');
  const [sortBy, setSortBy] = useState<'stars' | 'forks' | 'updated' | 'created' | 'name'>('updated');
  const [showForks, setShowForks] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const [userProfile, repositories] = await Promise.all([
          GitHubService.getUserProfile(username),
          GitHubService.getUserRepositories(username, { per_page: 100 })
        ]);

        setUser(userProfile);
        setRepos(repositories);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch GitHub data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);

  useEffect(() => {
    let filtered = [...repos];

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(repo =>
        repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (repo.description && repo.description.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by language
    if (selectedLanguage) {
      filtered = filtered.filter(repo => repo.language === selectedLanguage);
    }

    // Filter forks
    if (!showForks) {
      filtered = filtered.filter(repo => !repo.fork);
    }

    // Sort repositories
    filtered = GitHubService.sortRepositories(filtered, sortBy);

    setFilteredRepos(filtered);
  }, [repos, searchTerm, selectedLanguage, sortBy, showForks]);

  const languages = Array.from(new Set(repos.map(repo => repo.language).filter(Boolean))) as string[];

  if (loading) {
    return (
      <div className={`flex items-center justify-center py-12 ${className}`}>
        <Loader2 className="animate-spin h-8 w-8 text-blue-600" />
        <span className="ml-2 text-gray-600 dark:text-gray-400">Loading GitHub projects...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`flex items-center justify-center py-12 ${className}`}>
        <AlertCircle className="h-8 w-8 text-red-500 mr-2" />
        <span className="text-red-600 dark:text-red-400">{error}</span>
      </div>
    );
  }

  return (
    <div className={className}>
      {user && <GitHubProfile user={user} className="mb-8" />}
      
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Projects ({filteredRepos.length})
        </h2>
        
        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">All Languages</option>
            {languages.map(language => (
              <option key={language} value={language}>{language}</option>
            ))}
          </select>
          
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'stars' | 'forks' | 'updated' | 'created' | 'name')}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="updated">Recently Updated</option>
            <option value="created">Recently Created</option>
            <option value="stars">Most Stars</option>
            <option value="forks">Most Forks</option>
            <option value="name">Name</option>
          </select>
          
          <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <input
              type="checkbox"
              checked={showForks}
              onChange={(e) => setShowForks(e.target.checked)}
              className="rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500"
            />
            Show Forks
          </label>
        </div>
      </div>

      {/* Projects Grid */}
      {filteredRepos.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRepos.map(repo => (
            <ProjectCard key={repo.id} repo={repo} />
          ))}
        </div>
      ) : repos.length === 0 ? (
        <div className="text-center py-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm">
            <div className="text-gray-400 mb-4">
              <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              GitHub Projects Coming Soon
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I&apos;m currently working on exciting projects that will be published to GitHub soon. 
              Check back later to see my latest work!
            </p>
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
              Visit GitHub Profile
            </a>
          </div>
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400">
            No projects found matching your criteria.
          </p>
        </div>
      )}
    </div>
  );
}
