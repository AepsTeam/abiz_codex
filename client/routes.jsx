import React from 'react'
import { Route, IndexRedirect } from 'react-router'

import App from './components/App.jsx'

// common
import CommonIndex from './components/module/common/Index'
import Regular from './components/module/common/Regular'
import Interaction from './components/module/common/Interaction'
import Vision from './components/module/common/Vision'
import Css from './components/module/common/Css'
import Js from './components/module/common/Js'

import MarkdownContainer from './components/module/MarkdownContainer.jsx'

export default (
    <Route name="app" path="/codex" component={App}>
        <IndexRedirect to="/codex/common/regular/frontier" />
        <Route path="common" component={CommonIndex}>
            <Route path="regular" component={Regular} >
                <Route path=":tab"  component={MarkdownContainer}/>
            </Route>
             <Route path="interaction" component={Interaction} >
                <Route path=":tab"  component={MarkdownContainer} />
            </Route>
             <Route path="vision" component={Vision} >
                <Route path=":tab"  component={MarkdownContainer} />
            </Route>
             <Route path="css" component={Css} >
                <Route path=":tab"  component={MarkdownContainer} />
            </Route>
             <Route path="js" component={Js} >
                <Route path=":tab" component={MarkdownContainer} />
            </Route>
        </Route>
        <Route path="pm" component={Regular}></Route>
        <Route path="plan" component={Regular}></Route>
        <Route path="resource" component={Regular}></Route>
    </Route>
) 