![POLITICO](https://rawgithub.com/The-Politico/src/master/images/logo/badge.png)

# @politico/markdown-react-loader

Loads markdown files for use as React components.

### Install

```
$ yarn add -D react-markdown @politico/markdown-react-loader
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

You can also pass any valid props that you would otherwise pass to [react-markdown](https://github.com/rexxars/react-markdown#options).

```javascript
<Text linkTarget='_blank' />
```

### Test

```
$ yarn start
```
