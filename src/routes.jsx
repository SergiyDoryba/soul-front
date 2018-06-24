import React from 'react'
import {Switch, Route, Router, BrowserRouter, Redirect} from 'react-router-dom'
import ApplicationLayout from './components/layout/applicationLayout.jsx'
import NotFound from './components/errors/notFound.jsx'

import Paths from './paths.jsx'

import createHistory from 'history/createBrowserHistory'
const history = createHistory();
App.history = history;

import App from './app.jsx'

import Loadable from 'react-loadable'
import Loading from './components/common/loading.jsx'

const asyncComponent = (loader) => Loadable({
    loader: loader,
    loading: Loading,
    delay: 300
});

const Dashboards = asyncComponent(() => import('./components/dashboards/index.jsx'));
const About = asyncComponent(() => import('./components/about/index.jsx'));
const Psalms = asyncComponent(() => import('./components/psalms/index.jsx'));
const Posts = asyncComponent(() => import('./components/posts/index.jsx'));

class Routes extends React.Component {
    render() {
         return <div>
             <Router history={history}>
                 <Switch>
                    <ApplicationLayout exact path={Paths.rootRegexp} component={Dashboards}/>
                    <ApplicationLayout exact path={Paths.aboutRegexp} component={About}/>
                    <ApplicationLayout exact path={Paths.psalmsRegexp} component={Psalms}/>
                    <ApplicationLayout exact path={Paths.postsRegexp} component={Posts}/>
                    <ApplicationLayout exact path="/(|#[a-zA-Z]+)"/>
                    <ApplicationLayout path="*" component={NotFound}/>
                 </Switch>
             </Router>
         </div>
    }
}

export default Routes;
