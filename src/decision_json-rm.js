#!/usr/bin/env node
import cli from 'commander';
import { promptInit, writeDecisionTree } from './controller';
import prompt from 'prompt';
import fs from 'fs';
import v4 from 'uuid/v4';

cli
  .option('-f --file <file>', 'File name.')
  .parse(process.argv);

if (cli.file) {

  fs.exists(cli.file, exists => {

    if (exists) {

      fs.readFile(cli.file, 'utf-8', (err, data) => {

        if(err) {

          console.log(err);
        } else {
          const schema = {
            properties: {
              id: {
                message: 'Enter the id of the state you would like to remove',
                required: true
              }
            }
          }

          prompt.start();
          prompt.get(schema, (err, { id }) => {

            const decision = JSON.parse(data);
            const states = decision.state.filter(state =>
              state.id !== id
            );
            const nextDecision = {...decision, state: states};

            fs.writeFile(cli.file, JSON.stringify(nextDecision, undefined, 2), (error) => { if (error) console.log(error) });
          });
        }
      });
    } else {

      console.log('File does not exists.');
    }
  });
} else {
  cli.help();
}