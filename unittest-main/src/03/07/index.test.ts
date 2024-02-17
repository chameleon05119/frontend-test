import { timeout, wait } from "./index";

test("指定時間まつと、経過時間をもってresolveされる①", () => {
  return wait(50).then((duration) => {
    expect(duration).toBe(50);
  });
});

test("指定時間まつと、経過時間をもってresolveされる②", () => {
  return expect(wait(50)).resolves.toBe(50);
});

test("指定時間まつと、経過時間をもってresolveされる③", async () => {
  await expect(wait(50)).resolves.toBe(50);
});

test("指定時間まつと、経過時間をもってresolveされる④", async () => {
  expect(await wait(50)).toBe(50);
});

test("指定時間まつと、経過時間をもってrejectされる①", () => {
  return timeout(50).catch((duration) => {
    expect(duration).toBe(50);
  });
});

test("指定時間まつと、経過時間をもってrejectされる②", () => {
  return expect(timeout(50)).rejects.toBe(50);
});

test("指定時間まつと、経過時間をもってrejectされる③", async () => {
  await expect(timeout(50)).rejects.toBe(50);
});

test("指定時間まつと、経過時間をもってrejectされる④", async () => {
  expect.assertions(1); // test内でアサーションが必ず1度は実行されることを期待する
  try {
    await timeout(50);
  } catch (err) {
    expect(err).toBe(50);
  }
});

test("returnしていないために、Promiseが解決する前にテストが終了してしまう", () => {
  // 失敗を期待したが、成功してしまう。
  expect(wait(50)).resolves.toBe(10);
});
