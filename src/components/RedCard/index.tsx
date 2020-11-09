import React from "react";
import "./RedCard.css";
import NavBar from "src/elements/NavBar";
import luckyTicketLogo from "src/images/lucky_ticket.png";
import { FirstLetterText } from "src/elements/FirstLetterText";
export function RedCard() {
  return (
    <section className={"TramWith__RedCard  RedCard"}>
      <NavBar logoWhite={true} />
      <div className={"card__content content"}>
        <h1>careful, the doors are closing.</h1>
        <FirstLetterText
          text={
            "          The frequency of trains from three minutes in the morning to 25 in the" +
            "          evening. Last evening 4-5 trains are on a tight schedule, it hangs on" +
            "          each stop point. After 22.00 trains are gradually removed from the" +
            "          line and every third tram should be to the depot, that is, from the" +
            '          station "Monolith" is on the route number 9.'
          }
        />
      </div>
      <img src={luckyTicketLogo} className={"card__luckylogo luckylogo"} />
    </section>
  );
}
