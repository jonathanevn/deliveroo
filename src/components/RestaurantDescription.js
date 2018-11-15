import React from "react";
import "../App.css";

class RestaurantDescription extends React.Component {
  render() {
    return (
      <div id="restaurant">
        <div className="name-description-Restaurant">
          <h2>{this.props.name}</h2>
          <span className="descriptionRestaurant">
            {this.props.description}
          </span>
        </div>

        <img className="pictureRestaurant" alt="" src={this.props.imageUrl} />
      </div>
    );
  }
}

export default RestaurantDescription;
