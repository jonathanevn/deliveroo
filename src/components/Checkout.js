import React from "react";
import "../Checkout.css";
import Restaurant from "./Restaurant";

class Form extends React.Component {
  state = {
    flat: "",
    code: "",
    street_address: "",
    postcode: "",
    city: "",
    phone: "",
    instructions: "",
    submittedCart: this.props.location.submittedCart
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
            <form onSubmit={this.handleSubmit}>
              <div id="nameRestaurant"> {this.props.location.restaurant}</div>
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
                    type="number"
                    value={this.state.postcode}
                    onChange={this.handlePostcodeChange}
                    placeholder={"ex: 75011"}
                  />
                </div>
                <div className="rightInput">
                  <h5>Ville</h5>
                  <input
                    type="text"
                    className="rightInput"
                    value={this.state.city}
                    onChange={this.handleCityChange}
                    placeholder={"ex: Paris"}
                  />
                </div>
              </div>

              <h5>Numéro de téléphone</h5>
              <input
                type="number"
                value={this.state.phone}
                onChange={this.handlePhoneChange}
                placeholder={"ex: +9 77 55 03 30"}
              />
              <h5>Instructions pour votre livreur ?</h5>
              <textarea
                className="instructions"
                type="text"
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
              <input
                type="submit"
                className="submitButton"
                value="Confirmer & payer"
              />
            </form>
          </div>

          <div id="cart">
            <div class="PanierLabel">Panier</div>
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
                <div className="priceItemSubtotal"> 2,50€</div>
              </div>
            </div>

            <hr />
            <div id="totalCart">
              <div>Total</div>
              <div>
                {this.props.location.total}
                {"€"}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
