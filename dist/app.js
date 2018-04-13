#!/usr/bin/env node
'use strict';

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _package = require('../package.json');

var _package2 = _interopRequireDefault(_package);

var _controller = require('./controller');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_commander2.default.version(_package2.default.version).description('Create a JSON decision tree representation.').command('init', 'Initialize a file.').command('add', 'Add a state to the file.').command('list', 'List all of the states in the file.').parse(process.argv);