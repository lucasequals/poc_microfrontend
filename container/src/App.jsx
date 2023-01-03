import React from "react";
import ReactDOM from "react-dom";
import PrimeReact from 'primereact/api';

PrimeReact.ripple = true;

import { Blogs } from 'rcb_blogs/Blogs';
import { Header } from 'rcb_header/Header';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import "./index.css";

const App = () => (
  <>
    <Header />
    <div className="container-blogs">
      <Blogs />
    </div>
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
