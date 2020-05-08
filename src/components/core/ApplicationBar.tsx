import React from 'react'
import { AppBar, Container, Grid, Hidden, Slide, Toolbar, Typography, useScrollTrigger } from '@material-ui/core'
import { APPLICATION_NAME } from '../../config'
import { Search } from './Search'

export const ApplicationBar: React.FC = () => {
  const isScrolled = useScrollTrigger()

  return (
    <Slide direction='down' in={!isScrolled}>
      <AppBar position='sticky'>
        <Container>
          <Grid container spacing={2} justify='center'>
            <Grid item xs={12} md={9}>
              <Toolbar disableGutters>
                <Hidden xsDown>
                  <Typography variant='h6' component='h1' noWrap>
                    {APPLICATION_NAME}
                  </Typography>
                </Hidden>
                <Search />
              </Toolbar>
            </Grid>
          </Grid>
        </Container>
      </AppBar>
    </Slide>
  )
}
