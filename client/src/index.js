import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './store';
import {me} from './store/actions/user';

import './index.css';
import AppRouter from './routers/AppRouter';

const App = () => {
    return (
        <Provider store={ store }>
            <AppRouter/>
        </Provider>
    )
}

let token = localStorage.getItem('token');
if(token){
    store.dispatch(me(token));
}
ReactDOM.render(<App />, document.getElementById('root'));
