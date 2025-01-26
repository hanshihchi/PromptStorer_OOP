import PromptInterface from "./PromptInterface.js";
// import Attachment from "./Attachment.js";

export default class MultiModalPrompt extends PromptInterface {
  constructor({
    id,
    model = "Default Model",
    version = "1.0",
    result = "Success",
    type = "Multi-Modal",
    input,
    output,
    inputAttachment,
    outputAttachment,
    group = "Default",
  } = {}) {
    super(id, model, version, result, type, input, output, group);
    this._attachments = [inputAttachment, outputAttachment];
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

  get attachments() {
    return this._attachments;
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
    return `⭐️ Multi-Modal Prompt ${this._id} (${this._date}) ${this._model} ${this._version} - ${this._result}
Input: ${this._input}
Output: ${this._output}
Input Attachment: ${this._attachments[0]}
Output Attachment: ${this._attachments[1]}`;
  }
}
