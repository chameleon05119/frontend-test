import { greet } from "./index";

test("挨拶を返す", () => {
  expect(greet("Taro")).toBe("Hello! Taro.");
});
