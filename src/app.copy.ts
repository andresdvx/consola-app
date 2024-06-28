import fs from "fs";
import { yarg } from "./config/adapters/yargs.adapter";

const { b: base, l: limit, s: showTable } = yarg;
let outPutMessge: string = "";
const filePath: string = "src/outputs/tabla.txt";
const header: string = `
==============================
        tabla del ${base}
==============================\n
`;

for (let i = 1; i <= limit; i++) {
  outPutMessge += `${base} X ${i} = ${base * i}\n`;
}

outPutMessge = header + outPutMessge;

if (showTable) console.log(outPutMessge);

fs.writeFile(filePath, `${outPutMessge}`, (err) => {
  if (!err) {
    console.log("file created!!");
    return;
  }
  console.log(`error: ${err}`);
});
