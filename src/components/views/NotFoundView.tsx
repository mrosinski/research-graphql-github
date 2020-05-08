import React from 'react'
import { useParams } from 'react-router-dom'
import { CenteredMessage } from '../core/CenteredMessage'

export const NotFoundView: React.FC = () => {
  const { login } = useParams<{ login: string }>()

  return <CenteredMessage header={`No such user "${login}"`} description='Try your luck with another search' />
}
