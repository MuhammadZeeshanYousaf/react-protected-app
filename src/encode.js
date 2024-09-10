#!/usr/bin/env node

// // Access command-line arguments (excluding 'node' and script path)
// const args = process.argv.slice(2);

// // read the first argument as input
// const input = btoa(args[0]);
// const output = `Your credential: ${input}`;
// console.log(output);

import { Command } from "commander";
const program = new Command();

program
  .version("1.0.0")
  .argument("<input>")
  .action((input) => {
    const output = `You credential: ${btoa(input)}`;
    console.log(output);
  });

program.parse(process.argv);
