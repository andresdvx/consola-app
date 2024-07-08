"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const yargs_adapter_1 = require("./config/adapters/yargs.adapter");
const { b: base, l: limit, s: showTable } = yargs_adapter_1.yarg;
let outPutMessge = "";
const filePath = "src/outputs/tabla.txt";
const header = `
==============================
        tabla del ${base}
==============================\n
`;
for (let i = 1; i <= limit; i++) {
    outPutMessge += `${base} X ${i} = ${base * i}\n`;
}
outPutMessge = header + outPutMessge;
if (showTable)
    console.log(outPutMessge);
fs_1.default.writeFile(filePath, `${outPutMessge}`, (err) => {
    if (!err) {
        console.log("file created!!");
        return;
    }
    console.log(`error: ${err}`);
});
