const postRenducer = (state = { list: [{ title: "HelloWorld" }] }, action) => {
  switch (action.type) {
    case "POST_ACTION":
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};

export default postRenducer;
