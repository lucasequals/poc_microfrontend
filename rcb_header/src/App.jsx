import React from "react";
import ReactDOM from "react-dom";
import { Header } from "./components/Header"
import PrimeReact from 'primereact/api';

PrimeReact.ripple = true;

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import "./index.css";

const App = () => (
    <Header />
);
ReactDOM.render(<App />, document.getElementById("app"));
