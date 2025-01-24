class PromptInterface {
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
  
  toString() {
    throw new Error("Not implemented. e.g. \"2025/01/17 2:28PM - Success\"");
  }
}
  
export default PromptInterface;