import React, { Component } from 'react';
import { connect } from 'react-redux';

import actions from '../actions';

import './OrderBox.css';

class OrderBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isCarting: false
        }
    }

    render() {
        return (
            <div className={ `orderbox ${ this.componentClass }` }>
                <div className="orderbox__list">
                    { this.carts.map( cart => (
                        <div key={ cart.id }>
                            { cart.name }  x { cart.amount }
                        </div>
                    )) }
                </div>
                <div className="orderbox__sum">
                    { `NT ${ this.sum }` }
                </div>
                <button className="orderbox__cart" onClick={ () => this.onCartClicked() }>Cart</button>
                <button className="orderbox__submit" onClick={ () => this.onSubmitClicked() }>Submit</button>
            </div>
        );
    }

    get componentClass() {
        const { className = '', orders } = this.props;
        const classes = [];
        Object.values(orders).filter( amount => !!amount ).length && classes.push('orderbox--working');
        this.state.isCarting && classes.push('orderbox--carting');
        return `${ className } ${ classes.join(' ') }`;
    }

    get carts() {
        const { goods, orders } = this.props;
        return Object.keys(orders).map( id => ({
            ...goods.find( ({ id: goodId }) => goodId === id ),
            amount: orders[id]
        }) );
    }

    get sum() {
        const { orders, goods } = this.props;
        return Object.keys(orders).reduce( (result, id) => {
            result += orders[id] * goods.find( ({ id: goodId }) => goodId === id ).price;
            return result;
        } , 0);
    }

    onCartClicked() {
        this.setState({ isCarting: true });
    }

    onSubmitClicked() {
        const { clearOrders } = this.props;
        this.setState({ isCarting: false });
        clearOrders();
    }
    
}

export default connect(
    state => ({
        goods: state.goods,
        orders: state.orders
    }),
    dispatch => ({
        clearOrders: () => dispatch(actions.clearOrders())
    })
)(OrderBox);