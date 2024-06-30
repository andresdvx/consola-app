import yargs from "yargs";
import { hideBin } from "yargs/helpers";

export const yarg = yargs(hideBin(process.argv))
  .options("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "multiplicación tabla base",
  })
  .options("l", {
    alias: "limit",
    type: "number",
    demandOption: true,
    default: 10,
    describe: "multiplicación tabla limit",
  })
  .options("s", {
    alias: "show",
    type: "boolean",
    default: false,
    describe: "multiplicación tabla show",
  })
  .check((argv, options) => {
    if (argv.b < 1) throw new Error("Error: base must be greater than 0");
    return true;
  })
  .parseSync();
