"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createTable_useCase_1 = require("../domain/uses-cases/createTable.useCase");
const saveFile_useCase_1 = require("../domain/uses-cases/saveFile.useCase");
class ServerApp {
    static run({ base, limit, showTable, fileName, fileDestination }) {
        const table = new createTable_useCase_1.CreateTable().execute({ base, limit });
        const fileWasCreated = new saveFile_useCase_1.SaveFile().execute({
            fileContent: table,
            fileName: fileName,
            fileDestination: fileDestination
        });
        if (showTable) {
            console.log(table);
        }
        fileWasCreated
            ? console.log("file created!")
            : console.log("file could not be created");
    }
}
exports.default = ServerApp;
