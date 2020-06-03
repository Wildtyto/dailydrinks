import React, { Component } from 'react';
import { connect } from 'react-redux';

import actions from '../actions';
import Api from '../api';

class GoodList extends Component {

  render() {
    const { goods } = this.props;
    return (
        <div>
          { goods.map( item => (
              <div
                key={ item.id }
              >
                { item.name }
              </div>
          )) }
        </div>
      );
    }

  componentDidMount() {
    const { setGoods } = this.props;
    Api.fetchGoods()
      .then( res => {
        setGoods(res)
      })
  }

}

export default connect(
  state => ({
    goods: state.goods
  }), dispatch => ({
    setGoods: value => dispatch(actions.setGoods(value))
  })
)(GoodList);