"use strict";

var _inherits = function (child, parent) {
  child.prototype = Object.create(parent && parent.prototype, {
    constructor: {
      value: child,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (parent) child.__proto__ = parent;
};

var Arey = (function () {
  var _Array = Array;
  var Arey = function Arey(size) {
    _Array.call(this, size);
  };

  _inherits(Arey, _Array);

  return Arey;
})();

exports.Arey = Arey;


Arey.of = function () {
  return [].slice.call(arguments);
};

Arey.isArray = function (arr) {
  // Array.isArray(arr) is false :/
  return arr.constructor.name === "Arey" || Object.prototype.toString.call(arr) === "[object Array]";
};

