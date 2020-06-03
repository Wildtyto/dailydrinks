export default {
  setGoods: value => ({
    type: 'SET_GOODS',
    value
  }),
  plusOrder: id => ({
    type: 'PLUS_ORDER',
    id
  }),
  minusOrder: id => ({
    type: 'MINUS_ORDER',
    id
  })
};