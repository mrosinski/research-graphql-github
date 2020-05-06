import React from 'react'
import { Typography } from '@material-ui/core'

interface CenteredMessageProps {
  header: string
  description?: string
}

export const CenteredMessage: React.FC<CenteredMessageProps> = ({ header, description }) => (
  <>
    <Typography variant='h6' align='center'>
      {header}
    </Typography>
    {description && (
      <Typography variant='subtitle1' align='center'>
        {description}
      </Typography>
    )}
  </>
)
