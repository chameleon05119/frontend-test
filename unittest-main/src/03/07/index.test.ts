import { wait } from "./index";

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
