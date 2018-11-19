import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import axios from "axios";
import "../Checkout.css";

const style = {
  base: {
    color: "#32325d",
    lineHeight: "18px",
    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
    fontSmoothing: "antialiased",
    fontSize: "16px",
    "::placeholder": {
      color: "#aab7c4"
    },
    border: "solid 1px #01ccbc"
  },
  invalid: {
    color: "#fa755a",
    iconColor: "#fa755a"
  }
};

class CheckoutForm extends Component {
  state = {
    flat: "",
    code: "",
    street_address: "",
    postcode: "",
    city: "",
    phone: "",
    instructions: ""
  };

  handleSubmit = event => {
    // On empêche le formulaire d'être envoyé grâce à `event.preventDefault();`
    event.preventDefault();
    // On utilise la fonction createToken pour envoyer la demande de Tokenization à Stripe
    this.props.stripe
      .createToken({
        name: "Xavier Colombel",
        address_line1: "42, rue des Orteaux"
      })
      .then(({ token }) => {
        console.log("Token:", token);
        // On poste l'objet Token à notre back-end
        axios
          .post("https://xxxxxxx.ngrok.io/api", {
            token
          })
          .then(function(response) {
            console.log(response);
          })
          .catch(function(error) {
            console.log(error);
          });
      });
  };

  render() {
    return (
      <form className="checkout-form" onSubmit={this.handleSubmit}>
        <div style={{ width: "100%" }}>
          <h3>Adresse de livraison</h3>

          <div className="twoInput">
            <div className="leftInput">
              <h5>Etage et numéro d'appartement</h5>
              <input
                type="text"
                value={this.state.flat}
                onChange={this.handleFlatChange}
                placeholder={"ex: Appartement n°15"}
              />
            </div>
            <div className="rightInput">
              <h5>Digicode</h5>
              <input
                type="text"
                value={this.state.code}
                onChange={this.handleCodeChange}
                placeholder={"ex: B123"}
              />
            </div>
          </div>

          <h5>Adresse</h5>
          <input
            type="text"
            value={this.state.street_address}
            onChange={this.handleStreetAddressChange}
            placeholder={"ex: 100 rue de Rivoli"}
          />
          <div className="twoInput">
            <div className="leftInput">
              <h5>Code postal</h5>
              <input
                type="text"
                value={this.state.postcode}
                onChange={this.handlePostcodeChange}
                placeholder={"ex: 75011"}
              />
            </div>
            <div className="rightInput">
              <h5>Ville</h5>
              <input
                type="text"
                value={this.state.city}
                onChange={this.handleCityChange}
                placeholder={"ex: Paris"}
              />
            </div>
          </div>

          <h5>Numéro de téléphone</h5>
          <input
            type="text"
            value={this.state.phone}
            onChange={this.handlePhoneChange}
            placeholder={"ex: +9 77 55 03 30"}
          />
          <h5>Instructions pour votre livreur ?</h5>
          <textarea
            className="instructions"
            value={this.state.instructions}
            onChange={this.handleInstructionsChange}
            placeholder={
              "ex: C'est la porte noire près de l'animalerie. Merci d'appeler lorsque vous êtes arrivé."
            }
          />
          <div id="deliveryInfo">
            Votre commande arrivera dans{" "}
            <span className="bold">15 - 25 minutes</span>.
          </div>
          <hr />
          <div
            style={{
              border: "solid 1px #333333",
              padding: 10,
              borderRadius: 3
            }}
          >
            <CardElement style={style} />
          </div>
        </div>
        <button className="submitButton">Confirmer la commande</button>
        {/* <input
                  type="submit"
                  className="submitButton"
                  value="Confirmer & payer"
                /> */}
      </form>
    );
  }
}
export default injectStripe(CheckoutForm);
