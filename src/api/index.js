import goodsData from '../api/goods.json';

export default {
  fetchGoods: () => {
    return new Promise( resolve => {
      resolve( goodsData.data || [] );
    } );
  }
};