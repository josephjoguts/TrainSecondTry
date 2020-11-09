import React, { useState } from "react";
import useVisibility from "src/hooks/useVisibility";
import "./AppearingText.css";
export interface Props {
  text: string;
  color: string;
}

export function AppearingText(props: Props) {
  const [isVisible, textRef] = useVisibility<HTMLParagraphElement>(100);

  return (
    <h3
      className={`${isVisible ? "TextShown" : ""} AppearingText`}
      ref={textRef}
      style={{ color: `${props.color}` }}
    >
      {props.text}
    </h3>
  );
}
