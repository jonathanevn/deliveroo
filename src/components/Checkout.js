import React from "react";
import "../Checkout.css";
import Restaurant from "./Restaurant";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "react-stripe-elements"; //importer le composant Element

class Form extends React.Component {
  state = {
    submittedCart: this.props.location.submittedCart,
    restaurant: this.props.location.restaurant
  };

  handleFlatChange = event => {
    this.setState({ flat: event.target.value });
  };
  handleCodeChange = event => {
    this.setState({ code: event.target.value });
  };
  handleStreetAddressChange = event => {
    this.setState({ street_address: event.target.value });
  };
  handlePostcodeChange = event => {
    this.setState({ postcode: event.target.value });
  };
  handleCityChange = event => {
    this.setState({ city: event.target.value });
  };
  handlePhoneChange = event => {
    this.setState({ phone: event.target.value });
  };
  handleInstructionsChange = event => {
    this.setState({ instructions: event.target.value });
  };

  handleSubmit = event => {
    console.log({
      flat: this.state.flat,
      code: this.state.code,
      street_address: this.state.street_address,
      postcode: this.state.postcode,
      city: this.state.city,
      phone: this.state.phone,
      instructions: this.state.instructions
    });
    alert("Adresse de livraison enregistrée" + this.state);
    event.preventDefault();
  };

  handleCart = () => {
    const products = [];
    for (let i = 0; i < this.props.location.submittedCart.length; i++) {
      products.push(
        <div id="cartItems" key={i}>
          <div id="cartItem">
            <div id="cartQuantityName">
              <div className="quantity">
                {this.props.location.submittedCart[i].quantity}
                {"x"}
              </div>
              <div>{this.props.location.submittedCart[i].name}</div>
            </div>

            <div className="priceItem">
              {this.props.location.submittedCart[i].price}
              {"€"}
            </div>
          </div>
        </div>
      );
    }
    return products;
  };

  render() {
    return (
      <div id="background">
        <div id="container">
          <div id="form">
            <div id="nameRestaurant">{this.state.restaurant}</div>
            <Elements>
              <CheckoutForm total={this.props.location.total} />
              {/* encapsuler le composent CheckoutForm dans le composant Element. 
              Ce sont des composants créés par Stripe. 
              Dans le composant CheckoutForm il ne faut pas oublier de le total de la transaction.
              Ainsi Stripe sait le montant à payer.*/}
            </Elements>
          </div>

          <div id="cart">
            <div className="PanierLabel">Panier</div>
            {this.handleCart()}
            <hr />

            <div id="subtotalCart">
              <div className="subtotal1line">
                Sous-total
                <div className="priceItemSubtotal">
                  {this.props.location.subtotal}
                  {"€"}
                </div>
              </div>

              <div className="subtotal1line">
                Frais de livraison
                <div className="priceItemSubtotal">
                  {this.props.location.shipping}
                </div>
              </div>
            </div>

            <hr />
            <div className="cart-tip-total">
              <div className="total-tip">
                <span>Pourboir livreur</span>
                <span>
                  {this.props.location.tip} {"€"}
                </span>
              </div>
              <div className="total-cart">
                <span>Total</span>
                <span>
                  {this.props.location.total}
                  {"€"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
