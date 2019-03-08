export const chooseColor = (primaryColor, secondaryColor, primaryName, secondaryName, primaryRGB, secondaryRGB, primaryFont, secondaryFont) => ({
    type: 'CHOOSE_COLOR',
    primaryColor,
    secondaryColor,
    primaryName,
    secondaryName,
    primaryRGB,
    secondaryRGB,
    primaryFont,
    secondaryFont
});

export const setColorScheme = (colorScheme) => ({
    type: 'COLOR_SCHEME',
    colorScheme
})

export function fetchColorName(hexCode) {
    console.log(hexCode);
    return fetch(`http://thecolorapi.com/id?hex=${hexCode}`)
        .then(response => response.json(),
            error => console.log('An error occurred', error))
        .then(function (json) {
            if (json) {
                return (json);
            } else {
                console.log('error');
            }
        })
}




    export function fontColor(color) {
        let result = Math.sqrt(
            ((color.rgb.r * color.rgb.r) * .299) +
            ((color.rgb.g * color.rgb.g) * .587) +
            ((color.rgb.b * color.rgb.b) * .114))
        return result > 127.5 ? '000000' : 'ffffff';
    }

