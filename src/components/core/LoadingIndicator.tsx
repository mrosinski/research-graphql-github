import styled from 'styled-components'
import { LinearProgress, LinearProgressProps } from '@material-ui/core'

export const LoadingIndicator = styled(LinearProgress).attrs({
  variant: 'query',
} as LinearProgressProps)`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: ${p => p.theme.zIndex.appBar + 1};
`
