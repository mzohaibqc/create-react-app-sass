const rewireSass = require('react-app-rewire-sass-modules');

module.exports = function override(config, env) {
  config = rewireSass(config, env);
  return config;
}