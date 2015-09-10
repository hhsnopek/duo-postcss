var fs = require('fs');
var path = require('path');
var should = require('chai').should();
var Duo = require('duo');
var duoPostcss = require('../index.js');

var _fixture = function(file) {
  return function(file) {
    this.file = `test/fixtures/${file}.css`;
    var duo = Duo(__dirname);
    duo.entry(this.file);
    duo.use(duoPostcss());
    return duo.run().code;
  }
}

var _expected = function(file) {
  this.file = `test/expected/${file}.css`;
  return fs.readFileSync(this.file, 'utf-8');
}

describe('duo-postcss', function() {
  console.log(duoPostcss);
  it('should render basic css', function () {
    this.fixture = yield _fixture('basic', 'basic');
    this.expected = _expected('basic', 'basic');
    console.log("almost done");
    this.fixture.should.equal(this.expected);
  });

  it('should render css with a plugin', function () {
    this.fixture = yield _fixture('plugin', 'plugin');
    this.expected = yield _expected('plugin', 'plugin');
    this.fixture.should.equal(this.expected);
  });
});
