import React from "react";
import "../App.css";

class Cart extends React.Component {
  render() {
    const products = [];
    for (let i = 0; i < this.props.selectedProducts.length; i++) {
      products.push(
        <li>
          <button>-</button>
          <span>{this.props.selectedProducts[i].quantity}</span>
          <button>+</button>
          <span>{this.props.selectedProducts[i].name}</span>
          <span>
            {Number(this.props.selectedProducts[i].price) *
              this.props.selectedProducts[i].quantity}
          </span>
        </li>
      );
    }

    return (
      <div id="basket">
        <div id="basketSticky">
          <button className="confirmButton">Valider mon panier</button>
          <ul>{products}</ul>
          <p className="emptyBasket">Votre panier est vide</p>
        </div>
      </div>
    );
  }
}
export default Cart;
