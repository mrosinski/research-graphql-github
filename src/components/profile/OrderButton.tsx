import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import { ArrowDownward as AscendingIcon, ArrowUpward as DescendingIcon } from '@material-ui/icons'
import { OrderDirection } from './types'

interface OrderButtonProps {
  label: string
}

const OrderDirectionToIconMapping: Record<OrderDirection, JSX.Element> = {
  [OrderDirection.Ascending]: <AscendingIcon />,
  [OrderDirection.Descending]: <DescendingIcon />,
}

const OrderDirectionChangeMapping: Record<OrderDirection, OrderDirection> = {
  [OrderDirection.Ascending]: OrderDirection.Descending,
  [OrderDirection.Descending]: OrderDirection.Ascending,
}

export const OrderButton: React.FC<OrderButtonProps> = ({ label }) => {
  const [direction, setDirection] = useState<OrderDirection>(OrderDirection.Ascending)

  const handleClick = () => setDirection(OrderDirectionChangeMapping[direction])

  return (
    <Button endIcon={OrderDirectionToIconMapping[direction]} size='small' onClick={handleClick}>
      {label}
    </Button>
  )
}
