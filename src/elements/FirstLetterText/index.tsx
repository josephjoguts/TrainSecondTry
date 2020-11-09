import React from "react";
import "./FirstLetterText.css";
export interface Props {
  text: string;
}
export function FirstLetterText(props: Props) {
  return <p className={"FirstLetterText"}>{props.text}</p>;
}
