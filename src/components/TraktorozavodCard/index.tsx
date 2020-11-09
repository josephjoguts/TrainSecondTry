import React from "react";
import "./TraktorozavodCard.css";
import train from "src/images/small_train.png";
import luckyTicketLogo from "src/images/lucky_ticket.png";
import loading from "src/images/train_loading.png";
import NavBar from "src/elements/NavBar";
import { FirstLetterText } from "src/elements/FirstLetterText";

export function TraktorozavodCard() {
  return (
    <section className={"DoorsAreClosing__TraktorozavodCard TraktorozavodCard"}>
      <div className={"TraktorozavodCard__content content"}>
        <NavBar selectedItem={4} border={true} />
        <img src={train} className={"content__train train"} />
        <h1>Traktorozavod</h1>
        <FirstLetterText
          text={
            "At this station" +
            " there is the Northern turning circle of the Metrotram line," +
            " as well as the route ╧9. The circle itself is a Grand structure with" +
            " three paths and two dead ends. The station consists of two platforms of double length," +
            " so that simultaneously can accept four the composition. In addition, " +
            "in the Northern part of the ring there is a gate with the line of the city train." +
            " The gate path is not electrified and is blocked by a lattice fence."
          }
        />
      </div>
      <img src={loading} className={"TraktorozavodCard__loading loading"} />
      <img
        src={luckyTicketLogo}
        className={"TraktorozavodCard__luckylogo luckylogo"}
      />
    </section>
  );
}
