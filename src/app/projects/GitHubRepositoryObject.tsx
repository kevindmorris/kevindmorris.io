export default interface GitHubRepositoryObject {
  id: number;
  description: string;
  homepage: string;
  html_url: string;
  language: string;
  name: string;
  pushed_at: string;
  topics: string[];
  updated_at: string;
}
