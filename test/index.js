var fs = require('co-fs');
var path = require('path');
var should = require('chai').should();
var Duo = require('duo');
var duoPostcss = require('../index.js');

describe('duo-postcss', function() {
  it('should render basic css', function *() {
    var duo = Duo(__dirname);
    duo.entry(join(__dirname, "test/fixtures/basic.css"));
    duo.use(duoPostcss);
    this.fixture = (yield duo.run()).code;
    this.expected =
      yield fs.readFile(join(__dirname, "test/expected/basic.css"));

    this.fixture.should.equal(expected);
  });

  it('should render css with a plugin', function *() {
    var duo = Duo(__dirname);
    duo.entry(join(__dirnam, "test/fixtures/plugin.css"));
    duo.use(duoPostcss);
    this.fixture = (yield duo.run()).code;
    this.expected =
      yield fs.readFile(join(__dirname, "test/expected/plugin.css"));

    this.fixture.should.equal(this.expected);
  });
});
