var assert = require('assert')
, Arey = require('./index').Arey
, list = new Arey();

assert.equal(list.of(1,2,3).length,3);
