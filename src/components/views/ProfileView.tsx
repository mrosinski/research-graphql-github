import React, { useEffect } from 'react'
import { Grid } from '@material-ui/core'
import { useHistory, useParams } from 'react-router-dom'
import { useProfile } from '../../api/profile'
import { useOrderDirection } from '../../state/order-direction'
import { ContentContainer } from '../core/ContentContainer'
import { ScrollTopButton } from '../core/ScrollTopButton'
import { LoadingIndicator } from '../core/LoadingIndicator'
import { UserCard } from '../domain/UserCard'
import { RepositoryList } from '../domain/RepositoryList'
import { Routing } from '../../routing'

export const ProfileView: React.FC = () => {
  const { push } = useHistory()
  const { login } = useParams<{ login: string }>()
  const { orderDirection } = useOrderDirection()
  const { loading, error, data } = useProfile({ login, orderDirection })

  useEffect(
    () => error && push(Routing.Profile.NotFound(login)),
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [login, error]
  )

  return (
    <>
      {loading && <LoadingIndicator />}
      <ContentContainer>
        {data && (
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
