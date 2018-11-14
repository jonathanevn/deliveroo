import React from "react";
import mainLogo from "../images/Logo.svg";

class Logo extends React.Component {
  render() {
    return (
      <div>
        <img src={mainLogo} alt="Logo Deliveroo" width="130px" height="auto" />
      </div>
    );
  }
}
export default Logo;
