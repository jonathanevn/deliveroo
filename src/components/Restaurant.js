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

  handleOnClick = menuItem => {
    const oldCart = this.state.cart;
    const newCart = [...this.state.cart];
    let productFound = false;
    for (let i = 0; i < newCart.length; i++) {
      console.log(newCart[i].name);
      if (newCart[i].id === menuItem.id) {
        console.log(newCart[i].id);
        productFound = true;
        newCart[i].quantity++;
      }
    }
    if (productFound === false) {
      newCart.push({
        id: menuItem.id,
        quantity: 1,
        name: menuItem.title,
        price: Number(menuItem.price)
      });
    }

    this.setState({ cart: newCart });
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
              <Menu menu={this.state.menu} handleClick={this.handleOnClick} />
              <Cart
                selectedProducts={this.state.cart}
                onIcrement={id => {
                  const newCart = [...this.state.cart];

                  for (let i = 0; i < newCart.length; i++) {
                    if (newCart[i].id === id) {
                      newCart[i].quantity++;
                    }
                  }
                  this.setState({
                    cart: newCart
                  });
                }}
              />
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
