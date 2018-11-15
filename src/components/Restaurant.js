import React from "react";
import axios from "axios";
import "../App.css";
import Cart from "./Cart";
import Menu from "./Menu";
import RestaurantDescription from "./RestaurantDescription";

class Restaurant extends React.Component {
  state = {
    menu: {},
    restaurant: {},
    cart: []
  };

  render() {
    return (
      <div>
        <div id="background-white">
          <div className="container">
            <RestaurantDescription
              name={this.state.restaurant.name}
              description={this.state.restaurant.description}
              imageUrl={this.state.restaurant.picture}
            />
          </div>
        </div>

        <div id="background-grey">
          <div className="container">
            <div id="menuList">
              <Menu menu={this.state.menu} />
              <Cart />
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
export default Restaurant;
