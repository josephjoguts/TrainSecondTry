import React from "react";
import "./DoorsAreClosing.css";
import man from "src/images/mother_calls.png";
import { RedCard } from "src/components/RedCard";
import { LeninCard } from "src/components/LeninCard";
import { TraktorozavodCard } from "src/components/TraktorozavodCard";
import { YearCard } from "src/components/YearCard";
import { AppearingText } from "src/elements/AppearingText/AppearingText";
export function DoorsAreClosing() {
  return (
    <section className={"container__DoorsAreClosing DoorsAreClosing"}>
      <LeninCard />
      <TraktorozavodCard />
      <YearCard />
      <div className={"DoorsAreClosing__content content"}>
        <div className={"circle"}></div>
        <AppearingText
          text={"careful, \n" + "the doors are closing."}
          color={"#333333"}
        />
        <img src={man} />
      </div>
    </section>
  );
}
