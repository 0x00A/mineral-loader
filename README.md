# SYNOPSIS
A webpack loader for mineral

# DESCRIPTION
After installing this loader, you will be able to use `require()` to read and
parse mineral templates.

# USAGE
```json
module.exports = {
  node: {
    __dirname: true,
    fs: 'empty'
  },
  module: {
    loaders: [
      {
        test: /\.min$/,
        loader: 'mineral-loader'
      }
    ]
  }
}
```

