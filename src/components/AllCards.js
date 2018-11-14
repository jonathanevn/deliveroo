import React from "react";
import "../App.css";

class AllCards extends React.Component {
  render() {
    const menuItems = [];
    const entries = Object.entries(this.props.label);

    for (let i = 0; i < entries.length; i++) {
      menuItems.push(<h2>{entries[i][0]}</h2>);
      const menuItemsIntermediaire = [];
      for (let j = 0; j < entries[i][1].length; j++) {
        menuItemsIntermediaire.push(
          <div className="menuCards">
            <div className="menuInfo">
              <p className="titleRestaurant">{entries[i][1][j].title}</p>
              <p className="descriptionRestaurant">
                {entries[i][1][j].description}
              </p>
              <span className="price">
                {entries[i][1][j].price} {"€"}
              </span>
            </div>
            <img className="imageMenu" alt="" src={entries[i][1][j].picture} />
          </div>
        );
      }
      menuItems.push(
        <div className="allMenuCards">{menuItemsIntermediaire}</div>
      );
    }
    return <div>{menuItems}</div>;
  }
}
export default AllCards;
