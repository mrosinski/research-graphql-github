import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { useDebouncedCallback } from 'use-debounce'
import { fade, InputBase } from '@material-ui/core'
import { Search as SearchIcon } from '@material-ui/icons'
import { Routing } from '../../routing'

const SEARCH_DELAY = 500

export const Search: React.FC = () => {
  const { push } = useHistory()

  const [goToProfile] = useDebouncedCallback(
    (searchedPhrase: string) => searchedPhrase !== '' && push(Routing.Profile.Details(searchedPhrase)),
    SEARCH_DELAY
  )

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    goToProfile(event.target.value.trim())
  }

  return (
    <SearchContainer>
      <SearchIconContainer>
        <SearchIcon />
      </SearchIconContainer>
      <SearchInput placeholder='Search people…' autoFocus onChange={handleChange} />
    </SearchContainer>
  )
}

const SearchContainer = styled.div`
  position: relative;
  border-radius: ${p => p.theme.shape.borderRadius}px;

  background-color: ${p => fade(p.theme.palette.common.white, 0.15)};
  &:hover {
    background-color: ${p => fade(p.theme.palette.common.white, 0.25)};
  }

  margin-left: 0;
  width: 100%;
  ${p => p.theme.breakpoints.up('sm')} {
    margin-left: ${p => p.theme.spacing(2)}px;
    width: auto;
  }
`

const SearchIconContainer = styled.div`
  padding: ${p => p.theme.spacing(0, 2)};
  height: 100%;
  position: absolute;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
`

const SearchInput = styled(InputBase)`
  color: inherit;
  width: 100%;

  input {
    padding: ${p => p.theme.spacing(1, 1, 1, 0)};
    padding-left: ${p => `calc(1em + ${p.theme.spacing(4)}px)`};
    transition: ${p => p.theme.transitions.create('width')};

    ${p => p.theme.breakpoints.up('sm')} {
      width: 15ch;
      &:focus {
        width: 30ch;
      }
    }
  }
`
