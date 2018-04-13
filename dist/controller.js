'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _prompt = require('prompt');

var _prompt2 = _interopRequireDefault(_prompt);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Accepts a CLI object and writes information to a decision tree.
 * 
 * @param {object} param0 The cli object.
 */
var controller = function controller(_ref) {
  var file = _ref.file,
      init = _ref.init,
      add = _ref.add,
      list = _ref.list,
      help = _ref.help;


  if (file) {
    if (init) {

      var decision = promptInit();
      writeDecisionTree(decision);
    } else if (add) {} else if (list) {}
  } else {

    console.log('File needs to be specified.');
    help();
  }
};

/**
 * Prompt a user for information about the decision tree.
 * 
 * @returns {object} JSON representation of the decision tree.
 */
var promptInit = function promptInit() {

  var schema = {
    properties: {
      name: {
        message: 'What is the name of the decision tree?',
        required: true
      }
    }
  };
  var promptResults = void 0;

  _prompt2.default.start();
  _prompt2.default.get(schema, function (err, _ref2) {
    var name = _ref2.name;


    promptResults = {
      name: name,
      state: []
    };
  });

  return promptResults;
};

var writeDecisionTree = function writeDecisionTree(file, decision) {

  _fs2.default.writeFile(file, JSON.stringify(decision, undefined, 2), function (error) {
    if (error) console.log(error);
  });
};

exports.default = controller;

module.exports = {
  controller: controller,
  promptInit: promptInit,
  writeDecisionTree: writeDecisionTree
};