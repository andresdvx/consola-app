import { yarg } from "./yargs.adapter";

const runCommand = async (args: string[]) => {
  process.argv = [...process.argv, ...args];

  const { yarg } = await import("./yargs.adapter");

  return yarg;
};

describe("yargs plugin test", () => {
  const originalArgv = process.argv;
  afterEach(() => {
    process.argv = originalArgv;
    jest.resetModules();
  });

  test("should return default values", async () => {
    const argv = await runCommand(["-b", "5"]);
    expect(argv).toEqual(
      expect.objectContaining({
        b: 5,
        l: 10,
        s: false,
        n: "table",
        d: "./logs",
      })
    );
  });

  test("should return custom values", async () => {
    const argv = await runCommand([
      "-b",
      "8",
      "-l",
      "30",
      "-s",
      "-n",
      "testing",
      "-d",
      "./testing",
    ]);

    expect(argv).toEqual(
      expect.objectContaining({
        b: 8,
        l: 30,
        s: true,
        n: "testing",
        d: "./testing",
      })
    );
  });
});
