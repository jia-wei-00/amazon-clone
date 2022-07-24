export const addToBasket = (payload) => {
  return {
    type: "ADD_TO_BASKET",
    item: payload,
  };
};

export const removeFromBasket = (payload) => {
  return {
    type: "REMOVE_FROM_BASKET",
    id: payload,
  };
};

export const userLogin = (payload) => {
  return {
    type: "SET_USER",
    user: payload,
  };
};

export const userLogout = () => {
  return {
    type: "SET_USER",
    user: null,
  };
};
