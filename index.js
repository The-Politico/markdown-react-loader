var babel = require('@babel/core');

module.exports = function(source) {
  // Escape backticks (essential) and newlines (cosmetic)
  var safeString = source
    .replace(/`/g, '\\`')
    .replace(/\n/g, '\\n');
  // Create Markdown component w/out JSX
  var component = `React.createElement(
    ReactMarkdown,
    {source: mustache.render(\`${safeString}\`, props.context || {}), ...props},
    null
  )`;

  var module = `const React = require('react');
const ReactMarkdown = require('react-markdown');
const mustache = require('mustache');
module.exports = function(props) { return ${component}; };`;

  return babel.transformSync(module, {
    presets: ['@babel/preset-env'],
  }).code;
};
