import React from "react";
import "./SpeedCard.css";
import logo from "src/images/logo.svg";
import SpeedMeter from "src/elements/SpeedMeter";
import luckyTicketLogo from "src/images/lucky_ticket.png";
import { FirstLetterText } from "src/elements/FirstLetterText";
export function SpeedCard() {
  return (
    <section className={"NextStation__SpeedCard SpeedCard"}>
      <img src={logo} className={"SpeedCard__logo logo"} />
      <SpeedMeter />
      <h1>
        Speed
        <br />
        56 km/h
      </h1>
      <FirstLetterText
        text={
          'The section from the stop "Monolith" to the final "Traktorozavod"' +
          " high-speed tram divides with the city route number 9," +
          " so that the speed at high-speed and conventional" +
          " trains in this area turns out the same."
        }
      />
      <img src={luckyTicketLogo} className={"SpeedCard__luckylogo luckylogo"} />
    </section>
  );
}
