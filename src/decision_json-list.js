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

          const decision = JSON.parse(data);
          decision.state.forEach(state => 
            console.log(`id: ${state.id}\nslide: ${state.slide}\n`)
          );
        }
      });
    } else {

      console.log('File does not exists.');
    }
  });
} else {
  cli.help();
}