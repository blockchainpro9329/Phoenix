import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App from "./App"
import store from "./store/index"

import { Provider } from 'react-redux';


window.store = store;


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));

reportWebVitals();
