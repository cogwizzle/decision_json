#!/usr/bin/env node
import cli from 'commander';
import { promptInit, writeDecisionTree } from './controller';
import prompt from 'prompt';
import fs from 'fs';

cli
  .option('-f --file <file>', 'File name.')
  .parse(process.argv);

if (cli.file) {
  const schema = {
    properties: {
      name: {
        message: 'What is the name of the decision tree?',
        required: true
      }
    }
  };

  prompt.start();
  prompt.get(schema, (err, { name }) => {

    const decision = {
      name,
      state: []
    };
    fs.writeFile(cli.file, JSON.stringify(decision, undefined, 2), (error) => { if (error) console.log(error) });
  });
} else {
  cli.help();
}