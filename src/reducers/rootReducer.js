export default (state = initialState, action) => {
  switch (action.type) {
    case 'CHOOSE_COLOR':
      const { primaryColor, secondaryColor, primaryName, secondaryName } = action;
      let newState = {
        primaryColor: {
          hex: primaryColor,
          name: primaryName
        },
        secondaryColor: {
          hex: secondaryColor,
          name: secondaryName
        }
      };
      return newState;

    default:
      return state;
  }
};

let initialState = {
  primaryColor: {
    hex: 'FFFFFF',
    name: 'white'
  },
  secondaryColor: {
    hex: '000000',
    name: 'black'
  }
}