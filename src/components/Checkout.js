import React from "react";

class Form extends React.Component {
  state = {
    flat: "",
    code: "",
    street_address: "",
    postcode: "",
    city: "",
    phone: "",
    instructions: ""
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

  render() {
    return (
      <div>
        {/*       <h2>
          {console.log("nom resto:", this.props.name)} {this.props.name}
        </h2> */}
        <form onSubmit={this.handleSubmit}>
          <h2>Adresse de livraison</h2>
          <div>Etage et numéro d'appartement</div>
          <input
            type="text"
            value={this.state.flat}
            onChange={this.handleFlatChange}
            placeholder={"ex: Appartement n°15"}
          />
          <div>Digicode</div>
          <input
            type="text"
            value={this.state.code}
            onChange={this.handleCodeChange}
            placeholder={"ex: B123"}
          />
          <div>Adresse</div>
          <input
            type="text"
            value={this.state.street_address}
            onChange={this.handleStreetAddressChange}
            placeholder={"ex: 100 rue de Rivoli"}
          />
          <div>Code postal</div>
          <input
            type="number"
            value={this.state.postcode}
            onChange={this.handlePostcodeChange}
            placeholder={"ex: 75011"}
          />
          <div>Ville</div>
          <input
            type="text"
            value={this.state.city}
            onChange={this.handleCityChange}
            placeholder={"ex: Paris"}
          />
          <div>Numéro de téléphone</div>
          <input
            type="number"
            value={this.state.phone}
            onChange={this.handlePhoneChange}
            placeholder={"ex: +9 77 55 03 30"}
          />
          <div>Instructions pour votre livreur ?</div>
          <input
            type="text"
            value={this.state.instructions}
            onChange={this.handleInstructionsChange}
            placeholder={
              "ex: C'est la porte noire près de l'animalerie. Merci d'appeler lorsque vous êtes arrivé."
            }
          />
          <div>Votre commande arrivera dans 15 - 25 minutes.</div>
          <input type="submit" value="Confirmer & payer" />
        </form>
      </div>
    );
  }
}

export default Form;
