import PromptInterface from "./PromptInterface.js";
import Attachment from "./Attachment.js";

class MultiModalPrompt extends PromptInterface {
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
    super();
    this._id = id;
    this._model = model;
    this._version = version;
    this._result = result;
    this._type = type;
    this._input = input;
    this._output = output;
    this._attachments = [inputAttachment, outputAttachment];
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
    if (typeof value !== "string" || value.trim() === "") {
      throw new Error("Group must be a non-empty string.");
    }
    this._group = value;
  }

  toString() {
    return `⭐️ Multi-Modal Prompt ${this._id} (${this._date}) ${this._model} ${this._version} - ${this._result}
Input: ${this._input}
Output: ${this._output}
Input Attachment: ${this._attachments[0]}
Output Attachment: ${this._attachments[1]}`;
  }
}

export default MultiModalPrompt;