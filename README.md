# PromptStorer_OOP
A basic assignment for a prompt storer to keep track of my AI interactions

## Setting up

Please clone the repository and run

```bash
cd promptManager
npm install
```

To run the basic example please run

```bash
npm start
```

To run the set of tests run

```bash
npm test
```

**As you can see in the source code the solutions are expected in the `solutions` folder**


## Problem statement:

For this assignment you will be implementing a basic system for keeping track of Generative AI prompts. As we have been hearing from marketing, GenAI might revolutionize our field, and therefore we might be needing to get good at Prompt Engineering. Because of that I want to keep track of the prompts I write for each one of the different models in the Market. I want one unified system to keep track of all my prompts and their responses, regardless of being text, image, audio or video based.

Here are some basic examples for my use cases:

I used Claude Sonet 3.5, in the concise style, to answer text based questions, while I use the normal style to get coding responses.
The other day I wanted to create a visualization of the organizational chart for Khoury College, so I asked ChatGPT 4 o1 to try to convert a PDF file into a CSV. Sadly it failed.
I tried creating an image of me teaching in front of a classroom of robots using Meta's AI.
I also want to keep track of the date at which I used each prompt, the inputs and the outputs I received. If the input or output is multimodal, I will save the images, videos or audio files as separate files.

I want to keep track of all of these interactions, and being able to filter them by type of model, by model, by type of input and by success/failure. Also, to specify how I want to sort them.

For the homework you must
* Your code should run without errors and demonstrate all the functionalities.
* Add a feature that differentiate your code from the rest. This could be an extra attribute, or method to achieve another functionality. Describe clearly in your code with comments and in the README what's your creative addition.
* Design methods for adding, removing and filtering interactions.
* For submission, please submit a github repository containing a node project (package.json), but without including the node_modules. You should also provide a README.md file in Github's Markdown format that contains details on how to run and test your code. The repository must have the MIT license

You don't need to implement a front end for this. Keep it simple, don't over think it

## Rubric

Please check canvas for the rubric

## New Features
Grouping Prompts:
You can now assign a group to each prompt to help with organization.
* Assigning Groups:

    Prompts can be assigned to groups during creation or updated later using the assignGroupToPrompt method.
* Retrieving Prompts by Group:

    Use the getPromptsByGroup(groupName) method to retrieve all prompts in a specific group.