# _Color Design React_

#### _Capstone Project for Epicodus - 3/1/2019_

#### By _**Kenny Wolfenberger**_

## Description

_Web application takes user input to generate a 5-color scheme and apply it to webpage design templates._


### Specs

- _Users can choose a color using hexidecimal color codes or the color selector tool._
- _Program fetches color data from colors chosen by user, provided by [The Color API](http://www.thecolorapi.com/), including color name, hexidecimal code and RGB code._
- _A 5-color scheme is generated based on the user's color choices from the [Colormind API](http://colormind.io/api-access/)._
- _User can generate a color scheme based on a picture from gallery or an inputted image URL._
- _Program uses the [SightEngine API](https://sightengine.com/) to collect color data which it passes into the color scheme._
- _The inputted color scheme will be applied to 2 template webpage designs which user can preview._
- _Program will use React Routing to navigate between the Home page, Projects page, and Contact page._
- _Program uses Stateful components where dynamic state changes are needed, such as in the Color Palette generator component._
- _Program uses static components when states are not needed such as in the Header component._
- _Program imports images and displays them using base64 encoding._


### Setup/Installation Instructions
- _Clone Repository from Github._
- _Download all packages by typing "npm install" in the terminal._
- _To run the program type "npm run start" and open application in a browser._
- _If the 'Submit' or 'See Color Scheme' buttons fail to call the API you may need to download a CORS browser extension such as [Moesif Origin & CORS changer](https://chrome.google.com/webstore/detail/moesif-orign-cors-changer/digfbfaphojjndkpccljibejjbppifbc/related?hl=en-US)._
- _The SightEngine API requires a User ID and API\_KEY. To sign up, go to [https://sightengine.com/](https://sightengine.com/). Then add these to the .env file in the root level of the project and add to the variables "REACT\_APP\_API\_USER" and "REACT\_APP\_API\_KEY"._
- _Example: REACT\_APP\_API\_KEY=1234abcdef REACT\_APP\_API\_USER=98765._

## Page Layout Design

![Page Layout Design](/capstone-project-planning/project-plan.jpg?raw=true "Page Layout Design")


## Technologies Used

- _React_
- _Javascript_
- _HTML_
- _CSS / Bootstrap_
- _JSON_

## External Sources Used

- _[The Color API](http://www.thecolorapi.com/)_
- _[Colormind API](http://colormind.io/api-access/)_
- _[SightEngine API](https://sightengine.com/)_
- _JS Color Picker from [jscolor.com/](http://jscolor.com/)._
- _W3 Website template from [www.w3schools.com](https://www.w3schools.com/w3css/w3css_templates.asp)._

### License

_This software is licensed under the MIT license._

Copyright (c) 2019 ** _Kenny Wolfenberger_ **
