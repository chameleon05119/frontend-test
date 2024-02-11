import {
  getApiResponse,
  getGreeting,
  getUser,
  obj1,
  obj2,
  obj3,
  tags,
  userList,
} from "./";

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

describe("文字列の検証(オブジェクトの使用)", () => {
  const response = getApiResponse();
  test("含む", () => {
    expect(response).toEqual({
      status: 200,
      msg: expect.stringContaining("世界"),
    });
  });
  test("正規表現", () => {
    expect(response).toEqual({
      status: 200,
      msg: expect.stringMatching(/世界/),
    });
  });
});

describe("配列の検証", () => {
  test("tags配列にある文字が含まれる/含まれないか", () => {
    expect(tags).toContain("Jest");
    expect(tags).toContain("Playwright");
    expect(tags).not.toContain("Vitest");
  });
  test("tags配列の要素数", () => {
    expect(tags).toHaveLength(5);
  });
});

describe("オブジェクト配列の検証", () => {
  test("特定のオブジェクトが含まれている", () => {
    expect(userList).toContainEqual(obj1);
    expect(userList).toContainEqual(obj2);
    expect(userList).not.toContainEqual(obj3);
  });
  test("指定したオブジェクトが全て入っている", () => {
    expect(userList).toEqual(expect.arrayContaining([obj1, obj2]));
  });
});
