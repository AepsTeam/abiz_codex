import React from 'react'
import { Route, IndexRedirect } from 'react-router'

import App from './components/App.jsx'

import Home from './components/module/Home'
import MarkdownEditContainer from './components/basic/MarkdownEditContainer'
import CodexRoutes from './route/codex'

export default (
    <Route name="app" path="/" component={App}>
        <IndexRedirect to="/home" />
        <Route path="home" component={Home} />
        {CodexRoutes}
        <Route path="edit/*" component={MarkdownEditContainer} ></Route>
    </Route>
) 