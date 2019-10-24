import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase/app';

const config = {
    apiKey: "AIzaSyCXDFksefjsh6GOt7l-EK-573F9tTXhJ6c",
    authDomain: "todo-list-9db7b.firebaseapp.com",
    databaseURL: "https://todo-list-9db7b.firebaseio.com",
    projectId: "todo-list-9db7b",
    storageBucket: "todo-list-9db7b.appspot.com",
    messagingSenderId: "691686068411",
    appId: "1:691686068411:web:aca5d8668a341ff378599e"
}

firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
