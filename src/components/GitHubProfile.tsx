import Image from 'next/image';
import { GitHubUser } from '@/types/github';
import { MapPin, Link as LinkIcon, Building, Users, UserPlus, Calendar } from 'lucide-react';

interface GitHubProfileProps {
  user: GitHubUser;
  className?: string;
}

export default function GitHubProfile({ user, className = '' }: GitHubProfileProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long'
    });
  };

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 ${className}`}>
      <div className="flex items-start gap-4 mb-4">
        <Image
          src={user.avatar_url}
          alt={`${user.name || user.login}'s avatar`}
          width={80}
          height={80}
          className="w-20 h-20 rounded-full border-2 border-gray-200 dark:border-gray-600"
        />
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {user.name || user.login}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">@{user.login}</p>
          {user.bio && (
            <p className="text-gray-700 dark:text-gray-300 mt-2">{user.bio}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {user.location && (
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <MapPin size={16} />
            <span>{user.location}</span>
          </div>
        )}
        
        {user.company && (
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <Building size={16} />
            <span>{user.company}</span>
          </div>
        )}
        
        {user.blog && (
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <LinkIcon size={16} />
            <a
              href={user.blog.startsWith('http') ? user.blog : `https://${user.blog}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {user.blog}
            </a>
          </div>
        )}
        
        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
          <Calendar size={16} />
          <span>Joined {formatDate(user.created_at)}</span>
        </div>
      </div>

      <div className="flex gap-6 text-sm">
        <div className="flex items-center gap-1">
          <Users size={16} />
          <span className="font-semibold">{user.followers}</span>
          <span className="text-gray-600 dark:text-gray-400">followers</span>
        </div>
        <div className="flex items-center gap-1">
          <UserPlus size={16} />
          <span className="font-semibold">{user.following}</span>
          <span className="text-gray-600 dark:text-gray-400">following</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="font-semibold">{user.public_repos}</span>
          <span className="text-gray-600 dark:text-gray-400">repositories</span>
        </div>
      </div>
    </div>
  );
}
