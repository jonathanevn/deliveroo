import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

class Cart extends React.Component {
  state = {
    shipping: 2.5,
    tip: 0
  };

  updateTip(value) {
    const tip = this.state.tip + value;
    if (tip >= 0) {
      this.setState({
        tip
      });
    }
  }

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
          <li key={i} id="cartContent">
            <div id="cartButtonMenu">
              <button
                className="quantityButton"
                /* onClick={() => {
                  this.props.onDecrement(this.props.selectedProducts[i].id);
                }} */
                onClick={() => {
                  this.props.onUpdateCart(
                    this.props.selectedProducts[i].id,
                    -1
                  );
                }}
              >
                -
              </button>
              {this.props.selectedProducts[i].quantity}
              <button
                className="quantityButton"
                /* onClick={() => {
                  this.props.onIncrement(this.props.selectedProducts[i].id);
                }} */
                onClick={() => {
                  this.props.onUpdateCart(this.props.selectedProducts[i].id, 1);
                }}
              >
                +
              </button>
              {this.props.selectedProducts[i].name}
            </div>
            <div className="priceItem">
              {(
                Number(this.props.selectedProducts[i].price) *
                this.props.selectedProducts[i].quantity
              ).toFixed(2)}
              {"€"}
            </div>
          </li>
        );
      }
      let subtotal = 0;
      let total = 0;
      for (let j = 0; j < this.props.selectedProducts.length; j++) {
        subtotal +=
          this.props.selectedProducts[j].price *
          this.props.selectedProducts[j].quantity;
        total = (subtotal + this.state.shipping + this.state.tip).toFixed(2);
      }

      return (
        <div id="cartWithItems">
          <Link
            to={{
              pathname: "/checkout",
              submittedCart: this.props.selectedProducts,
              subtotal: subtotal,
              total: total,
              restaurant: this.props.name,
              shipping: this.state.shipping,
              tip: this.state.tip
            }}
          >
            <button className="confirmButton">Valider mon panier</button>
          </Link>

          <div>{products}</div>
          <hr />

          <div id="subtotal">
            <div id="subtotal1">
              <div>Sous total</div>
              <div className="priceCart">
                {subtotal.toFixed(2)} {"€"}
              </div>
            </div>
            <div id="subtotal2">
              <div>Frais de livraison </div>
              <div className="priceCart">2,50 €</div>
            </div>
          </div>
          <hr />

          <div className="cart-tip">
            <span>Pourboire livreur</span>
            <div className="cart-tip-buttons">
              <button
                className="quantityButton"
                onClick={() => {
                  this.updateTip(-0.5);
                }}
              >
                -
              </button>

              <button
                className="quantityButton"
                onClick={() => {
                  this.updateTip(+0.5);
                }}
              >
                +
              </button>
            </div>
            <span className="cart-product-price">
              {this.state.tip} {"€"}
            </span>
          </div>

          <div id="total">
            <div>Total</div>
            <div className="priceCart">
              {total} {"€"}
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Cart;
