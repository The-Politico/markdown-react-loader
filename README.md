![POLITICO](https://rawgithub.com/The-Politico/src/master/images/logo/badge.png)

# @politico/markdown-react-loader

Loads markdown files for use as React components.

### Install

```
$ yarn add -D @politico/markdown-react-loader react-markdown
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

You can pass any valid props that you would otherwise pass to [react-markdown](https://github.com/rexxars/react-markdown#options).

```javascript
<Text linkTarget='_blank' />
```

The loader also preprocesses the text of your markdown files through [mustache.js](https://github.com/janl/mustache.js), so you can also pass a context object to your component and add mustache's [templating syntax](http://mustache.github.io/mustache.5.html) to make your markdown even more powerful.

```markdown
This is my **{{ mood }}** markdown file.
```

```javascript
<Text context={{ mood: 'AWESOME' }} />
```

### Test

```
$ yarn start
```

### Development

Make it better, then:

```
$ npm publish --access public
```
