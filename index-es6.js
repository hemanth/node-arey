export class Arey extends Array {
  constructor(size) {
    super(size);
  }
  of() {
    return this.slice.call(arguments);
  }
}
