import React, { Component } from "react";

import MenuItem from "./MenuItem";

class MenuSection extends Component {
  render() {
    let menuItemsComponents = [];
    for (let i = 0; i < this.props.menuItems.length; i++) {
      menuItemsComponents.push(
        <MenuItem
          key={i}
          label={this.props.menuItems[i].title}
          description={this.props.menuItems[i].description}
          price={this.props.menuItems[i].price}
          imageUrl={this.props.menuItems[i].picture}
          popular={Boolean(this.props.menuItems[i].popular)}
        />
      );
    }

    return (
      <div>
        <h2>{this.props.label}</h2>
        <div className="menuItems">{menuItemsComponents}</div>
      </div>
    );
  }
}

export default MenuSection;
