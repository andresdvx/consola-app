import fs from "fs";

const base: number = 6;
let outPutMessge: string = "";
const filePath: string = "src/outputs/tabla.txt";
const header: string = `
==============================
        tabla del ${base}
==============================
`;

for (let i = 1; i <= 10; i++) {
  outPutMessge += `${base} X ${i} = ${base * i}\n`;
}

fs.writeFile(filePath, `${header}\n${outPutMessge}`, (err) => {
  if (!err) {
    console.log("file created!!");
    console.log(header, "\n", outPutMessge);
    return;
  }
  console.log(`error: ${err}`);
});
