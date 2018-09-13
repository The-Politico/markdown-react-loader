module.exports = function(source) {
  // Escape backticks (essential) and newlines (cosmetic)
  const safeString = source
    .replace(/`/g, '\\`')
    .replace(/\n/g, '\\n');
  // Create Markdown component w/out JSX
  const component = `React.createElement(
    ReactMarkdown,
    {source: \`${safeString}\`},
    null
  )`;

  const module = `const React = require('react');
const ReactMarkdown = require('react-markdown');
module.exports = function() { return ${component}; };`;

  return module;
};
