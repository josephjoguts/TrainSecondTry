import React from "react";
import "./LeninCard.css";
import luckyTicketLogo from "src/images/lucky_ticket.png";
import loading from "src/images/train_loading.png";
import NavBar from "src/elements/NavBar";
import { FirstLetterText } from "src/elements/FirstLetterText";

export function LeninCard() {
  return (
    <section className={"DoorsAreClosing__LeninCard LeninCard"}>
      <div className={"LeninCard__content content"}>
        <NavBar selectedItem={4} border={true} logoWhite={true} />
        <h1>Lenin Square</h1>
        <FirstLetterText
          text={
            "Underground station of single-vaulted type." +
            " The distance from the surface to the level of the rail heads is about" +
            " 7 meters. It has one lobby equipped with two escalators." +
            " Entrance to the lobby from the underground passage under the square."
          }
        />
      </div>
      <img src={loading} className={"LeninCard__loading loading"} />
      <img src={luckyTicketLogo} className={"LeninCard__luckylogo luckylogo"} />
    </section>
  );
}
