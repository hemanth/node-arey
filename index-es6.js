"use strict";
export class Arey extends Array {
  constructor(size) {
    super(size);
  }
  static of(...args) {
    return this.slice.call(...args);
  }
  static isArray(arr) {
    // Array.isArray(arr) is false :/
    return arr.constructor.name === 'Arey' ||
    Object.prototype.toString.call(arr) === '[object Array]';
  }
}
