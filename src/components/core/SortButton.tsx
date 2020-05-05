import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import { ArrowDownward as AscendingIcon, ArrowUpward as DescendingIcon } from '@material-ui/icons'

interface SortButtonProps {
  label: string
}

export enum SortDirection {
  Ascending = 'ascending',
  Descending = 'descending',
}

const SortDirectionToIconMapping: Record<SortDirection, JSX.Element> = {
  [SortDirection.Ascending]: <AscendingIcon />,
  [SortDirection.Descending]: <DescendingIcon />,
}

const SortDirectionChangeMapping: Record<SortDirection, SortDirection> = {
  [SortDirection.Ascending]: SortDirection.Descending,
  [SortDirection.Descending]: SortDirection.Ascending,
}

export const SortButton: React.FC<SortButtonProps> = ({ label }) => {
  const [direction, setDirection] = useState<SortDirection>(SortDirection.Ascending)

  const changeSortDirection = () => setDirection(SortDirectionChangeMapping[direction])

  return (
    <Button endIcon={SortDirectionToIconMapping[direction]} size='small' onClick={changeSortDirection}>
      {label}
    </Button>
  )
}
