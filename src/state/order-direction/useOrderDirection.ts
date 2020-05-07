import { useContext } from 'react'
import { OrderDirectionContext } from './OrderDirectionContext'

export const useOrderDirection = () => {
  const context = useContext(OrderDirectionContext)

  if (context === null) {
    //eslint-disable-next-line functional/no-throw-statement
    throw new Error('useOrderDirection hook have to be used inside OrderDirectionContextProvider component')
  }

  return context
}
