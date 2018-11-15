import React from "react";
import "../App.css";

class Cart extends React.Component {
  render() {
    return (
      <div id="basket">
        <div id="basketSticky">
          <button className="confirmButton">Valider mon panier</button>
          <ul>
            <li>
              <span>
                <button>-</button>1 <button>+</button>
              </span>
              <span>Brunch authentique 1 personne</span>
            </li>
          </ul>
          <p className="emptyBasket">Votre panier est vide</p>
        </div>
      </div>
    );
  }
}
export default Cart;
