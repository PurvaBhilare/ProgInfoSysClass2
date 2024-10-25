const basket = {
    laptop: 2,
    mobile: 1,
    watch: 3,
  };
  
  const prices = {
    laptop: 100,
    mobile: 100,
    watch: 100,
    smartwatch: 400,
  };
  
  function calTotalPrice(basket, prices) {
    let total_price = 0;
    for (let item in basket) {
      if (prices[item]) {
        total_price += basket[item] * prices[item];
      }
    }
    return total_price;
  }
  
  let basket_price = calTotalPrice(basket, prices);
  console.log(`Basket price is : ${basket_price}`);