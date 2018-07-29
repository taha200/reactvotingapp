import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './components/main'
import registerServiceWorker from './registerServiceWorker';
import store from './store'
import {Provider} from 'react-redux'
import Routeer from './components/router'
import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyCbhs-O-22aTYPB8fsgdjM43ZFcHBf2vMw",
    authDomain: "voting-app-71003.firebaseapp.com",
    databaseURL: "https://voting-app-71003.firebaseio.com",
    projectId: "voting-app-71003",
    storageBucket: "voting-app-71003.appspot.com",
    messagingSenderId: "563248889053"
  };
  firebase.initializeApp(config);
ReactDOM.render(<Provider store={store}>
    <Routeer />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
