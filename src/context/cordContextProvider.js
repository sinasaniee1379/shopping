import React, { createContext, useReducer } from "react";

const initialState = {
  selectItem: [],
  itemCounters: 0,
  total: 0,
  checkout: false,
};

const setItem = (items) => {
  const itemCounters = items.reduce(
    (total, product) => total + product.quantity,
    0
  );
  const total = items
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);
  return { total, itemCounters };
};
const cardReducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectItem.find((item) => item.id === action.payload.id)) {
        state.selectItem.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return {
        ...state,
        selectItem: [...state.selectItem],
        ...setItem(state.selectItem),
        checkout: false,
      };
    case "REMOVE_ITEM":
      const newSelected = state.selectItem.filter(
        (item) => item.id !== action.payload.id
      );
      console.log(newSelected);
      return {
        ...state,
        selectItem: [...newSelected],
        ...setItem(newSelected),
      };
    case "INCREASE":
      const indexI = state.selectItem.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectItem[indexI].quantity++;
      return {
        ...state,
        ...setItem(state.selectItem),
      };

    case "DECREASE":
      const indexD = state.selectItem.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectItem[indexD].quantity--;
      return {
        ...state,
        ...setItem(state.selectItem),
      };

    case "CHECKOUT":
      return {
        selectItem: [],
        itemCounters: 0,
        total: 0,
        checkout: true,
      };
    case "CLEAR":
      return {
        selectItem: [],
        itemCounters: 0,
        total: 0,
        checkout: false,
      };
    default:
      return state;
  }
};

export const CardContext = createContext();

const CardContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cardReducer, initialState);

  return (
    <CardContext.Provider value={{ state, dispatch }}>
      {children}
    </CardContext.Provider>
  );
};

export default CardContextProvider;
