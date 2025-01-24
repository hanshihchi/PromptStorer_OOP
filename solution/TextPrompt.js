import PromptInterface from "./PromptInterface.js";

class TextPrompt extends PromptInterface {
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
    super();
    this._id = id;
    this._model = model;
    this._version = version;
    this._result = result;
    this._type = type;
    this._input = input;
    this._output = output;
    this._date = new Date();
    this._group = group;
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
    if (typeof value !== "string" || value.trim() === "") {
      throw new Error("Group must be a non-empty string.");
    }
    this._group = value;
  }

  toString() {
    return `⭐️ Prompt ${this._id} (${this._date}) ${this._model} ${this._version} - ${this._result}
    Input: ${this._input}
    Output: ${this._output}`;
  } 
}

export default TextPrompt;