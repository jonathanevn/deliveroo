import React from "react";
import axios from "axios";
import "../App.css";
import Basket from "./Panier";
import AllCards from "./AllCards";

class MenuSelection extends React.Component {
  state = {
    menu: {},
    restaurant: {}
  };

  render() {
    return (
      <div>
        <div id="background-white">
          <div className="container">
            <div id="restaurant">
              <div className="presentationRestaurant">
                <h2>{this.state.restaurant.name}</h2>
                <span className="infoRestaurant">
                  {this.state.restaurant.description}
                </span>
              </div>
              <img
                className="pictureRestaurant"
                alt=""
                src={this.state.restaurant.picture}
              />
            </div>
          </div>
        </div>

        <div id="background-grey">
          <div className="container">
            <div id="menuList">
              <AllCards label={this.state.menu} />
              <Basket />
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    axios.get("https://deliveroo-api.now.sh/menu").then(response => {
      this.setState({
        menu: response.data.menu,
        restaurant: response.data.restaurant
      });
    });
  }
}
export default MenuSelection;
