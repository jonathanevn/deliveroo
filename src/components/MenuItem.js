import React, { Component } from "react";
import PicturesMenu from "./PicturesMenu";

class MenuItem extends Component {
  render() {
    let description =
      this.props.description.length > 80
        ? this.props.description.substring(0, 80) + "..."
        : this.props.description;

    return (
      <div className="menuCards" onClick={this.props.handleClick}>
        <div className="menuInfo">
          <p className="title">{this.props.label}</p>
          <p className="description">{description}</p>
          <p className="price">
            {this.props.price} {"€"}
          </p>
        </div>
        <PicturesMenu src={this.props.imageUrl} />
      </div>
    );
  }
}

export default MenuItem;
