import { add, sub } from "./";

describe("四則演算", () => {
  describe("add", () => {
    test("1 + 1 = 2", () => {
      expect(add(1, 1)).toBe(2);
    });
    test("1 + 2 = 3", () => {
      expect(add(1, 2)).toBe(3);
    });
  });
  describe("sub", () => {
    test("3 - 2 = 1", () => {
      expect(sub(3, 2)).toBe(1);
    });
    test("1 - 2 = -1", () => {
      expect(sub(1, 2)).toBe(-1);
    });
  });
});
