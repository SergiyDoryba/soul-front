import React from 'react'
import {Route} from 'react-router-dom'
import Header from './header.jsx'
import Main from './main.jsx'
import Footer from './footer.jsx'

class ApplicationLayout extends React.Component {
    render() {
        const { component: Component, ...rest } = this.props;
        return <Route {...rest} render={matchProps => (
            <div className="ApplicationLayout">
                <Header/>
                <Main>
                    <Component {...matchProps} />
                </Main>
                <Footer/>
            </div>
        )} />;
    }
}

export default ApplicationLayout