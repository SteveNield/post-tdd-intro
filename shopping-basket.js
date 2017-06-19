module.exports = function(){
  var state = {
    products: []
  };

  function add(product){
    state.products.push(product);
  }

  function viewProducts(){
    return state.products;
  }

  function getTotalPrice(){
    return Number(state.products.reduce(function(acc, product){
      return acc + product.price;
    }, 0.0).toFixed(2));
  }

  function applyPercentageDiscount(percentage){
    state.discountPercentage = percentage;
  }

  function getDiscountedTotalPrice(){
    var total = state.products.reduce(function(acc, product){
      return acc + product.price;
    }, 0.0);
    var discountFactor = (state.discountPercentage / 100) + 1;
    return Number(((total / discountFactor).toFixed(2)));
  }

  return {
    add: add,
    viewProducts: viewProducts,
    getTotalPrice: getTotalPrice,
    applyPercentageDiscount: applyPercentageDiscount,
    getDiscountedTotalPrice: getDiscountedTotalPrice
  }
}
