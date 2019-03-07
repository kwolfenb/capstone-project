export default (state = initialState, action) => {
  switch (action.type) {
    case 'CHOOSE_COLOR':
      const { primaryColor, secondaryColor } = action;
      let newState = {
        primaryColor: primaryColor,
        secondaryColor: secondaryColor
      };
      return newState;

    default:
      return state;
  }
};

let initialState = {
  color1: 'red'
}