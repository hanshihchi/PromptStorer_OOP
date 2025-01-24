class Attachment {
  constructor({ type, payload }) {
    this.type = type;
    this.payload = payload;
  }

  toString() {
    return `${this.type}: ${this.payload}`;
  }
}

export default Attachment;