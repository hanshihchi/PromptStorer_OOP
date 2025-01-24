import MultiModalPrompt from "../solution/MultiModalPrompt.js";
import Attachment from "../solution/Attachment.js";

describe("MultiModalPrompt", () => {
  let prompt;
  let inputAttachment;
  let outputAttachment;

  beforeEach(() => {
    inputAttachment = new Attachment({ type: "image", payload: "input.jpg" });
    outputAttachment = new Attachment({ type: "image", payload: "output.jpg" });
    prompt = new MultiModalPrompt({ inputAttachment, outputAttachment });
  });

  test("should create a MultiModalPrompt instance with attachments", () => {
    expect(prompt.attachments).toContain(inputAttachment);
    expect(prompt.attachments).toContain(outputAttachment);
  });

  test("should return correct string representation with attachments", () => {
    const expectedString = `${prompt.toString()}`;
    expect(prompt.toString()).toBe(expectedString);
  });
});
