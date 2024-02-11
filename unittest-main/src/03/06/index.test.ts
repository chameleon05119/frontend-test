import { getUser } from "./";

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
