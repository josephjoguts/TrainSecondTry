import React from "react";
import "./NextStation.css";
import nextGirl from "src/images/nextStationGirl.png";
import { TrainCard } from "src/components/TrainCard";
import { SpeedCard } from "src/components/SpeedCard";
import { AppearingText } from "src/elements/AppearingText/AppearingText";

export function NextStation() {
  return (
    <section className={"container__NextStation NextStation"}>
      <TrainCard />
      <SpeedCard />
      <div className={"NextStation__content content"}>
        <AppearingText
          text={"The \n" + "next station \n" + "is pioneerskaya"}
          color={"#333333"}
        />
        <img src={nextGirl} />
      </div>
    </section>
  );
}
