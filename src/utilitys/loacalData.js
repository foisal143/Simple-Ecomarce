const getLocalValue = () => {
  let datas = {};
  const addedData = JSON.parse(localStorage.getItem('shopping-cart'));
  if (addedData) {
    datas = addedData;
  }
  return datas;
};

const addToLocalStorage = id => {
  const localData = getLocalValue();
  const quantity = localData[id];
  if (localData) {
    localData[id] = quantity + 1;
  } else {
    localData[id] = 1;
  }
  localStorage.setItem('shopping-cart', JSON.stringify(localData));
};

const removeSingleCart = id => {
  const localData = getLocalValue();
  if (id in localData) {
    delete localData[id];
  }
};
const removeAllCarts = () => {
  localStorage.removeItem('shopping-cart');
};
export { removeAllCarts, addToLocalStorage, removeSingleCart, getLocalValue };
