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
    const intervalo = setInterval(() => {
      this.setState({
        number:
          this.state.number < 50 ? this.state.number + 1 : this.state.number
      });
    }, 500);

    this.parouRubinho = () => {
      clearInterval(intervalo);
    };
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
        <button onClick={this.parouRubinho}> STOP </button>
      </>
    );
  }
}
