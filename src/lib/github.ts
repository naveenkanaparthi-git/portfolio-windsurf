import { GitHubRepo, GitHubUser } from '@/types/github';

const GITHUB_API_BASE = 'https://api.github.com';

export class GitHubService {
  private static async fetchWithErrorHandling(url: string): Promise<unknown> {
    try {
      const response = await fetch(url, {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'Portfolio-App'
        }
      });

      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('GitHub API fetch error:', error);
      throw error;
    }
  }

  static async getUserProfile(username: string): Promise<GitHubUser> {
    const url = `${GITHUB_API_BASE}/users/${username}`;
    return this.fetchWithErrorHandling(url) as Promise<GitHubUser>;
  }

  static async getUserRepositories(username: string, options?: {
    sort?: 'created' | 'updated' | 'pushed' | 'full_name';
    direction?: 'asc' | 'desc';
    per_page?: number;
    type?: 'all' | 'owner' | 'member';
  }): Promise<GitHubRepo[]> {
    const params = new URLSearchParams({
      sort: options?.sort || 'updated',
      direction: options?.direction || 'desc',
      per_page: (options?.per_page || 100).toString(),
      type: options?.type || 'owner'
    });

    const url = `${GITHUB_API_BASE}/users/${username}/repos?${params}`;
    return this.fetchWithErrorHandling(url) as Promise<GitHubRepo[]>;
  }

  static async getRepositoryLanguages(username: string, repoName: string): Promise<Record<string, number>> {
    const url = `${GITHUB_API_BASE}/repos/${username}/${repoName}/languages`;
    return this.fetchWithErrorHandling(url) as Promise<Record<string, number>>;
  }

  static filterRepositories(repos: GitHubRepo[], filters?: {
    excludeForks?: boolean;
    excludeArchived?: boolean;
    minStars?: number;
    languages?: string[];
    topics?: string[];
  }): GitHubRepo[] {
    return repos.filter(repo => {
      if (filters?.excludeForks && repo.fork) return false;
      if (filters?.excludeArchived && repo.archived) return false;
      if (filters?.minStars && repo.stargazers_count < filters.minStars) return false;
      if (filters?.languages && filters.languages.length > 0) {
        if (!repo.language || !filters.languages.includes(repo.language)) return false;
      }
      if (filters?.topics && filters.topics.length > 0) {
        if (!repo.topics.some(topic => filters.topics!.includes(topic))) return false;
      }
      return true;
    });
  }

  static sortRepositories(repos: GitHubRepo[], sortBy: 'stars' | 'forks' | 'updated' | 'created' | 'name' = 'updated'): GitHubRepo[] {
    return [...repos].sort((a, b) => {
      switch (sortBy) {
        case 'stars':
          return b.stargazers_count - a.stargazers_count;
        case 'forks':
          return b.forks_count - a.forks_count;
        case 'updated':
          return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
        case 'created':
          return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });
  }
}
