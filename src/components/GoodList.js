import React, { Component } from 'react';
import { connect } from 'react-redux';

import actions from '../actions';
import Api from '../api';

import GoodItem from './GoodItem';
import './GoodList.css';

class GoodList extends Component {

  render() {
    const { goods } = this.props;
    return (
      <div className="goodlist">
        { goods.map( item => (
            <GoodItem
              key={ item.id }
              data={ item }
            />
        )) }
      </div>
    );
  }

  componentDidMount() {
    const { setGoods } = this.props;
    Api.fetchGoods().then( response => setGoods(response) )
  }

}

export default connect(
  state => ({
    goods: state.goods
  }), dispatch => ({
    setGoods: value => dispatch(actions.setGoods(value))
  })
)(GoodList);