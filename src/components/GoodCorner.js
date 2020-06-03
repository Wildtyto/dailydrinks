import React, { Component } from 'react';


import './GoodCorner.css';

class GoodCorner extends Component {

  render() {
    const { amount = 0 } = this.props;
    return (
      <div className={`goodcorner ${ this.componentClass }`}>
        <button className="goodcorner__plus">
          ＋
        </button>
        <div className="goodcorner__amount">
          { amount }
        </div>
        <button className="goodcorner__minus">
          －
        </button>
      </div>
    );
  }

  get componentClass() {
    return this.props.className
  }

}

export default GoodCorner;