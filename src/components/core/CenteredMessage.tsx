import React from 'react'
import { Typography } from '@material-ui/core'
import styled from 'styled-components'

interface CenteredMessageProps {
  header: React.ReactNode
  description?: React.ReactNode
  position?: 'absolute' | 'relative'
}

export const CenteredMessage: React.FC<CenteredMessageProps> = ({ header, description, position = 'absolute' }) => (
  <MessageContainer position={position}>
    <Typography variant='h6'>{header}</Typography>
    {description && <Typography variant='subtitle1'>{description}</Typography>}
  </MessageContainer>
)

const MessageContainer = styled.div<{ position: 'absolute' | 'relative' }>`
  position: ${p => p.position};
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`
