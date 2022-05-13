import React from "react";

export default class Batata extends React.Component {
  state = {
    number: 0
  };

  Resetar = () => {
    this.setState({
      number: 0
    });
  };

  Add = () => {
    this.setState({
      number: this.state.number + 1
    });

    setInterval(() => {
      this.setState({
        number: this.state.number + 1
      });
    }, 500);
  };

  componentDidMount() {
    document.title = this.state.number;
  }

  render() {
    return (
      <>
        <h2> {this.state.number} </h2>
        <button onClick={this.Add}> + </button>
        <button onClick={this.Resetar}> Resetar </button>
      </>
    );
  }
}
