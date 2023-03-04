const toogleTemp = (state, action) => {
  switch (action.type) {
    case "Celsius":
      return state;
    case "Fahrenheit":
      return state;
    default:
      return state;
  }
};

export default toogleTemp;
