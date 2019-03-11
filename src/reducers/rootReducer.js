export default (state = initialState, action) => {
  switch (action.type) {
    case 'CHOOSE_COLOR':
      const { primaryColor, secondaryColor, primaryName, secondaryName, primaryRGB, secondaryRGB, primaryFont, secondaryFont } = action;
      let newState = Object.assign({}, state, {
        primaryColor: {
          hex: primaryColor,
          name: primaryName,
          rgb: {
            r: primaryRGB[0],
            g: primaryRGB[1],
            b: primaryRGB[2],
          },
          font: primaryFont
        },
        secondaryColor: {
          hex: secondaryColor,
          name: secondaryName,
          rgb: {
            r: secondaryRGB[0],
            g: secondaryRGB[1],
            b: secondaryRGB[2],
          },
          font: secondaryFont
        }
      });
      return newState;
    case 'COLOR_SCHEME': 
      const { colorScheme } = action;
      let newPalette = Object.assign({}, state, {
        colorScheme: colorScheme
      })
      return newPalette;
    default:
      return state;
  }
};

let initialState = {
  primaryColor: {
    hex: 'FFFFFF',
    name: 'white',
    font: '000000',
    rgb : {
      r: 0,
      g: 0,
      b: 0
    }
  },
  secondaryColor: {
    hex: 'FFFFFF',
    name: 'white',
    font: '000000',
    rgb : {
      r: 0,
      g: 0,
      b: 0
    }
  },
  colorScheme: [[195, 0, 0], [0, 255, 0], [0, 0, 255], [178, 255, 253], [250, 248, 50]]
}