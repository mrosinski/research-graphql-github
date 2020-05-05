import React from 'react'
import { ContentContainer } from '../core/ContentContainer'
import { UserCard } from './UserCard'
import { RepositoryList } from './RepositoryList'
import { Grid } from '@material-ui/core'
import { ScrollTopFab } from '../core/ScrollTopFab'

export const ProfileView: React.FC = () => (
  <>
    <ContentContainer>
      <Grid container spacing={2} justify='center'>
        <Grid item xs={12} sm={4} md={3}>
          <UserCard
            user={{
              avatarUrl:
                'https://avatars3.githubusercontent.com/u/6419867?s=460&u=4e833e4a7a69352d526cccd7b27e0776f142fa25&v=4',
              name: 'Marcin Rosiński',
              nick: 'mrosinski',
              githubUrl: 'https://github.com/mrosinski',
              email: 'mrosinski@users.noreply.github.com',
            }}
          />
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          <RepositoryList
            repositories={[...new Array(10)].map((_, index) => ({
              name: `research-graphql-github-${index}`,
              description: 'A simple research of GraphQL features on the example of GitHub API v4.',
              githubUrl: 'https://github.com/mrosinski/research-graphql-github',
            }))}
          />
        </Grid>
      </Grid>
    </ContentContainer>

    <ScrollTopFab />
  </>
)
