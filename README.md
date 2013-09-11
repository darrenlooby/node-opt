node-opt
========

Very basic options for NodeJS

# OptJS - is a very small options store for your NodeJS applicaiotn.

## Installation

    npm install opt

## Bit more detail

Stores options as pairs in an object. It's not multidementional. It's flat!
Values can be objects themselves - but, names are strings.

## Usage

``` js

var opt = require('./opt');

opt();
// returns all params that are stored

opt({obj});
// stores a set of pairs (overwriting). If JSON can be string and will break functionality (won't throw error however)

opt('name');
// returns the value associated with that name

opt('name', 'value');
// sets a single option of 'name' to 'value'

```
