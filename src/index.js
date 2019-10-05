import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import { Provider } from "react-redux";
import store from "./redux/store";
import * as serviceWorker from './serviceWorker';
import Cookie from 'js-cookie';
import Home from './components/Auth/Home';

const oldFetch = window.fetch;
window.fetch = (url, settings = {}) => {
  return oldFetch(url, 
    {...settings,
      headers: {...settings.headers, authorization: localStorage.getItem("token")}
    }
    );
};

const cookie = Cookie.get('kanban_crud_cookie')
let appPage = []
if(cookie === undefined) {
    appPage = <Provider store={store}><Home /></Provider>
} else {
    appPage = <Provider store={store}><App /></Provider>
}

//<Provider store={store}><App /></Provider>
//<Home />
ReactDOM.render(appPage, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
