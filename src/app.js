#!/usr/bin/env node
import cli from 'commander';
import projectProperties from '../package.json';

cli
  .version(projectProperties.version)
  .command("init")
  .command("add")
  .command("list")
  .option("-f --file <file>", "Decision tree JSON file.")
  .parse(process.args);