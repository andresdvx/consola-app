import { afterEach } from "node:test";
import { SaveFile, Options } from "./saveFile.useCase";
import fs, { mkdir, mkdirSync } from "fs";

describe("save file use case", () => {
  const options: Options = {
    fileContent: "custom content",
    fileDestination: "custom-outputs/file-destination",
    fileName: "custom-table-name",
  };

  const path: string = `${options.fileDestination}/${options.fileName}.txt`;

  afterEach(() => {
    fs.rmdirSync("outputs", { recursive: true });
  });

  test("shopuld have file with default values", () => {
    const saveFile = new SaveFile();
    const options: Options = {
      fileContent: "test-content",
    };
    const path: string = "outputs/table.txt";

    const result: boolean = saveFile.execute(options);
    const fileExist: boolean = fs.existsSync(path);
    const fileContent: string = fs.readFileSync(path, { encoding: "utf-8" });

    expect(result).toBeTruthy();
    expect(fileExist).toBeTruthy();
    expect(fileContent).toEqual(options.fileContent);
  });

  test("should save file with custom values", () => {
    const saveFile = new SaveFile();
    const result: boolean = saveFile.execute(options);
    const fileExists: boolean = fs.existsSync(path);
    const fileContent: string = fs.readFileSync(path, { encoding: "utf-8" });

    expect(result).toBeTruthy();
    expect(fileExists).toBeTruthy();
    expect(fileContent).toEqual(options.fileContent);
  });

  test("should return falser if directory could not be created", () => {
    const saveFile = new SaveFile();
    const mkDirSpy = jest.spyOn(fs, "mkdirSync").mockImplementation(() => {
      throw new Error("directory could not be created");
    });
    const result: boolean = saveFile.execute(options);
    expect(result).toBeFalsy();
    mkDirSpy.mockRestore(); // restura todas las funciones mock
  });

  test("should return false if file could not be created", () => {
    const saveFile = new SaveFile();
    const mkDirSpy = jest.spyOn(fs, "writeFileSync").mockImplementation(() => {
      throw new Error("file could not be created");
    });
    const result: boolean = saveFile.execute(options);
    expect(result).toBeFalsy();
  });
});
