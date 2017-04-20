import React from 'react'
import { Route, IndexRedirect } from 'react-router'

import App from './components/App.jsx'
import Regular from './components/module/Regular'
import Interaction from './components/module/Interaction'
import Vision from './components/module/Vision'
import Css from './components/module/Css'
import Js from './components/module/Js'

export default (
    <Route name="app" path="/ued" component={App}>
        <IndexRedirect to="/ued/regular/" />
        <Route path="/ued/regular/" component={Regular}></Route>
        <Route path="/ued/interaction/" component={Interaction}></Route>
        <Route path="/ued/vision/" component={Vision}></Route>
        <Route path="/ued/css/" component={Css}></Route>
        <Route path="/ued/js/" component={Js}></Route>
    </Route>
) 