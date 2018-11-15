import React from "react";
import "../App.css";
import MenuSection from "./MenuSection";

class Menu extends React.Component {
  render() {
    let menuSectionsComponents = [];
    const entries = Object.entries(this.props.menu);

    for (let i = 0; i < entries.length; i++) {
      menuSectionsComponents.push(
        <MenuSection key={i} label={entries[i][0]} menuItems={entries[i][1]} />
      );
    }
    return <div>{menuSectionsComponents}</div>;
  }
}
export default Menu;
