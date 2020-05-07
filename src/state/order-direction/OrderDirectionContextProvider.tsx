import React, { useState } from 'react'
import { OrderDirection } from '../../api/types'
import { OrderDirectionContext } from './OrderDirectionContext'

const OrderDirectionChangeMapping: Record<OrderDirection, OrderDirection> = {
  [OrderDirection.Ascending]: OrderDirection.Descending,
  [OrderDirection.Descending]: OrderDirection.Ascending,
}

export const OrderDirectionContextProvider: React.FC = ({ children }) => {
  const [orderDirection, setOrderDirection] = useState<OrderDirection>(OrderDirection.Ascending)

  const context: OrderDirectionContext = {
    orderDirection,
    changeOrderDirection() {
      setOrderDirection(OrderDirectionChangeMapping[orderDirection])
    },
  }

  return <OrderDirectionContext.Provider value={context}>{children}</OrderDirectionContext.Provider>
}
