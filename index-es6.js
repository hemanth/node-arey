export class Arey extends Array {
  constructor(size) {
    super(size);
  }
}

Arey.of = function() {
    return this.slice.call(arguments);
};

Arey.isArray = function(arr) {
    // Array.isArray(arr) is false :/
    return arr.constructor.name === 'Arey' || Object.prototype.toString.call(arr) === '[object Array]';
};