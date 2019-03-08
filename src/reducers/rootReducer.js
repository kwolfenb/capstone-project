export default (state = initialState, action) => {
  switch (action.type) {
    case 'CHOOSE_COLOR':
      const { primaryColor, secondaryColor, primaryName, secondaryName, primaryRGB, secondaryRGB } = action;
      let newState = {
        primaryColor: {
          hex: primaryColor,
          name: primaryName,
          rgb: {
            r: primaryRGB[0],
            g: primaryRGB[1],
            b: primaryRGB[2],
          }
        },
        secondaryColor: {
          hex: secondaryColor,
          name: secondaryName,
          rgb: {
            r: secondaryRGB[0],
            g: secondaryRGB[1],
            b: secondaryRGB[2],
          }
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