import React from "react";
import ReactDOM from "react-dom";
import { Blogs } from "./components/Blogs";
import PrimeReact from 'primereact/api';

PrimeReact.ripple = true;

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import "./index.css";

const App = () => (
  <div className="container">
    <Blogs />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
