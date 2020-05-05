import React from 'react'
import { Avatar, Grid, Hidden, List, ListItem, ListItemAvatar, ListItemText, ListSubheader } from '@material-ui/core'
import { Folder as RepositoryIcon } from '@material-ui/icons'
import { SortButton } from '../core/SortButton'

interface Repository {
  name: string
  description: string
  githubUrl: string
}

interface RepositoryListProps {
  repositories: Repository[]
}

export const RepositoryList: React.FC<RepositoryListProps> = ({ repositories }) => (
  <List
    subheader={
      <ListSubheader disableSticky>
        <Grid container justify='space-between'>
          <Grid item>Repositories</Grid>
          <Grid item>
            <SortButton label='Sort by name' />
          </Grid>
        </Grid>
      </ListSubheader>
    }
  >
    {repositories.map(repository => (
      <ListItem key={repository.name} button component='a' href={repository.githubUrl}>
        <Hidden xsDown>
          <ListItemAvatar>
            <Avatar>
              <RepositoryIcon />
            </Avatar>
          </ListItemAvatar>
        </Hidden>
        <ListItemText primary={repository.name} secondary={repository.description} />
      </ListItem>
    ))}
  </List>
)
