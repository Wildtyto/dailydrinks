import React, { Component } from 'react';

import './GoodItem.css';

class GoodItem extends Component {

  render() {
    const { data } = this.props;
    return (
      <div className="gooditem">
        <div className="gooditem__name">
          { data.name }
        </div>
        <div className="gooditem__description">
          { data.description }
        </div>
        <div className="gooditem__price">
          NT { data.price }
        </div>
      </div>
    );
  }

}

export default GoodItem;