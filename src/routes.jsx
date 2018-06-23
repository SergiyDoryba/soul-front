import React from 'react'
import path from 'path'
import { Route, Link } from 'react-router-dom'
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
            <Route exact path="/" component={Dashboards}/>
            <Route path="/about" component={About}/>
            <Route path="/psalms" component={Psalms}/>
            <Route path="/posts" component={Posts}/>
        </div>

    }
}

export default Routes;
