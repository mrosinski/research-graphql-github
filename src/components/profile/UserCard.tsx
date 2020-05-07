import React from 'react'
import {
  Card,
  CardActions,
  CardContent,
  CardMedia as MuiCardMedia,
  Hidden,
  IconButton,
  Tooltip,
  Typography,
} from '@material-ui/core'
import { GitHub as GitHubIcon, Email as EmailIcon } from '@material-ui/icons'
import styled from 'styled-components'
import { User } from './types'

interface UserCardProps {
  user: User
}

export const UserCard: React.FC<UserCardProps> = ({ user }) => (
  <Card>
    <Hidden xsDown>
      <CardMedia image={user.avatarUrl} />
    </Hidden>
    <CardContent>
      <Typography variant='h5'>{user.name}</Typography>
      <Typography variant='h6' color='textSecondary'>
        {user.login}
      </Typography>
    </CardContent>
    <CardActions>
      <Tooltip title='Visit GitHub profile' arrow>
        <IconButton component='a' href={user.url}>
          <GitHubIcon />
        </IconButton>
      </Tooltip>
      {user.email && (
        <Tooltip title='Send email' arrow>
          <IconButton component='a' href={`mailto:${user.email}`}>
            <EmailIcon />
          </IconButton>
        </Tooltip>
      )}
    </CardActions>
  </Card>
)

const CardMedia = styled(MuiCardMedia)`
  padding-top: 100%;
  width: 100%;
`
