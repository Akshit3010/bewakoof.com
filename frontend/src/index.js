import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'redux'
import {store}  from './Redux/store.js'
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

<Provider store={store}>
<BrowserRouter>
<App />
</BrowserRouter>
</Provider>

);
