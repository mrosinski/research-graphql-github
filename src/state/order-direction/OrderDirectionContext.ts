import React from 'react'
import { OrderDirection } from '../../api/types'

export interface OrderDirectionContext {
  orderDirection: OrderDirection
  changeOrderDirection: () => void
}

export const OrderDirectionContext = React.createContext<OrderDirectionContext | null>(null)
