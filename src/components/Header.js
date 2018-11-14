import React from "react";
import Logo from "./Logo";

class Header extends React.Component {
  render() {
    return (
      <div id="header" className="container">
        <Logo />
      </div>
    );
  }
}
export default Header;
