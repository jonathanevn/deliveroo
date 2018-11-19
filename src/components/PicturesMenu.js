import React from "react";
import "../App.css";

class PicturesMenu extends React.Component {
  render() {
    let imgClassName = "";
    if (this.props.src) {
      return <img alt="" className="imageMenu" src={this.props.src} />;
    } else {
      return null;
    }
  }
}

export default PicturesMenu;
