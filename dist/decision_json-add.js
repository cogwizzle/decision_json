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

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

_commander2.default.option('-f --file <file>', 'File name.').parse(process.argv);

if (_commander2.default.file) {

  _fs2.default.exists(_commander2.default.file, function (exists) {

    if (exists) {

      console.log('file: ', _commander2.default.file);
      _fs2.default.readFile(_commander2.default.file, 'utf-8', function (err, data) {

        var decision = JSON.parse(data);
        var hasProperties = decision && decision.state && decision.state.length > 0;
        var protoProperties = hasProperties ? {
          parent: {
            message: 'What is the parent node of this decision?',
            required: true
          },
          link: {
            message: 'What would you like the link to this slide to read like?',
            required: true
          }
        } : {};
        var schema = {
          properties: _extends({}, protoProperties, {
            slide: {
              message: 'Enter the markdown for the slide:',
              required: true
            }
          })
        };

        _prompt2.default.start();
        _prompt2.default.get(schema, function (err, _ref) {
          var parent = _ref.parent,
              link = _ref.link,
              slide = _ref.slide;


          parent = parent || null;
          link = link || null;
          var id = (0, _v2.default)();
          var state = {
            id: id,
            parent: parent,
            slide: slide,
            link: link
          };
          var nextDecision = _extends({}, decision);
          nextDecision.state = [].concat(_toConsumableArray(nextDecision.state), [state]);
          _fs2.default.writeFile(_commander2.default.file, JSON.stringify(nextDecision, undefined, 2), function (error) {
            if (error) console.log(error);
          });
        });
      });
    } else {

      console.log('File does not exists.');
    }
  });
} else {
  _commander2.default.help();
}