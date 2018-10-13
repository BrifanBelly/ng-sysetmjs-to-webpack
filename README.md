# ng-sysetmjs-to-webpack
Converts angular @Component meta-data from systemJs format to webpack format


# Replace loader for [Webpack](http://webpack.github.io/) v4+

Perform replacements (plain and regular expression) in the contents loaded by the loader.

## Install:

```bash
$ npm install --save-dev ng-systemjs-to-webpack
```

With release of 1.0.1 the loader is expected to be used in Node v4+ environment.
Support for Node v3 and lower was dropped, but you can install and use the loader version of 1.0.0 in older environments. 

With release of 1.0.1 the loader is expected to be used in Webpack v4+ environment.
Support for Webpack v3 and lower was dropped, but you can install and use the loader version of 1.0.0 in older environments. 



## Usage:

Loader allows to perform replacements in a way [String.prototype.replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace) does (loader uses it internally).
It means that if you want to replace all occurrences, you should use RegExp-like string in `options.search` with `g` flag in `options.flags`, etc.

### Plain replacement:

Plain string replacement, no need to escape RegEx special characters.

In your `webpack.config.js`:

```javascript
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /fileInWhichJQueryIsUndefined\.js$/,
        loader: 'ng-systemjs-to-webpack'
      }
    ]
  }
}
```

## Future Enhancements
```
* Recieve config options from the user.
* Resolve issues related to Webpack
```


## Contributing:

Feel free to open issues to propose stuff and participate. Pull requests are also welcome.

## Licence:

[MIT](http://en.wikipedia.org/wiki/MIT_License)
