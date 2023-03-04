const toogleTemp = (state, action) => {
  switch (action.type) {
    case "UPDATE_STATE":
      return { ...state, C: action.C, F: action.F };
    default:
      return state;
  }
};

export default toogleTemp;
