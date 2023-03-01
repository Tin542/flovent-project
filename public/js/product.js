let price = 0;
const increasePrice = () => {
  price = price + 1;
  document.getElementById("price").innerHTML = price;
};
const decreasePrice = () => {
  if (price <= 0) {
    price = 0;
  } else {
    price = price - 1;
  }
  document.getElementById("price").innerHTML = price;
};
