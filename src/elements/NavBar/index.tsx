import React from "react";
import black_logo from "src/images/logo.svg";
import white_logo from "src/images/logo_white.svg";
import selectedItem3 from "src/images/techniquecard_picked_item.png";
import selectedItem4 from "src/images/stations_picked_item.png";
import "./NavBar.css";
export interface Props {
  logoWhite?: boolean;
  border?: boolean;
  selectedItem?: number;
}
function NavBar(props: Props) {
  const logo = props.logoWhite ? white_logo : black_logo;
  let Menu = () => {
    return (
      <div className={`nav__menu menu ${props.border ? "border" : ""}`}>
        <a>Metrotram</a>
        <a>Hystory</a>
        <a>
          {props.selectedItem === 3 ? <img src={selectedItem3} /> : "Technique"}
        </a>
        <a>
          {props.selectedItem === 4 ? <img src={selectedItem4} /> : "Stations"}
        </a>
      </div>
    );
  };
  return (
    <nav className={`card__nav nav ${props.border ? "border" : " "}`}>
      <img className={"logo"} src={logo} />
      <Menu />
    </nav>
  );
}
export default NavBar;
