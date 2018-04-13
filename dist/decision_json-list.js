#!/usr/bin/env node
'use strict';

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

          var decision = JSON.parse(data);
          decision.state.forEach(function (state) {
            return console.log('id: ' + state.id + '\nslide: ' + state.slide + '\n');
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