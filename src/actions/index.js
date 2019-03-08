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

export function fetchColorScheme() {
    let url = 'http://colormind.io/api/';
    let data = {
        model: 'default',
        input: [[44, 43, 44], [90, 83, 82], "N", "N", "N"]
    }
    let http = new XMLHttpRequest();
    http.onreadystatechange = function () {
        if (http.readyState == 4 && http.status == 200) {
            let palette = JSON.parse(http.responseText).result;
        }
    }
    http.open('POST', url, true)
    http.send(JSON.stringify(data));
}


    export function fontColor(color) {
        let result = Math.sqrt(
            ((color.rgb.r * color.rgb.r) * .299) +
            ((color.rgb.g * color.rgb.g) * .587) +
            ((color.rgb.b * color.rgb.b) * .114))
        return result > 127.5 ? '000000' : 'ffffff';
    }

