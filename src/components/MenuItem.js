import React, { Component } from "react";
import PicturesMenu from "./PicturesMenu";
import Description from "./Description";

class MenuItem extends Component {
  render() {
    return (
      <div className="menuCards">
        <div className="menuInfo">
          <p className="title">{this.props.label}</p>
          <p className="description">{this.props.description}</p>
          <p>
            {this.props.price} {"€"}
          </p>
        </div>
        <PicturesMenu src={this.props.imageUrl} />
      </div>
    );
  }
}

export default MenuItem;
