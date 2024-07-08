import { CreateTable, CreateTableOptions } from "./createTable.useCase";
describe("Create Tabble Use Case", () => {
  test("should create table with default value", () => {
    const createTable = new CreateTable();
    const table = createTable.execute({ base: 6 });
    const rows = table.split("\n").length;

    expect(createTable).toBeInstanceOf(CreateTable);
    expect(table).toContain("6");
    expect(table).toContain("36");
    expect(rows).toBe(10);
  });

  test("should create table with custom value", () => {
    const createTable = new CreateTable();
    const options: CreateTableOptions = { base: 8, limit: 20 };
    const table = createTable.execute(options);
    const rows = table.split("\n").length;

    expect(createTable).toBeInstanceOf(CreateTable);
    expect(table).toContain("= 8");
    expect(table).toContain("= 160");
    expect(rows).toBe(options.limit);
  });
});
