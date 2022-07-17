export const addToBasket = (payload) => {
  return {
    type: "ADD_TO_BASKET",
    item: payload,
  };
};
