"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.yarg = void 0;
const yargs_1 = __importDefault(require("yargs"));
const helpers_1 = require("yargs/helpers");
exports.yarg = (0, yargs_1.default)((0, helpers_1.hideBin)(process.argv))
    .options("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "multiplicación tabla base",
})
    .options("l", {
    alias: "limit",
    type: "number",
    default: 10,
    describe: "multiplicación tabla limit",
})
    .options("s", {
    alias: "show",
    type: "boolean",
    default: false,
    describe: "multiplicación tabla show",
})
    .options("n", {
    alias: "name",
    type: "string",
    default: "table",
    describe: "file name",
})
    .options("d", {
    alias: "destination",
    type: "string",
    default: "./logs",
    describe: "file destination",
})
    .check((argv, options) => {
    if (argv.b < 1)
        throw new Error("Error: base must be greater than 0");
    return true;
})
    .parseSync();
