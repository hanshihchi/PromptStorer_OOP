import PromptInterface from "./PromptInterface.js";

export default class TextPrompt extends PromptInterface {
  constructor({
    id = 1234,
    model = "Claude",
    version = "Sonnet 3.5",
    result = "Success",
    type = "Text-to-Text",
    input = "Please translate Eng-to-French: 'Hello, world!'",
    output = "Bonjour, le monde!",
    group = "Default",
  } = {}) {
    super(id, model, version, result, type, input, output, group);
    this._date = new Date();
  }

  get id() {
    return this._id;
  }

  get model() {
    return this._model;
  }

  get version() {
    return this._version;
  }

  get result() {
    return this._result;
  }

  get type() {
    return this._type;
  }

  get input() {
    return this._input;
  }

  get output() {
    return this._output;
  }

  get date() {
    return this._date;
  }

  get group() {
    return this._group;
  }

  set group(value) {
    super.group = value;
  }

  match(keyword) {
    return this._input.includes(keyword) || this._output.includes(keyword);
  }

  toString() {
    return `⭐️ Prompt ${this._id} (${this._date}) ${this._model} ${this._version} - ${this._result}
    Input: ${this._input}
    Output: ${this._output}`;
  } 
}
