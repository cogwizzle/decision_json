import prompt from 'prompt';
import fs from 'fs';

/**
 * Accepts a CLI object and writes information to a decision tree.
 * 
 * @param {object} param0 The cli object.
 */
const controller = ({ file, init, add, list, help }) => {

  if (file) {
    if (init) {

      const decision = promptInit();
      writeDecisionTree(decision);
    } else if (add) {


    } else if (list) {

      
    }
  } else {

    console.log('File needs to be specified.');
    help();
  }
}

/**
 * Prompt a user for information about the decision tree.
 * 
 * @returns {object} JSON representation of the decision tree.
 */
const promptInit = () => {
  
  const schema = {
    properties: {
      name: {
        message: 'What is the name of the decision tree?',
        required: true
      }
    }
  };
  let promptResults;

  prompt.start();
  prompt.get(schema, (err, { name }) => {

    promptResults = {
      name,
      state: []
    };
  });

  return promptResults;
};

const writeDecisionTree = (file, decision) => {

  fs.writeFile(file, JSON.stringify(decision, undefined, 2), (error) => {if (error) console.log(error)});
}

export default controller;
module.exports = {
  controller,
  promptInit,
  writeDecisionTree
};