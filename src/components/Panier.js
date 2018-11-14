import React from "react";
import "../App.css";

class Basket extends React.Component {
  render() {
    return (
      <div id="basket">
        <div id="basketSticky">
          <button>Valider mon panier</button>
          <p className="emptyBasket">Votre panier est vide</p>
        </div>
      </div>
    );
  }
}
export default Basket;
