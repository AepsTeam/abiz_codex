import React from 'react'
import { Route, IndexRedirect } from 'react-router'

import App from './components/App.jsx'

import Home from './components/module/Home'
import MarkdownEditContainer from './components/basic/MarkdownEditContainer'
import CodexRoutes from './route/codex'
import Register from './components/user/Register'
import Login from './components/user/Login'

export default (
    <Route name="app" path="/" component={App}>
        <IndexRedirect to="/home" />
        <Route path="home" component={Home} />
        <Route path="user_register" component={Register} />>
        <Route path="user_update" component={Register} />>
        <Route path="login" component={Login} />>
        {CodexRoutes}
        <Route path="edit/*" component={MarkdownEditContainer} ></Route>
    </Route>
) 