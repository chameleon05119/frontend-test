import { greet, sayGoodBye } from "./index";

jest.mock("./index", () => ({
  // モジュール本体のメソッドをimportする
  ...jest.requireActual("./index"),

  // 未実装のsayGoodByeメソッドをmock化として上書き
  sayGoodBye: (name: string) => `Good bye, ${name}.`,
}));

test("挨拶を返す。(実装済みメソッドのテスト)", () => {
  expect(greet("taro")).toBe("Hello! taro.");
});

test("さよならを返す。(未実装テストのテスト)", () => {
  const msg = `${sayGoodBye("Taro")} See you.`;
  expect(msg).toBe("Good bye, Taro. See you.");
});
