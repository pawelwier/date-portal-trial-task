import { User } from './User'

export interface SearchResults {
  cursors: {
    after: string
  }
  items: User[]
  total: number
}
