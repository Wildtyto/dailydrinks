import { combineReducers } from 'redux';

const goods = (state = [], action) => {
  switch (action.type) {
    case 'SET_GOODS':
      return action.value;
    default:
      return state;
  }
};

const orders = (state = [], action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({
  goods,
  orders
});