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
      if (newCart[i].id === menuItem.id) {
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
        <div className="background-white">
          <div className="container">
            <RestaurantDescription
              name={this.state.restaurant.name}
              description={this.state.restaurant.description}
              imageUrl={this.state.restaurant.picture}
            />
          </div>
        </div>

        <div className="background-grey">
          <div className="container">
            <div id="menuList">
              <Menu menu={this.state.menu} handleClick={this.handleOnClick} />
              <Cart
                name={this.state.restaurant.name}
                selectedProducts={this.state.cart}
                onUpdateCart={(id, qty) => {
                  const newCart = [...this.state.cart];
                  for (let j = 0; j < newCart.length; j++) {
                    if (newCart[j].id === id) {
                      newCart[j].quantity += qty;
                    }
                    if (newCart[j].quantity < 1) {
                      newCart[j].quantity = 0;
                      /* newCart[j].splice(j, 1); */
                    } /* else {
                      newCart[j].splice(j, 1);
                    } */
                  }
                  this.setState({
                    cart: newCart
                  });
                }}
                /* onIncrement={id => {
                  const newCart = [...this.state.cart];
                  console.log("id:", id);
                  for (let k = 0; k < newCart.length; k++) {
                    if (newCart[k].id === id) {
                      newCart[k].quantity++;
                    }
                  }
                  this.setState(
                    {
                      cart: newCart
                    },
                    () => console.log(this.state.cart)
                  );
                }}
                onDecrement={id => {
                  const newCart = [...this.state.cart];
                  for (let j = 0; j < newCart.length; j++) {
                    if (newCart[j].id === id) {
                      newCart[j].quantity--;
                    }
                    if (newCart[j].quantity >= 1) {
                      newCart[j].quantity = 0;
                      newCart[j].slice(i, 1)

                    }
                  }
                  this.setState({
                    cart: newCart
                  });
                }} */
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
