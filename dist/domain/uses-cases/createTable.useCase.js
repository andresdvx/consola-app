"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTable = void 0;
class CreateTable {
    constructor() { }
    execute({ base, limit }) {
        let outPutMessge = "";
        for (let i = 1; i <= limit; i++) {
            outPutMessge += `${base} X ${i} = ${base * i}\n`;
        }
        return outPutMessge;
    }
}
exports.CreateTable = CreateTable;
