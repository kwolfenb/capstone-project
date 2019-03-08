export default (state = initialState, action) => {
  switch (action.type) {
    case 'CHOOSE_COLOR':
      const { primaryColor, secondaryColor, primaryName, secondaryName, primaryRGB, secondaryRGB } = action;
      let newState = {
        primaryColor: {
          hex: primaryColor,
          name: primaryName,
          rgb: primaryRGB
        },
        secondaryColor: {
          hex: secondaryColor,
          name: secondaryName,
          rgb: secondaryRGB
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
    hex: 'FFFFFF',
    name: 'white'
  }
}