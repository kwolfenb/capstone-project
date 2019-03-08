export const chooseColor = (primaryColor, secondaryColor, primaryName, secondaryName, primaryRGB, secondaryRGB) => ({
    type: 'CHOOSE_COLOR',
    primaryColor,
    secondaryColor,
    primaryName,
    secondaryName,
    primaryRGB,
    secondaryRGB
});

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
    let result = ((color.rgb.r * .299) + (color.rgb.g * .587) + (color.rgb.b * .114))
    console.log(result)
}