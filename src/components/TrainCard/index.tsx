import React from "react";
import "./TrainCard.css";
import train from "src/images/small_train.png";
import people from "src/images/hero_card_people.png";
import NavBar from "src/elements/NavBar";
import luckyTicketLogo from "src/images/lucky_ticket.png";
import { FirstLetterText } from "src/elements/FirstLetterText";
import useVisibility from "src/hooks/useVisibility";

export function TrainCard() {
  const [isVisible, trainRef] = useVisibility<HTMLDivElement>(50);
  return (
    <section className={"NextStation__TrainCard TrainCard"}>
      <NavBar />
      <div className={"TrainCard__text text"}>
        <FirstLetterText
          text={
            "The high-speed tram system consists of" +
            "from one line with a length of 14 km, partially (in the North) using the city tram network. The " +
            "line connects the Northern parts of the city with " +
            "the center."
          }
        />
        <p>
          Starting near the tractor Plant, it goes first parallel to the tracks
          of the city train, and then-along the Avenue V. I. Lenin
        </p>
      </div>
      <div
        className={`TrainCard__train-wrapper train-wrapper ${
          isVisible ? "shown" : "unshown"
        }`}
        ref={trainRef}
      >
        <img src={train} className={"train-wrapper__train train"} />
        <img
          src={people}
          className={`train-wrapper__people people ${isVisible ? "jump" : ""}`}
        />
      </div>
      <img src={luckyTicketLogo} className={"TrainCard__luckylogo luckylogo"} />
    </section>
  );
}
