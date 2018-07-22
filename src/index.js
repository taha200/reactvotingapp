import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './components/main'
import registerServiceWorker from './registerServiceWorker';
import store from './store'
import {Provider} from 'react-redux'

ReactDOM.render(<Provider store={store}>
    <Main />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
