import React from "react";
import "../App.css";

class Cart extends React.Component {
  render() {
    if (this.props.selectedProducts.length === 0) {
      return (
        <div id="cartEmpty">
          <div id="basketSticky">
            <button className="disableButton">Valider mon panier</button>
            <p className="emptyBasket">Votre panier est vide</p>
          </div>
        </div>
      );
    } else {
      const products = [];
      for (let i = 0; i < this.props.selectedProducts.length; i++) {
        products.push(
          <li id="cartContent">
            <div id="cartButtonMenu">
              <button
                className="quantityButton"
                onClick={() => {
                  this.props.onDecrement(this.props.selectedProducts[i].id);
                }}
              >
                -
              </button>
              {this.props.selectedProducts[i].quantity}
              <button
                className="quantityButton"
                onClick={() => {
                  this.props.onIncrement(this.props.selectedProducts[i].id);
                }}
              >
                +
              </button>
              {this.props.selectedProducts[i].name}
            </div>
            <div className="priceItem">
              {Number(this.props.selectedProducts[i].price) *
                this.props.selectedProducts[i].quantity}
              {"€"}
            </div>
          </li>
        );
      }
      let subtotal = [];
      let total = [];
      let deliveryFees = 2.5;
      for (let j = 0; j < products.length; j++) {
        subtotal =
          Number(subtotal) + Number(this.props.selectedProducts[j].price);
        total = Number(subtotal) + Number(deliveryFees);
      }

      return (
        <div id="cartWithItems">
          <div id="basketSticky">
            <button className="confirmButton">Valider mon panier</button>
            <div>{products}</div>
            <hr />
            <div id="subtotal">
              <div id="subtotal1">
                <div>Sous total</div>
                <div className="priceCart">
                  {subtotal} {"€"}
                </div>
              </div>
              <div id="subtotal2">
                <div>Frais de livraison </div>
                <div className="priceCart">2,50 €</div>
              </div>
            </div>
            <hr />
            <div id="total">
              <div>Total</div>
              <div className="priceCart">
                {total} {"€"}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Cart;
