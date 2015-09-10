var debug = require('debug')('duo-postcss');
var postcss = require('postcss');

module.exports = plugin;

function plugin(opts) {
  opts = opts || [];

  return function *postcss(file, entry) {
    if (file.type !== 'css') return;
    debug('compile %s to css', file.id);
    file.src = (yield render(file.src, opts)).css;
    file.type = 'css';
  };
}

function render(src, opts) {
  return postcss(opts).process(src);
}

