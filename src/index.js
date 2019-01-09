import '@babel/polyfill'
import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';

import (/* webpackChunkName: 'app' */ './components/App.jsx')
  .then(({default: App}) =>
    render(<App />, document.getElementById('root')
    )
  )


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
