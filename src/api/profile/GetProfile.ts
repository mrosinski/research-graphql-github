import { gql } from '@apollo/client'
import { OrderDirection } from '../common'
import { Repository, User } from './types'

export interface GetProfile {
  user: User & {
    repositories: {
      nodes: Repository[]
    }
  }
}

export interface GetProfileVariables {
  login: string
  orderDirection: OrderDirection
}

export const GetProfile = gql`
  query GetProfile($login: String!, $orderDirection: OrderDirection!) {
    user(login: $login) {
      avatarUrl
      name
      login
      email
      url
      repositories(orderBy: { field: NAME, direction: $orderDirection }, first: 15) {
        nodes {
          id
          url
          nameWithOwner
          description
        }
      }
    }
  }
`
