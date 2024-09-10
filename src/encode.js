#!/usr/bin/env node

import { Command } from "commander";
const program = new Command();

program
  .version("1.0.0")
  .argument("<input>")
  .action((input) => {
    const output = `Your credential: ${btoa(input)}`;
    console.log(output);
  });

program.parse(process.argv);
