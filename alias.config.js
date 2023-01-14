const path = require('path')

module.exports = {
  resolve: {
    alias: {
      components: path.join(__dirname, 'src', 'components'),
      pages: path.join(__dirname, 'src', 'pages'),
      styles: path.join(__dirname, 'src', 'styles'),
      utils: path.join(__dirname, 'src', 'utils')
    }
  }
}
