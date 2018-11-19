import React, { Component } from "react";
import PicturesMenu from "./PicturesMenu";

class MenuItem extends Component {
  renderPopular(isPopular) {
    if (isPopular) {
      return <div className="card-popular">★ Populaire</div>;
    } else {
      return null;
    }
  }

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
          <div className="price-popular-container">
            <p className="price">
              {this.props.price} {"€"}{" "}
            </p>
            {this.renderPopular(this.props.popular)}
          </div>
        </div>
        <PicturesMenu src={this.props.imageUrl} />
      </div>
    );
  }
}

export default MenuItem;
