# duo-postcss

Ability to use postcss with [duo](https://github.com/duojs/duo).

CLI Usage:
```bash
duo --use duo-postcss index.css > build.css
```

API Usage:
```javascript
var co = require('co');
var Duo = require('duo');
var stylus = require('duo-postcss');

co(function *(){
  var duo = Duo(__dirname);
  duo.entry('index.css');
  duo.use(postcss());
  var css = yield duo.run();
  // ...
  })();
```

