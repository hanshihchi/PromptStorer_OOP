export default class PromptInterface {
  _id;
  _model;
  _version;
  _result;
  _type;
  _input;
  _output;
  _group;
  _date;

  constructor(id, model, version, result, type, input, output, group) {
    this._id = id; 
    this._model = model;
    this._version = version;
    this._result = result;
    this._type = type;
    this._input = input;
    this._output = output;
    this._group = group;
    this._date = new Date();
  }

  get date() {
    throw new Error("Not implemented. e.g. 2025/01/17 2:28PM");
  }
  
  get result() {
 		throw new Error("Not implemented. e.g. \"Success\"");
  }
  
  get id() {
    throw new Error("Not implemented. e.g. 1234");
  }
  
  get model() {
    throw new Error("Not implemented. e.g. Claude");
  }
  
  get version() {
    throw new Error("Not implemented: e.g. Sonnet 3.5");
  }
  
  get type() {
    throw new Error("Not implemented: e.g. Text-to-Text");
  }

  get input() {
    throw new Error("Not implemented. e.g. \"Please translate Eng-to-French: 'Hello, world!'\"");
  }

  get output() {
    throw new Error("Not implemented. e.g. \"Bonjour, le monde!\"");
  }

  get group() {
    throw new Error("Not implemented: e.g. MyGroup");
  }

  set group(value) {
    // not string or empty string
    if (typeof value !== "string" || value.trim() === "") {
      throw new Error("Group must be a non-empty string.");
    }
    this._group = value;
  }

  match() {
    throw new Error("Not implemented. e.g. true");
  }
  
  toString() {
    throw new Error("Not implemented. e.g. \"2025/01/17 2:28PM - Success\"");
  }
}
