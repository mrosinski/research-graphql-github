import React from 'react'
import { Divider } from '@material-ui/core'
import { EmojiEmotions, EmojiEvents, EmojiFoodBeverage, EmojiObjects, EmojiPeople } from '@material-ui/icons'
import { CenteredMessage } from '../core/CenteredMessage'

export const HomeView: React.FC = () => (
  <CenteredMessage
    header='Get started'
    description={
      <>
        Use search above to find GitHub people and see their profiles here
        <Divider />
        <p>
          <EmojiPeople />
          <EmojiEmotions />
          <EmojiEvents />
          <EmojiFoodBeverage />
          <EmojiObjects />
        </p>
      </>
    }
  />
)
