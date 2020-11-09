import train from "src/images/header_train.png";
import logo from "src/images/logo.svg";
import phone from "src/images/header_phone.png";
import clock from "src/images/clock.png";
import React from "react";
import "./header.css";

export function Header() {
  return (
    <section className={"container__header header"}>
      <div className={"header__content content"}>
        <img src={logo} className={"logo"} />
        <div className={"content__tittle tittle"}>
          <h1>Website concept for Volgograd Metrotram</h1>
          <img src={clock} className={"clock"} />
        </div>
        <img src={train} className={"train"} />
      </div>
      <img src={phone} className={"phone"} />
    </section>
  );
}
