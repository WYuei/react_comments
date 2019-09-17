import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app/app';

import {Provider} from '../node_modules/react-redux'
import store from './redux/store'

ReactDOM.render(
    <Provider store={store}>
        <App /> </Provider>
    , document.getElementById('root'));

