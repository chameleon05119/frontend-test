import { add, RangeError } from "./";

describe("四則演算", () => {
  describe("add", () => {
    test("戻り値は第一引数と第二引数の和である", () => {
      expect(add(50, 50)).toBe(100);
    });
    test("合計値の上限は100である", () => {
      expect(add(80, 50)).toBe(100);
    });
    test("引数が不正(0〜100の範囲外)だった場合に例外スローされる", () => {
      expect(() => add(110, 20)).toThrow(RangeError);
      expect(() => add(20, 120)).toThrow(RangeError);
      expect(() => add(-10, 20)).toThrow(RangeError);
      expect(() => add(10, -20)).toThrow(RangeError);
    });
  });
});
