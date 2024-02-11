import { add, sub } from "./";

describe("四則演算", () => {
  describe("add", () => {
    test("戻り値は第一引数と第二引数の和である", () => {
      expect(add(50, 50)).toBe(100);
    });
    test("合計値の上限は100である", () => {
      expect(add(80, 50)).toBe(100);
    });
  });
  describe("sub", () => {
    test("戻り値は第一引数と第二引数の差である", () => {
      expect(sub(51, 50)).toBe(1);
    });
    test("戻り値の下限は0である", () => {
      expect(sub(50, 80)).toBe(0);
    });
  });
});
