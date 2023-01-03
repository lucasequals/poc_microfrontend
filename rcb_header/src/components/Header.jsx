import React, { useState } from "react";
import { Sidemenu } from "rcb_sidemenu/Sidemenu";
import "./index.css";

export const Header = () => {

  return (
    <div className="navbar">
      <Sidemenu/>
      <h1>Noticias de Recebíveis</h1>
    </div>
  );
};
