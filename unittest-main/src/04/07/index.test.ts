import { greetByTime } from ".";

describe("greetByTime(", () => {
  // テスト用の偽のタイマー切り替えを簡潔に書くためのセットアップ
  beforeEach(() => {
    // Jestに偽のタイマーを使用するように指示する
    jest.useFakeTimers();
  });
  afterEach(() => {
    // Jestに真のタイマーを使用するように指示する
    jest.useRealTimers();
  });

  test("指定時間待つと、経過時間をもってresolveされる(朝)", () => {
    // 偽のタイマーを、2022/07/20 08:00:00に設定する
    jest.setSystemTime(new Date(2022, 7, 20, 8, 0, 0));
    expect(greetByTime()).toBe("おはよう");
  });
  test("指定時間待つと、経過時間をもってresolveされる(昼)", () => {
    // 偽のタイマーを、2022/07/20 14:00:00に設定する
    jest.setSystemTime(new Date(2022, 7, 20, 14, 0, 0));
    expect(greetByTime()).toBe("こんにちは");
  });
  test("指定時間待つと、経過時間をもってresolveされる(夜)", () => {
    // 偽のタイマーを、2022/07/20 21:00:00に設定する
    jest.setSystemTime(new Date(2022, 7, 20, 21, 0, 0));
    expect(greetByTime()).toBe("こんばんは");
  });
});
