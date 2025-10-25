export interface BlogPost {
  id: string
  title: string
  date: string
  content: string
  tags: string[]
  category: 'java' | 'javascript'
  excerpt: string
}
