#!/usr/bin/env node
'use strict';

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _controller = require('./controller');

var _prompt = require('prompt');

var _prompt2 = _interopRequireDefault(_prompt);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_commander2.default.option('-f --file <file>', 'File name.').parse(process.argv);

if (_commander2.default.file) {
  var schema = {
    properties: {
      name: {
        message: 'What is the name of the decision tree?',
        required: true
      }
    }
  };

  _prompt2.default.start();
  _prompt2.default.get(schema, function (err, _ref) {
    var name = _ref.name;


    var decision = {
      name: name,
      state: []
    };
    _fs2.default.writeFile(_commander2.default.file, JSON.stringify(decision, undefined, 2), function (error) {
      if (error) console.log(error);
    });
  });
} else {
  _commander2.default.help();
}