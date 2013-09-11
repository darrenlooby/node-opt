var opt = require('../lib/index.js');

opt({z: "first item"});

opt({name: "value"});

console.log("Currently: ", opt());

opt('name', 'new value');

console.log("Currently: ", opt());

console.log("Getting just name: ", opt('name'));

opt('an', 'other');

opt('some', 'there');

opt('more', 'here');

opt({name: "overwriting with object"});

console.log("More: ", opt());

opt("info", "output is in order of inport - no sorting applide");

console.log("Last but not least", opt())