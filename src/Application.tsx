import React from 'react'
import { hot } from 'react-hot-loader'
import { Helmet } from 'react-helmet'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ApplicationBar } from './components/core/ApplicationBar'
import { APPLICATION_NAME } from './config'
import { ApplicationTheme } from './components/core/ApplicationTheme'
import { HomeView } from './components/home/HomeView'
import { ProfileView } from './components/profile/ProfileView'
import { ApolloProvider } from '@apollo/client'
import { githubApiClient } from './services/githubApiClient'
import { Routing } from './routing'

const Application: React.FC = () => (
  <>
    <Helmet>
      <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,600&display=swap' />
      <title>{APPLICATION_NAME}</title>
    </Helmet>

    <ApplicationTheme>
      <ApolloProvider client={githubApiClient}>
        <Router>
          <ApplicationBar />
          <Switch>
            <Route exact path={Routing.Home()}>
              <HomeView />
            </Route>
            <Route exact path={Routing.Profile()}>
              <ProfileView />
            </Route>
          </Switch>
        </Router>
      </ApolloProvider>
    </ApplicationTheme>
  </>
)

export default hot(module)(Application)
