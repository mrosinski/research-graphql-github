import React from 'react'
import { Box, Container } from '@material-ui/core'

export const ContentContainer: React.FC = ({ children }) => (
  <Container>
    <Box my={2}>{children}</Box>
  </Container>
)
