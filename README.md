node-opt
========

Very basic options for NodeJS

# node-opt - is a very small options store for your NodeJS applicaiotn.

## Installation

    npm install node-opt

## Bit more detail

Stores options as pairs in an object. It's not multidementional. It's flat!
Values can be objects themselves - but, names are strings.

No namespacing! Any part of your application can see the data.

## Usage

``` js

var opt = require('./opt');

opt();
// returns all params that are stored

opt({obj});
// stores a set of pairs (overwriting).
//If JSON can be string and will break functionality (won't throw error however)

opt('name');
// returns the value associated with that name

opt('name', 'value');
// sets a single option of 'name' to 'value'

```
## License

<a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/deed.en_GB"><img alt="Creative Commons Licence" style="border-width:0" src="http://i.creativecommons.org/l/by-sa/3.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">NodeOpt</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/darrenlooby" property="cc:attributionName" rel="cc:attributionURL">Darren Looby</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/deed.en_GB">Creative Commons Attribution-ShareAlike 3.0 Unported License</a>.<br />Based on a work at <a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/darrenlooby/node-opt" rel="dct:source">https://github.com/darrenlooby/node-opt</a>.