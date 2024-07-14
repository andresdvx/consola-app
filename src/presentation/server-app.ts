import { CreateTable } from "../domain/uses-cases/createTable.useCase";
import { SaveFile } from "../domain/uses-cases/saveFile.useCase";

interface RunOptions {
  base: number;
  limit: number;
  showTable: boolean;
  fileName: string;
  fileDestination: string;
}

class ServerApp {
  static run({
    base,
    limit,
    showTable,
    fileName,
    fileDestination,
  }: RunOptions) {
    const table = new CreateTable().execute({ base, limit });
    const fileWasCreated = new SaveFile().execute({
      fileContent: table,
      fileName: fileName,
      fileDestination: fileDestination,
    });
    if (showTable) {
      console.log(table);
    }

    fileWasCreated
      ? console.log("file created!")
      : console.log("file could not be created");
  }
}

export default ServerApp;
