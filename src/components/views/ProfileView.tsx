import React from 'react'
import { Grid } from '@material-ui/core'
import { useParams } from 'react-router-dom'
import { useOrderDirection } from '../../state/order-direction'
import { useProfile } from '../../api/profile'
import { ContentContainer } from '../core/ContentContainer'
import { ScrollTopButton } from '../core/ScrollTopButton'
import { CenteredMessage } from '../core/CenteredMessage'
import { LoadingIndicator } from '../core/LoadingIndicator'
import { UserCard } from '../domain/UserCard'
import { RepositoryList } from '../domain/RepositoryList'

export const ProfileView: React.FC = () => {
  const { login } = useParams<{ login: string }>()
  const { orderDirection } = useOrderDirection()
  const { loading, error, data } = useProfile({ login, orderDirection })

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
