import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import { GITHUB_API_TOKEN } from '../config'

export const githubApiClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://api.github.com/graphql',
    headers: {
      authorization: `bearer ${GITHUB_API_TOKEN}`,
    },
  }),
})
