export default (state = initialState, action) => {
  switch (action.type) {
    case 'CHOOSE_COLOR':
      const { color } = action;
      let newState = {
        color: color,
      };
      return newState;

    default:
      return state;
  }
};

let initialState = {
  color1: ''
}