import React from "react";
import "./TramWith.css";
import phone1 from "src/images/phones/p1.png";
import phone2 from "src/images/phones/p2.png";
import phone3 from "src/images/phones/p3.png";
import man from "src/images/mother_calls.png";
import useVisibility from "src/hooks/useVisibility";
import { RedCard } from "src/components/RedCard";
import { AppearingText } from "src/elements/AppearingText/AppearingText";
import { TechniqueCard } from "src/components/TechniqueCard";
export function TramWith() {
  const [isVisible, refPhones] = useVisibility<HTMLDivElement>(150);
  return (
    <section className={"container__TramWith TramWith"}>
      <div className={"TramWith__phones phones"} ref={refPhones}>
        <img src={phone1} className={`phone1 ${isVisible ? "show" : ""}`} />
        <img src={phone2} className={`phone2 ${isVisible ? "show" : ""}`} />
        <img src={phone3} className={`phone3 ${isVisible ? "show" : ""}`} />
      </div>
      <RedCard />
      <div className={"TramWith__content content"}>
        <div className={"circle"}></div>
        <img src={man} />
        <AppearingText
          text={"Tram with delusions \n" + "of grandeur"}
          color={"#FF6F61"}
        />
      </div>
      <TechniqueCard />
    </section>
  );
}
