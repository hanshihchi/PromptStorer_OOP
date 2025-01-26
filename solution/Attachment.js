export default class Attachment {
  constructor({ type, payload }) {
    this._type = type;
    this._payload = payload;
  }

  get type() {
    return this._type;
  }

  get payload() {
    return this._payload;
  }

  toString() {
    return `${this._type}: ${this._payload}`;
  }
}