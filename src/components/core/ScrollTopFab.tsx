import React from 'react'
import { Fab, useScrollTrigger, Zoom } from '@material-ui/core'
import { KeyboardArrowUp as ScrollTopIcon } from '@material-ui/icons'
import styled from 'styled-components'

export const ScrollTopFab: React.FC = () => {
  const isScrolled = useScrollTrigger()

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <Zoom in={isScrolled}>
      <FabContainer onClick={scrollTop}>
        <Fab color='secondary'>
          <ScrollTopIcon fontSize='large' />
        </Fab>
      </FabContainer>
    </Zoom>
  )
}

const FabContainer = styled.div`
  position: fixed;
  bottom: ${p => p.theme.spacing(4)}px;
  right: ${p => p.theme.spacing(4)}px;
`
