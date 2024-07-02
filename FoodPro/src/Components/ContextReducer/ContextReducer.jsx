import React, { createContext, useContext, useReducer } from "react";

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, {}];
    default:
      console.log("Error in reducer");
      return state; // Ensure to return state for default case
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, []);

  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);
