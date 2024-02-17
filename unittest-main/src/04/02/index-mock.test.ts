import { greet } from "./index";

jest.mock("./index");

test("挨拶を返さない。(mock化)", () => {
  expect(greet("Taro")).toBe(undefined);
  expect(greet("Taro")).toBeUndefined;
});
