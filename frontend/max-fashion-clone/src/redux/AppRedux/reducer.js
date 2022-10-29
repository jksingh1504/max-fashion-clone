import * as actionType from "./actionType";

const initial_state = {
  data: [],
  user: JSON.parse(localStorage.getItem("max_clone_user")) || {},
  product_size: "",
  cart: [],
  total: 0,
};


export const AppReducer = (state = initial_state, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionType.SET_USER:
      localStorage.setItem("max_clone_user", JSON.stringify(payload));
      return { ...state, user: payload };

    case actionType.SET_PRODUCT_SIZE:
      return { ...state, product_size: payload };

    case actionType.SET_CART:
        state.total=0;
        for(let i=0;i<payload.length;i++){
            state.total+=payload[i].price*payload[i].quantity
        }
      return { ...state, cart: payload };

    default:
      return state;
  }
};
