import React from 'react'
import { Fab, useScrollTrigger, Zoom } from '@material-ui/core'
import { KeyboardArrowUp as ScrollTopIcon } from '@material-ui/icons'
import styled from 'styled-components'

export const ScrollTopButton: React.FC = () => {
  const isScrolled = useScrollTrigger()

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <Zoom in={isScrolled}>
      <ButtonContainer onClick={scrollTop}>
        <Fab color='secondary'>
          <ScrollTopIcon fontSize='large' />
        </Fab>
      </ButtonContainer>
    </Zoom>
  )
}

const ButtonContainer = styled.div`
  position: fixed;
  bottom: ${p => p.theme.spacing(4)}px;
  right: ${p => p.theme.spacing(4)}px;
`
