import { define, require as r } from "loader.js";

define("bar", function() {
  console.log('using loader.js require to grab foo');
  let lodash = r("foo");
  console.log(`1 + 2 = ${lodash.add(1, 2)}`);
  return lodash;
});
