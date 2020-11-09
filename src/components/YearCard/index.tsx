import React from "react";
import "./YearCard.css";
import background from "src/components/YearCard/background.png";
import NavBar from "src/elements/NavBar";
import luckyTicketLogo from "src/images/lucky_ticket.png";
import { FirstLetterText } from "src/elements/FirstLetterText";

export function YearCard() {
  return (
    <section className={"DoorsAreClosing__YearCard YearCard"}>
      <NavBar selectedItem={3} />

      <FirstLetterText
        text={
          "В Краснооктябрьском районе было открыто новое" +
          " трамвайное депо для обслуживания действовавшего 8-го маршрута и нового 9-го маршрута, который связал район" +
          " трамвайного депо с линией по проспекту Ленина и Тракторным заводом." +
          " Процесс реконструкции линии трамвая продолжался до 1976 г. "
        }
      />
      <img src={background} className={"YearCard__background background"} />
      <img src={luckyTicketLogo} className={"YearCard__luckylogo luckylogo"} />
    </section>
  );
}
