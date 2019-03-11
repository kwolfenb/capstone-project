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

export function randomColors() {
    function randomRgb(){
        return Math.floor(Math.random()*255);
    }
    let color1 = `(${randomRgb()}, ${randomRgb()}, ${randomRgb()})`;
    let color2 = `(${randomRgb()}, ${randomRgb()}, ${randomRgb()})`;
    return [color1, color2];
}


export function fetchColorRgb(rgb) {
    console.log(rgb);
    return fetch(`http://thecolorapi.com/id?rgb=rgb${rgb}`)
        .then(response => response.json(),
            error => console.log('An error occurred', error))
        .then(function (json) {
            if (json) {
                return (json);
            } 
        })
}

export function fontColor(color) {
    if(color.rgb) {
        let result = Math.sqrt(
            ((color.rgb.r * color.rgb.r) * .299) +
            ((color.rgb.g * color.rgb.g) * .587) +
            ((color.rgb.b * color.rgb.b) * .114))
            return result > 127.5 ? '000000' : 'ffffff';
        } else {
            return '000000';
        }
}

