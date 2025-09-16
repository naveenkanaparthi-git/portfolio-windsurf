import { GitHubRepo } from '@/types/github';
import { ExternalLink, Star, GitFork, Calendar } from 'lucide-react';

interface ProjectCardProps {
  repo: GitHubRepo;
  className?: string;
}

export default function ProjectCard({ repo, className = '' }: ProjectCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getLanguageColor = (language: string | null) => {
    const colors: Record<string, string> = {
      JavaScript: '#f1e05a',
      TypeScript: '#2b7489',
      Python: '#3572A5',
      Java: '#b07219',
      'C++': '#f34b7d',
      'C#': '#239120',
      PHP: '#4F5D95',
      Ruby: '#701516',
      Go: '#00ADD8',
      Rust: '#dea584',
      Swift: '#ffac45',
      Kotlin: '#F18E33',
      Dart: '#00B4AB',
      HTML: '#e34c26',
      CSS: '#1572B6',
      Shell: '#89e051',
      Vue: '#2c3e50',
      React: '#61DAFB'
    };
    return colors[language || ''] || '#6b7280';
  };

  return (
    <div className={`group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-white dark:hover:bg-gray-800 ${className}`}>
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {repo.name}
        </h3>
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-gray-100 dark:bg-gray-700 rounded-xl text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200 transform hover:scale-110"
          aria-label="View on GitHub"
        >
          <ExternalLink size={18} />
        </a>
      </div>

      {repo.description && (
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 line-clamp-3 leading-relaxed">
          {repo.description}
        </p>
      )}

      <div className="flex items-center gap-4 mb-6 text-sm">
        {repo.language && (
          <div className="flex items-center gap-2 px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: getLanguageColor(repo.language) }}
            />
            <span className="font-medium text-gray-700 dark:text-gray-300">{repo.language}</span>
          </div>
        )}
        
        {repo.stargazers_count > 0 && (
          <div className="flex items-center gap-1 text-yellow-600 dark:text-yellow-400">
            <Star size={16} className="fill-current" />
            <span className="font-medium">{repo.stargazers_count}</span>
          </div>
        )}
        
        {repo.forks_count > 0 && (
          <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
            <GitFork size={16} />
            <span className="font-medium">{repo.forks_count}</span>
          </div>
        )}
      </div>

      {repo.topics && repo.topics.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {repo.topics.slice(0, 3).map((topic) => (
            <span
              key={topic}
              className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-700 dark:text-blue-300 rounded-full border border-blue-200/50 dark:border-blue-700/50"
            >
              {topic}
            </span>
          ))}
          {repo.topics.length > 3 && (
            <span className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-600">
              +{repo.topics.length - 3}
            </span>
          )}
        </div>
      )}

      <div className="flex items-center justify-between pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
          <Calendar size={14} />
          <span>Updated {formatDate(repo.updated_at)}</span>
        </div>
        
        {repo.homepage && (
          <a
            href={repo.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-medium rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105"
          >
            Live Demo
            <ExternalLink size={12} />
          </a>
        )}
      </div>
    </div>
  );
}
