#!/usr/bin/env node
import cli from 'commander';
import { promptInit, writeDecisionTree } from './controller';
import prompt from 'prompt';
import fs from 'fs';
import v4 from 'uuid/v4';
import PromptMulti from 'cli-input';

cli
  .option('-f --file <file>', 'File name.')
  .parse(process.argv);

if (cli.file) {

  fs.exists(cli.file, exists => {

    if (exists) {

      fs.readFile(cli.file, 'utf-8', (err, data) => {

        const decision = JSON.parse(data);
        const hasProperties = (decision && decision.state && decision.state.length > 0);
        const protoProperties = (hasProperties) ? {
          parent: {
            message: 'What is the parent node of this decision?',
            required: true
          },
          link: {
            message: 'What would you like the link to this slide to read like?',
            required: true
          }
        } : {};
        const schema = {
          properties: {
            ...protoProperties
          }
        };

        prompt.start();
        prompt.get(schema, (err, { parent, link }) => {

          console.log('Enter your markdown and press (Ctrl+D) to end finish.');
          PromptMulti().multiline((err, lines, raw) => {

            const slide = lines.join('\n');
            parent = parent || null;
            link = link || null;
            const id = v4();
            const state = {
              id,
              parent,
              slide,
              link
            };
            const nextDecision = { ...decision };
            nextDecision.state = [...nextDecision.state, state];
            fs.writeFile(cli.file, JSON.stringify(nextDecision, undefined, 2), (error) => {
              if (error)
                console.log(error) 
              
              process.exit();
            });
          });
        });
      });
    } else {

      console.log('File does not exists.');
    }
  });
} else {
  cli.help();
}