import React, { Component } from 'react';

class Addfunc extends Component {
  constructor(props) {
    super(props);
    this.state = { a: 0, b: 0, c: 0};
  }

  addNumber = () => {
    this.setState({ c: Number(this.state.a) + Number(this.state.b) });
  }

  handleChangeA = (e) => {
    this.setState({ a: e.target.value });
  };

  handleChangeB = (e) => {
    this.setState({ b: e.target.value });
  };

  render() {
    return (
      <div>
        <div>
          a: <input type="number" value={this.state.a} onChange={this.handleChangeA} />
        </div>
        <div>+</div>
        <div>
          b: <input type="number" value={this.state.b} onChange={this.handleChangeB} />
        </div>
        <button onClick={this.addNumber}>=</button>
        <div>c: {this.state.c}</div>
      </div>
    );
  }
}

export default Addfunc;