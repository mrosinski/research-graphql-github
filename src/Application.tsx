import React from 'react'
import { hot } from 'react-hot-loader'
import { Helmet } from 'react-helmet'
import { ApplicationBar } from './components/core/ApplicationBar'
import { APPLICATION_NAME } from './config'
import { ApplicationTheme } from './components/core/ApplicationTheme'
import { ProfileView } from './components/profile/ProfileView'

const Application: React.FC = () => (
  <>
    <Helmet>
      <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,600&display=swap' />
      <title>{APPLICATION_NAME}</title>
    </Helmet>

    <ApplicationTheme>
      <ApplicationBar />
      <ProfileView />
    </ApplicationTheme>
  </>
)

export default hot(module)(Application)
