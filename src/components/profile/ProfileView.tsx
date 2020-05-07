import React from 'react'
import { useParams } from 'react-router-dom'
import { ContentContainer } from '../core/ContentContainer'
import { UserCard } from './UserCard'
import { RepositoryList } from './RepositoryList'
import { Grid } from '@material-ui/core'
import { ScrollTopButton } from '../core/ScrollTopButton'
import { gql, useQuery } from '@apollo/client'
import { CenteredMessage } from '../core/CenteredMessage'
import { LoadingIndicator } from '../core/LoadingIndicator'

const GetProfileQuery = gql`
  query GetProfile($login: String!, $orderDirection: String!) {
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

export const ProfileView: React.FC = () => {
  const { login } = useParams<{ login: string }>()

  const { loading, error, data } = useQuery(GetProfileQuery, {
    variables: {
      login,
      orderDirection: 'ASC',
    },
  })

  return (
    <>
      {loading && <LoadingIndicator />}
      <ContentContainer>
        {error && (
          <CenteredMessage header={`No such user "${login}"`} description='Try your luck with another search' />
        )}
        {data && !error && (
          <Grid container spacing={2} justify='center'>
            <Grid item xs={12} sm={4} md={3}>
              <UserCard user={data.user} />
            </Grid>
            <Grid item xs={12} sm={8} md={6}>
              <RepositoryList repositories={data.user.repositories.nodes} />
            </Grid>
          </Grid>
        )}
      </ContentContainer>
      <ScrollTopButton />
    </>
  )
}
