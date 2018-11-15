import React from "react";
import "../App.css";

class PicturesMenu extends React.Component {
  render() {
    let imgClassName = "";
    if (this.props.src === undefined) {
      imgClassName = "noImageMenu";
    } else {
      imgClassName = "imageMenu";
    }

    return <img alt="" className={imgClassName} src={this.props.src} />;
  }
}

export default PicturesMenu;
