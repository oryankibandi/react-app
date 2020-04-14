import React, { Component } from "react";
import "./card-list-styles.css";
import Card from "./card";

class CardList extends Component {
  state = {};
  render() {
    return (
      <div className="card-list">
        {this.props.monsters.map((monster) => (
          <Card key={monster.id} monster={monster} />
        ))}
      </div>
    );
  }
}

export default CardList;
