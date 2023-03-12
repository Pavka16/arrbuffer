export default class ArrayBufferConverter {
  load(buffer) {
    this.buffer16BitView = new Int16Array(buffer);
  }

  toString() {
    let str = '';
    for (let i = 0; i < this.buffer16BitView.length; i += 1) {
      str += String.fromCharCode(this.buffer16BitView[i]);
    }
    return str;
  }
}
