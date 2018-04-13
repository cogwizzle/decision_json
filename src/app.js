#!/usr/bin/env node
import cli from 'commander';
import projectProperties from '../package.json';
import { controller, promptInit, writeDecisionTree } from './controller';

cli
  .version(projectProperties.version)
  .description('Create a JSON decision tree representation.')
  .command('init', 'Initialize a file.')
  .command('add', 'Add a state to the file.')
  .command('list', 'List all of the states in the file.')
  .parse(process.argv);