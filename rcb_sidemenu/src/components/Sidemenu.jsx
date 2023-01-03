import React, { useRef } from "react";
import { Menu } from 'primereact/menu';
import { Button } from 'primereact/button';
import "./index.css";

export const Sidemenu = () => {
  const menu = useRef(null);

  let items = [
      {
        label: 'Posts', 
        icon: 'pi pi-fw pi-list',
        command:(e) => {
          window.location.hash = "/posts"
        }
      },
      {
        label: 'Sobre', 
        icon: 'pi pi-fw pi-question-circle',
        command:(e) => {
          window.location.hash = "/faq"
        }
      }
  ];

  return (
    <>
      <Menu model={items} popup ref={menu} id="popup_menu" />
      <Button icon="pi pi-bars" onClick={(event) => menu.current.toggle(event)} aria-controls="popup_menu" aria-haspopup />
    </>
  );
};
