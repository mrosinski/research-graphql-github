import React from 'react'
import { hot } from 'react-hot-loader'
import { Helmet } from 'react-helmet'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import { APPLICATION_NAME } from './config'
import { Routing } from './routing'
import { githubApiClient } from './api/githubApiClient'
import { OrderDirectionContextProvider } from './state/order-direction/OrderDirectionContextProvider'
import { ApplicationBar } from './components/core/ApplicationBar'
import { ApplicationTheme } from './components/core/ApplicationTheme'
import { HomeView } from './components/views/HomeView'
import { ProfileView } from './components/views/ProfileView'
import { NotFoundView } from './components/views/NotFoundView'

const Application: React.FC = () => (
  <>
    <Helmet>
      <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,600&display=swap' />
      <title>{APPLICATION_NAME}</title>
    </Helmet>

    <ApplicationTheme>
      <ApolloProvider client={githubApiClient}>
        <OrderDirectionContextProvider>
          <Router>
            <ApplicationBar />
            <Switch>
              <Route exact path={Routing.Home()}>
                <HomeView />
              </Route>
              <Route exact path={Routing.Profile.Details()}>
                <ProfileView />
              </Route>
              <Route exact path={Routing.Profile.NotFound()}>
                <NotFoundView />
              </Route>
            </Switch>
          </Router>
        </OrderDirectionContextProvider>
      </ApolloProvider>
    </ApplicationTheme>
  </>
)

export default hot(module)(Application)
