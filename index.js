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

  Arey.prototype.of = function () {
    return this.slice.call(arguments);
  };

  return Arey;
})();

exports.Arey = Arey;

