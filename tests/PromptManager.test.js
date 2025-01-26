import PromptManager from "../solution/PromptManager.js";
import TextPrompt from "../solution/TextPrompt.js";

describe("PromptManager", () => {
  let manager;
  let prompt, prompt1, prompt2, prompt3;

  beforeEach(() => {
    manager = new PromptManager();
    prompt = new TextPrompt();

    prompt1 = new TextPrompt({
      id: 1,
      model: "Claude",
      version: "Sonnet 3.5",
      result: "Success",
      type: "Text-to-Text",
      input: "What is AI?",
      output: "AI stands for Artificial Intelligence.",
    });

    prompt2 = new TextPrompt({
      id: 2,
      model: "ChatGPT",
      version: "4.0",
      result: "Failure",
      type: "Text-to-Code",
      input: "Write a Python Script",
      output: "Error generating.",
    });

    prompt3 = new TextPrompt({
      id: 3,
      model: "Claude",
      version: "Haiku 3.5",
      result: "Success",
      type: "Text-to-Text",
      input: "What is OOP?",
      output: "OOP stands for Object-Oriented Programming.",
    });
  });

  test("should add a prompt to the manager", () => {
    manager.addPrompt(prompt);
    expect(manager.prompts).toContain(prompt);
  });

  test("should iterate over prompts", () => {
    manager.addPrompt(prompt);
    const iterator = manager[Symbol.iterator]();
    expect(iterator.next().value).toBe(prompt);
    expect(iterator.next().done).toBe(true);
  });

  test("should filter prompts based on criteria", () => {
    // Add filtering logic and tests here
    manager.addPrompt(prompt1);
    manager.addPrompt(prompt2);
    manager.addPrompt(prompt3);

    const filtered = manager.filterPrompts({ model: "Claude", result: "Success", type: "Text-to-Text" });
    expect(filtered).toHaveLength(2);
    expect(filtered).toContain(prompt1);
    expect(filtered).toContain(prompt3);
  });

  test("should filter prompts based on multiple values for a single key", () => {
    manager.addPrompt(prompt1);
    manager.addPrompt(prompt2);
    manager.addPrompt(prompt3);

    const filtered = manager.filterPrompts({ result: ["Success", "Failure"] });
    expect(filtered).toHaveLength(3);
  });

  test("should search prompts by keyword", () => {
    manager.addPrompt(prompt1);
    manager.addPrompt(prompt2);
    manager.addPrompt(prompt3);

    const results = manager.searchByKeyword("What is");
    expect(results).toHaveLength(2);
    expect(results[0]).toBe(prompt1);
    expect(results[1]).toBe(prompt3);
  });

  test("should sort prompts by a key in ascending order", () => {
    manager.addPrompt(prompt3);
    manager.addPrompt(prompt1);
    manager.addPrompt(prompt2);

    const sorted = manager.sortPrompts("id", "asc");
    expect(sorted[0]).toBe(prompt1);
    expect(sorted[1]).toBe(prompt2);
    expect(sorted[2]).toBe(prompt3);
  });

  test("should sort prompts by a key in descending order", () => {
    manager.addPrompt(prompt3);
    manager.addPrompt(prompt1);
    manager.addPrompt(prompt2);

    const sorted = manager.sortPrompts("id", "desc");
    expect(sorted[0]).toBe(prompt3);
    expect(sorted[1]).toBe(prompt2);
    expect(sorted[2]).toBe(prompt1);
  });
});
