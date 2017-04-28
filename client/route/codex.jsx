import React from 'react'
import { Route, IndexRedirect } from 'react-router'

// common
import CommonIndex from '../components/module/common/Index'
import Regular from '../components/module/common/Regular'
import Interaction from '../components/module/common/Interaction'
import Vision from '../components/module/common/Vision'
import Css from '../components/module/common/Css'
import Js from '../components/module/common/Js'

// pm
import PM from '../components/module/pm/index'
// plan
import Plan from '../components/module/plan/index'
// resource
import Resource from '../components/module/resource/index'

import MarkdownContainer from '../components/basic/MarkdownPreviewContainer.jsx'

export default (
    <Route path="codex">
        <Route path="common" component={CommonIndex}>
            <IndexRedirect to="/codex/common/regular/frontier" />
            <Route path="regular" component={Regular} >
                <IndexRedirect to="/codex/common/regular/frontier" />
                <Route path=":tab" component={MarkdownContainer} />
            </Route>
            <Route path="interaction" component={Interaction} >
                <IndexRedirect to="/codex/common/interaction/define" />
                <Route path=":tab" component={MarkdownContainer} />
            </Route>
            <Route path="vision" component={Vision} >
                <IndexRedirect to="/codex/common/vision/begin" />
                <Route path=":tab" component={MarkdownContainer} />
            </Route>
            <Route path="css" component={Css} >
                <IndexRedirect to="/codex/common/css/begin" />
                <Route path=":tab" component={MarkdownContainer} />
            </Route>
            <Route path="js" component={Js} >
                <IndexRedirect to="/codex/common/js/language" />
                <Route path=":tab" component={MarkdownContainer} />
            </Route>
        </Route>
        <Route path="pm" component={PM}></Route>
        <Route path="plan" component={Plan}></Route>
        <Route path="resource" component={Resource}></Route>
    </Route>
)