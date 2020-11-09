import React from "react";
import "./TechniqueCard.css";
import NavBar from "src/elements/NavBar";
import { FirstLetterText } from "src/elements/FirstLetterText";
import train from "src/images/small_train.png";
import luckyTicketLogo from "src/images/lucky_ticket.png";
export function TechniqueCard() {
  return (
    <section className={"TramWith__TechniqueCard TechniqueCard"}>
      <NavBar selectedItem={3} />
      <h1>of course the technique</h1>
      <FirstLetterText
        text={
          "Despite the fact that from a certain point of view," +
          " the metro System can be considered a metro System, in terms of" +
          " technical equipment, it is, of course, more inclined to the usual city tram. "
        }
      />
      <img src={train} className={"TechniqueCard__train train"} />
      <img
        src={luckyTicketLogo}
        className={"TechniqueCard__luckylogo luckylogo"}
      />
    </section>
  );
}
