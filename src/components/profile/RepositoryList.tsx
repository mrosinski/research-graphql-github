import React from 'react'
import { Avatar, Grid, Hidden, List, ListItem, ListItemAvatar, ListItemText, ListSubheader } from '@material-ui/core'
import { Folder as RepositoryIcon } from '@material-ui/icons'
import { OrderButton } from '../core/OrderButton'
import { CenteredMessage } from '../core/CenteredMessage'

interface Repository {
  id: string
  nameWithOwner: string
  description: string
  url: string
}

interface RepositoryListProps {
  repositories: Repository[]
}

export const RepositoryList: React.FC<RepositoryListProps> = ({ repositories }) =>
  repositories.length > 0 ? (
    <List
      subheader={
        <ListSubheader disableSticky>
          <Grid container justify='space-between'>
            <Grid item>Repositories</Grid>
            <Grid item>
              <OrderButton label='Order by name' />
            </Grid>
          </Grid>
        </ListSubheader>
      }
    >
      {repositories.map(repository => (
        <ListItem key={repository.id} button component='a' href={repository.url}>
          <Hidden xsDown>
            <ListItemAvatar>
              <Avatar>
                <RepositoryIcon />
              </Avatar>
            </ListItemAvatar>
          </Hidden>
          <ListItemText primary={repository.nameWithOwner} secondary={repository.description} />
        </ListItem>
      ))}
    </List>
  ) : (
    <CenteredMessage header='No public repositories to show' description='Give it a shot with another search' />
  )
