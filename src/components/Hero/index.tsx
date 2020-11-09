import React from "react";
import "./Hero.css";
import phone from "src/images/hero_phone.png";
import ticket from "src/images/hero_ticket.png";
import hand from "src/images/hero_hand.png";
import leenin from "src/images/leeeeenin.png";
import { AppearingText } from "src/elements/AppearingText/AppearingText";
import HeroCard from "src/components/HeroCard";
import useVisibility from "src/hooks/useVisibility";
export function Hero() {
  const [isVisible, leninRef] = useVisibility<HTMLImageElement>(50);
  return (
    <section className={"container__Hero Hero"}>
      <div className={"hero__content content"}>
        <img src={phone} className={"content__phone phone"} />
        <div className={"content__ticket-wrapper ticket-wrapper"}>
          <AppearingText
            text={"Comrades, please submit a ticket"}
            color={"#ffffff"}
          />
          <img src={ticket} className={"ticket-wrapper__ticket ticket"} />
          <img src={hand} className={"ticket-wrapper__hand hand"} />
        </div>
        <div className={"content__circle circle"}></div>
      </div>
      <HeroCard />
      <h1 className={"hero__mainpage mainpage"}>Main page</h1>
      <img
        src={leenin}
        className={`hero__lenin lenin ${isVisible ? "show" : "unshown"}`}
        ref={leninRef}
      />
    </section>
  );
}
