import React from "react";
import axios from "axios";

class MenuSelection extends React.Component {
  state = {
    menu: {},
    restaurant: {}
  };

  render() {
    const menuItems = [];
    const entries = Object.entries(this.state.menu);

    for (let i = 0; i < entries.length; i++) {
      menuItems.push(<h2>{entries[i][0]}</h2>);
      for (let j = 0; j < entries[i][1].length; j++) {
        menuItems.push(
          <div>
            {entries[i][1][j].title}
            {entries[i][1][j].description}
            {entries[i][1][j].price}
          </div>
        );
      }
    }

    return (
      <div id="root">
        <div className="container">
          <div id="restaurant">
            <h2>{this.state.restaurant.name}</h2>
            <span class="descriptionRestaurant">
              {this.state.restaurant.description}
            </span>
            <img
              src={this.state.restaurant.picture}
              alt="photo-restaurant"
              width="370px"
            />
          </div>
          <div id="menuList">{menuItems}</div>
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
