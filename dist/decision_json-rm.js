#!/usr/bin/env node
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _controller = require('./controller');

var _prompt = require('prompt');

var _prompt2 = _interopRequireDefault(_prompt);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _v = require('uuid/v4');

var _v2 = _interopRequireDefault(_v);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_commander2.default.option('-f --file <file>', 'File name.').parse(process.argv);

if (_commander2.default.file) {

  _fs2.default.exists(_commander2.default.file, function (exists) {

    if (exists) {

      _fs2.default.readFile(_commander2.default.file, 'utf-8', function (err, data) {

        if (err) {

          console.log(err);
        } else {
          var schema = {
            properties: {
              id: {
                message: 'Enter the id of the state you would like to remove',
                required: true
              }
            }
          };

          _prompt2.default.start();
          _prompt2.default.get(schema, function (err, _ref) {
            var id = _ref.id;


            var decision = JSON.parse(data);
            var states = decision.state.filter(function (state) {
              return state.id !== id;
            });
            var nextDecision = _extends({}, decision, { state: states });

            _fs2.default.writeFile(_commander2.default.file, JSON.stringify(nextDecision, undefined, 2), function (error) {
              if (error) console.log(error);
            });
          });
        }
      });
    } else {

      console.log('File does not exists.');
    }
  });
} else {
  _commander2.default.help();
}