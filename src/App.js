import React, { memo } from 'react'

import { renderRoutes } from 'react-router-config'
import routes from '@/router'
import { BrowserRouter as Router } from 'react-router-dom'
import store from '@/store'
import { Provider } from 'react-redux'


import MoreAppHeader from '@/components/more-app-header'
import MoreAppFooter from '@/components/more-app-footer'
import PlayerBar from '@/pages/player/app-player-bar'
import MoreBackTop from '@/components/more-back-top'

export default memo(function App() {

  return (
    <Provider store={store}>
      <Router>
        <MoreAppHeader/>
        {renderRoutes(routes)}
        <MoreAppFooter />
        <MoreBackTop/>
        <PlayerBar />
      </Router>
    </Provider>

  )
})

