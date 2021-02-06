const loadReducer = (state = { load: false }, action) => {
  switch (action.type) {
    case "LOAD_ACTION":
      return { ...state, load: "ture" };
    case "ACHIEVE_ACTION":
      return { ...state, load: false };
    default:
      return state;
  }
};
export default loadReducer;
