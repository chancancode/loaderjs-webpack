import { define } from "loader.js";

define("foo", function() {
  console.log('using "real" webpack/commonjs in index.js to grab lodash');
  let lodash = require("lodash");
  console.log(`1 + 2 = ${lodash.add(1, 2)}`);
  return lodash;
});
