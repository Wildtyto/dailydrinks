import React, { Component } from 'react';
import { connect } from 'react-redux';

import actions from '../actions';

import './GoodCorner.css';

class GoodCorner extends Component {

  render() {
    return (
      <div className={`goodcorner ${ this.componentClass }`}>
        <button className="goodcorner__plus" onClick={ () => this.onPlusClicked() }>
          ＋
        </button>
        <div className="goodcorner__amount">
          { this.amount }
        </div>
        <button className="goodcorner__minus" onClick={ () => this.onMinusClicked() }>
          －
        </button>
      </div>
    );
  }

  get componentClass() {
    const { className } = this.props;
    return className;
  }
  
  get amount() {
    const { id, orders } = this.props;
    return orders[id] || 0 ;
  }
  
  onPlusClicked() {
    const { id, plusOrder } = this.props;
    plusOrder(id);
  }
  
  onMinusClicked() {
    const { id, minusOrder } = this.props;
    minusOrder(id);
  }

}

export default connect(
  state => ({
    orders: state.orders
  }),
  dispatch => ({
    plusOrder: id => dispatch(actions.plusOrder(id)),
    minusOrder: id => dispatch(actions.minusOrder(id))
  })
)(GoodCorner);