class PromptManager {
  constructor() {
    this.prompts = [];
  }

  addPrompt(prompt) {
    this.prompts.push(prompt);
  }

  removePrompt(id) {
    this.prompts = this.prompts.filter((prompt) => prompt.id !== id);
  }

  filterPrompts(criteria) {
    return this.prompts.filter((prompt) => {
      return Object.entries(criteria).every(([key, value]) => {
        if (Array.isArray(value)) {
          return value.includes(prompt[key]);
        }
        return prompt[key] === value;
      });
    });
  }

  sortPrompts(key, order = "asc") {
    return [...this.prompts].sort((a, b) => {
      const direction  = order === "asc" ? 1 : -1;
      return (a[key] > b[key] ? 1 : -1) * direction ;
    });
  }

  /**
   * Assigns a group to a prompt by its ID.
   * @param {number} id - Prompt ID
   * @param {string} groupName - Name of the group to assign
   */
  assignGroupToPrompt(id, groupName) {
    const prompt = this.prompts.find((prompt) => prompt.id === id);
    if (prompt) {
      prompt.group = groupName;
    } else {
      throw new Error(`Prompt ID: ${id} not found.`);
    }
  }

  /**
   * Gets all prompts in a specific group.
   * @param {string} groupName - Name of the group
   * @returns {Array} - Prompts in the specified group
   */
  getPromptsByGroup(groupName) {
    return this.prompts.filter((prompt) => prompt.group === groupName);
  }


  [Symbol.iterator]() {
    return this.prompts[Symbol.iterator]();
  }
}

export default PromptManager;