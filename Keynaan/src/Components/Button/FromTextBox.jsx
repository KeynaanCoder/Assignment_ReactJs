import React, { Component } from "react";
import './styles.css'
class FromTextBox extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
  }

  render() {
    return (
      <div className="div">
           <input  placeholder="Enter text" className="txinput"
          value={this.state.name}
          onChange={e => this.setState({ name: e.target.value })}
        />
        <h4>{this.state.name}</h4>
      </div>
    );
  }
}

export default FromTextBox;
