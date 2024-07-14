import { CreateTable } from "../domain/uses-cases/createTable.useCase";
import ServerApp from "./server-app";
import fs from "fs";

describe("Server App tests", () => {
  const path: string = "./server-app-test";
  beforeEach(() => {
    ServerApp.run({
      base: 9,
      limit: 10,
      fileDestination: "./server-app-test",
      fileName: "server-app",
      showTable: false,
    });
    jest.clearAllMocks();
  });

  test("should create server-app-test folder", () => {
    const existsFolder: boolean = fs.existsSync(path);
    expect(existsFolder).toBeTruthy();
  });

  test("should exists server-app file", () => {
    const existsFile: boolean = fs.existsSync(`${path}/server-app.txt`);
    expect(existsFile).toBeTruthy();
  });

  test("server-app file should have a 9 table", () => {
    const serverFile: string = fs.readFileSync(`${path}/server-app.txt`, {
      encoding: "utf-8",
    });
    expect(serverFile).toContain("= 9");
    expect(serverFile).toContain("= 90");
  });
});
