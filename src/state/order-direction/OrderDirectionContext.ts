import React from 'react'
import { OrderDirection } from '../../api/common'

export interface OrderDirectionContext {
  orderDirection: OrderDirection
  changeOrderDirection: () => void
}

export const OrderDirectionContext = React.createContext<OrderDirectionContext | null>(null)
