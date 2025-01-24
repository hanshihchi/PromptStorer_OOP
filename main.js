import PromptManager from "./solution/PromptManager.js";
import TextPrompt from "./solution/TextPrompt.js";
import MultiModalPrompt from "./solution/MultiModalPrompt.js";
import Attachment from "./solution/Attachment.js";

const myPromptManager = new PromptManager();

let idCounter = 0;
// Add a prompt
myPromptManager.addPrompt(
  new TextPrompt({
    id: ++idCounter,
    input: "Write a PromptManager",
    output: "As a large language model, I can write a PromptManager class.",
  })
);

myPromptManager.addPrompt(
  new TextPrompt({
    id: ++idCounter,
    input: "Is it working?",
    output: "As a large language model, I can write a PromptManager class.",
  })
);

myPromptManager.addPrompt(
  new MultiModalPrompt({
    id: ++idCounter,
    input: "Convert this pdf to a png file",
    output: "As a large language model, I can write a MultiModalPrompt class.",
    inputAttachment: new Attachment({
      type: "input",
      payload: "./inputFile.pdf",
    }),
    outputAttachment: new Attachment({
      type: "output",
      payload: "./outFile.png",
    }),
  })
);

for (let p of myPromptManager) {
  console.log(p.toString());
}
// add ID 1 and 3 to group "MyGroup1"
myPromptManager.assignGroupToPrompt(1, "MyGroup1");
myPromptManager.assignGroupToPrompt(3, "MyGroup1");

// Show prompts in "MyGroup1"
console.log("Prompts in MyGroup1:");
myPromptManager.getPromptsByGroup("MyGroup1").forEach((prompt) => {
  console.log(prompt.toString());
});
