export default (state = initialState, action) => {
  switch (action.type) {
    case 'CHOOSE_COLOR':
      const { color1 } = action;
      let newState = {
        color1: color1,
      };
      return newState;

    default:
      return state;
  }
};

let initialState = {
  color1: 'red'
}