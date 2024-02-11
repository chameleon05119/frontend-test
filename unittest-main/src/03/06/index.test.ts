import { getGreeting, getUser } from "./";

describe("真偽値の検証", () => {
  test("真値の検証", () => {
    const user = getUser();
    expect(user.age).toBeTruthy();
    expect(user.inJapan).toBeTruthy();
    expect(user.mony).not.toBeTruthy();
    expect(user.note).not.toBeTruthy();
  });
  test("偽値の検証", () => {
    const user = getUser();
    expect(user.age).not.toBeFalsy();
    expect(user.mony).toBeFalsy();
    expect(user.inJapan).not.toBeFalsy();
    expect(user.note).toBeFalsy();
  });
});

describe("null, undefined の検証", () => {
  test("nullの検証", () => {
    const user = getUser();
    expect(user.account).toBeFalsy();
    expect(user.account).toBeNull();
  });
  test("undefinedの検証", () => {
    const user = getUser();
    /* @ts-ignore */
    expect(user.name).toBeFalsy();
    /* @ts-ignore */
    expect(user.name).toBeUndefined();
    /* @ts-ignore */
    expect(user.name).not.toBeDefined();
  });
});

describe("文字列の検証", () => {
  const str = getGreeting();
  test("完全一致", () => {
    expect(str).toBe("こんにちは世界");
    expect(str).toEqual("こんにちは世界");
  });
  test("含む", () => {
    expect(str).toContain("世界");
    expect(str).not.toContain("さようなら");
  });
  test("正規表現", () => {
    expect(str).toMatch(/世界/);
    expect(str).not.toMatch(/さようなら/);
  });
  test("文字列の長さ", () => {
    expect(str).toHaveLength(7);
    expect(str).not.toHaveLength(8);
  });
});
