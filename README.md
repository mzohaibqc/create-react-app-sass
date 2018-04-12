# Create-React-App-Scss
This project contains boilerplate code for using scss/sass with `create-react-app` generated app.

Demo: https://mzohaibqc.github.io/create-react-app-sass/

Credit: SCSS styles/src is taken from here https://templated.co/

## Folder Structure
```
/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.js
    App.test.js
    index.js
    styles/
      /components
      main.scss
```

Step:

- Create app `create-react-app app-name && cd app-name`
- Add following dependencies
  - yarn add -D react-app-rewired
  - yarn add -D react-app-rewire-sass-modules
  - yarn add -D sass-loader
  - yarn add -D node-sass

- Change npm `start` and `build` scripts from
```json
{
  "start": "react-scripts start",
  "build": "react-scripts build"
}
```
to
```json
{
  "start": "react-app-rewired start",
  "build": "react-app-rewired build"
}
```
- Add `config-overrides.js` file and add following code
```js
const rewireSass = require('react-app-rewire-sass-modules');
module.exports = function override(config, env) {
  config = rewireSass(config, env);
  return config;
}
```
- Add scss/sass styles in `/src/styles` directory
- Run your app and you are good to go :) yahooo....