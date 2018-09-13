![POLITICO](https://rawgithub.com/The-Politico/src/master/images/logo/badge.png)

# markdown-react-loader

Loads markdown files for use as React components.

### Install

```
$ yarn add @politico/markdown-react-loader react-markdown
```

### Use

Add to your Webpack config.

```javascript
module.exports = {
  module: {
    loaders: [
      {
        test: /\.md$/,
        loader: '@politico/markdown-react-loader'
      }
    ]
  }
}
```

Import and use markdown files.

```javascript
import Text from 'text.md';

const MyComponent = () => (
  <div>
    <Text />
  </div>
);
```

### Test

```
$ yarn start
```
