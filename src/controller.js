import prompt from 'prompt';

/**
 * Accepts a CLI object and writes information to a decision tree.
 * 
 * @param {object} param0 The cli object.
 */
const controller = ({ file, init, add, list }) => {

  if (file) {
    if (init) {

      const decision = promptInit();
      //writeDecisionTree(decision);
    } else if (add) {


    } else if (list) {

      
    }
  } else {

    throw Error('File needs to be specified by using the -f flag.');
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

module.exports = {
  promptInit
};

export default controller;