import { GetProfile, GetProfileVariables } from './GetProfile'
import { useQuery } from '@apollo/client'

export const useProfile = (variables: GetProfileVariables) =>
  useQuery<GetProfile, GetProfileVariables>(GetProfile, { variables })
