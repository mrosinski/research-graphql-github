import React from 'react'
import { Button } from '@material-ui/core'
import { ArrowDownward as AscendingIcon, ArrowUpward as DescendingIcon } from '@material-ui/icons'
import { useOrderDirection } from '../../state/order-direction'
import { OrderDirection } from '../../api/common'

interface OrderButtonProps {
  label: string
}

const OrderDirectionToIconMapping: Record<OrderDirection, JSX.Element> = {
  [OrderDirection.Ascending]: <AscendingIcon />,
  [OrderDirection.Descending]: <DescendingIcon />,
}

export const OrderButton: React.FC<OrderButtonProps> = ({ label }) => {
  const { orderDirection, changeOrderDirection } = useOrderDirection()

  const handleClick = () => changeOrderDirection()

  return (
    <Button endIcon={OrderDirectionToIconMapping[orderDirection]} size='small' onClick={handleClick}>
      {label}
    </Button>
  )
}
