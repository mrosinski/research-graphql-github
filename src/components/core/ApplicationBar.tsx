import React from 'react'
import {
  AppBar,
  Container,
  fade,
  Grid,
  Hidden,
  InputBase,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@material-ui/core'
import { Search as SearchIcon } from '@material-ui/icons'
import styled from 'styled-components'
import { APPLICATION_NAME } from '../../config'

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
                <SearchContainer>
                  <SearchIconContainer>
                    <SearchIcon />
                  </SearchIconContainer>
                  <SearchInput placeholder='Search people…' />
                </SearchContainer>
              </Toolbar>
            </Grid>
          </Grid>
        </Container>
      </AppBar>
    </Slide>
  )
}

const SearchContainer = styled.div`
  position: relative;
  border-radius: ${p => p.theme.shape.borderRadius}px;

  background-color: ${p => fade(p.theme.palette.common.white, 0.15)};
  &:hover {
    background-color: ${p => fade(p.theme.palette.common.white, 0.25)};
  }

  margin-left: 0;
  width: 100%;
  ${p => p.theme.breakpoints.up('sm')} {
    margin-left: ${p => p.theme.spacing(2)}px;
    width: auto;
  }
`

const SearchIconContainer = styled.div`
  padding: ${p => p.theme.spacing(0, 2)};
  height: 100%;
  position: absolute;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
`

const SearchInput = styled(InputBase)`
  color: inherit;
  width: 100%;

  input {
    padding: ${p => p.theme.spacing(1, 1, 1, 0)};
    padding-left: ${p => `calc(1em + ${p.theme.spacing(4)}px)`};
    transition: ${p => p.theme.transitions.create('width')};

    ${p => p.theme.breakpoints.up('sm')} {
      width: 14ch;
      &:focus {
        width: 35ch;
      }
    }
  }
`
