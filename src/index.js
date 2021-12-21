import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom"
import ProductContent from "./component/product/productContent";
import About from "./component/about/about";


const rootElement = document.getElementById("root");
render(
  <HashRouter>
    <Routes>
      <Route path={"" + "/"} element={<App />}/>
      <Route path={"" + "/product"} element={<ProductContent />}/>
      <Route path={"" + "/about"} element={<About />}/>

    </Routes>
  </HashRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
