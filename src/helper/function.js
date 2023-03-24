export const Shorter = (title) => {
  const splitedTitle = title.split(" ");
  const newTitle = `${splitedTitle[0]} ${splitedTitle[1]}`;
  return newTitle;
};

export const isInCard = (state, id) => {
  const result = !!state.selectItem.find((item) => item.id === id);
  return result;
};

export const quantityCount = (state, id) => {
  const index = state.selectItem.findIndex((item) => item.id === id);
  if (index === -1) {
    return false;
  } else {
    return state.selectItem[index].quantity;
  }
};
