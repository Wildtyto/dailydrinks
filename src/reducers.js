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
    case 'PLUS_ORDER':
      return {
        ...state,
        [action.id]: ( state[action.id] || 0 ) + 1 
      };
    case 'MINUS_ORDER':
      return {
        ...state,
        [action.id]: ( state[action.id] || 0 ) > 0 ? state[action.id] - 1 : 0
      };
    default:
      return state;
  }
};

export default combineReducers({
  goods,
  orders
});