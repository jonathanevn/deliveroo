import React from "react";
import "../App.css";

class Description extends React.Component {
  render() {
    const description =
      this.props.text.length > 60
        ? this.props.text.substring(0, 60) + "..."
        : this.props.text;
    return <p className="description">{description}</p>;
  }
}

export default Description;
