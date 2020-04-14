import React, { Component } from "react";
import "./card-styles.css";

class Card extends Component {
  render() {
    return (
      <div className="card-container">
        <img
          alt="monster"
          src={`https://robohash.org/${this.props.monster.id}?set=set5?size=180×180`}
        />
        <h2>
          {this.props.monster.name}
          <br />
        </h2>
        <h3> {this.props.monster.email}</h3>
      </div>
    );
  }
}

export default Card;
