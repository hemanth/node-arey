"use strict";
class Arey extends Array {
  constructor(size) {
    super(size);
  }
  static of(...args) {
    return Array.prototype.slice.call(args);
  }
  static isArray(arr) {
    // Array.isArray(arr) is false :/
    return arr.constructor.name === 'Arey' ||
    Object.prototype.toString.call(arr) === '[object Array]';
  }
  static diff(arr1, arr2) {
    return arr1.filter(x => arr2.indexOf(x) == -1);
  }
}

module.exports = Arey;