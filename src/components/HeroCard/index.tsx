import React from "react";
import NavBar from "src/elements/NavBar";
import "./HeroCard.css";
import { FirstLetterText } from "src/elements/FirstLetterText";
import train from "src/images/small_train.png";
import people from "src/images/hero_card_people.png";
import luckyTicketLogo from "src/images/lucky_ticket.png";
export default function HeroCard() {
  return (
    <section className={"hero__Herocard herocard"}>
      <NavBar />
      <h1>
        Tram with delusions
        <br />
        of grandeur
      </h1>
      <FirstLetterText
        text={
          'At first, it is customary to say " welcome!".' +
          " So, welcome to the website dedicated to Volgograd high " +
          "— speed tram-one of the most unusual transport systems in Russia. "
        }
      />
      <div className={"herocard__images images"}>
        <img src={train} className={"train"} />
        <img src={people} className={"people"} />
      </div>
      <img src={luckyTicketLogo} className={"luckylogo"} />
    </section>
  );
}
