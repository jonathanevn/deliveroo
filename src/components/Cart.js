import React from "react";
import "../App.css";

class Cart extends React.Component {
  render() {
    if (this.props.selectedProducts.length === 0) {
      return (
        <div id="basket">
          <div id="basketSticky">
            <button className="confirmButton">Valider mon panier</button>
            <p className="emptyBasket">Votre panier est vide</p>
          </div>
        </div>
      );
    } else {
      const products = [];
      for (let i = 0; i < this.props.selectedProducts.length; i++) {
        products.push(
          <li>
            <button
              onClick={() => {
                this.props.onDecrement(this.props.selectedProducts[i].id);
              }}
            >
              -
            </button>
            <span>{this.props.selectedProducts[i].quantity}</span>
            <button
              onClick={() => {
                this.props.onIncrement(this.props.selectedProducts[i].id);
              }}
            >
              +
            </button>
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
            {products}
          </div>
        </div>
      );
    }
  }
}

export default Cart;
