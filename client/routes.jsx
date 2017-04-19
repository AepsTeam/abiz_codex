import React from 'react'
import { Route, IndexRedirect } from 'react-router'

import App from './components/App.jsx'
import TopicListContainer from './components/cnode/TopicListContainer'

export default (
    <Route name="app" path="/" component={App}>
        <IndexRedirect to="/app/all" />
        <Route path="/app/:tab" component={TopicListContainer}></Route>
    </Route>
) 