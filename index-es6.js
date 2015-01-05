export class Arey extends Array {
  constructor(size) {
    super(size);
  }
  of() {
    return this.slice.call(arguments);
  }
  isArray(arr) {
    // Array.isArray(arr) is false :/
  	return arr.constructor.name === 'Arey' || Object.prototype.toString.call(arr) === '[object Array]';
  }
}
