import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./components/App";
import Header from "./components/Header";

import {createStore, applyMiddleware} from "redux";
import reducer from "./reducers";
import thunk from "redux-thunk";
import {Provider} from "react-redux";

const logger =({getState}) => next => action => {
    console.log("Dispatching action:", action);
    next(action);
}

let store = createStore(reducer, applyMiddleware(logger, thunk));


ReactDOM.render(
    <Provider store={store}>
    <Header />    
    <App />
    </Provider>,
document.getElementById("root")
);
