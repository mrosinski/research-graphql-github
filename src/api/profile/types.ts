export interface User {
  avatarUrl: string
  name: string
  login: string
  url: string
  email?: string
}

export interface Repository {
  id: string
  nameWithOwner: string
  description: string
  url: string
}
