import { greet } from "./greet";

test("モック関数はテスト対象の引数として使用できる", () => {
  const mockFn = jest.fn();
  greet("Jiro", mockFn);
  expect(mockFn).toHaveBeenCalledWith("Hello! Jiro");
});
