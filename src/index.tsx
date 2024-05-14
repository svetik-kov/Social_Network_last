import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import store from './redux/redux-store';
import {Provider} from 'react-redux';
import App, {SamuraiJSApp} from './App'

ReactDOM.render(
    <SamuraiJSApp/>,
    document.getElementById('root')
);


