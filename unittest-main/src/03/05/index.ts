export class RangeError extends Error {}

function checkRange(value: number) {
  if (value < 0 || value > 100)
    throw new RangeError("入力値は0〜100の間でしか受け付けられません。");
}

export function add(a: number, b: number) {
  // 例外スロー
  checkRange(a);
  checkRange(b);

  const sum = a + b;
  if (sum > 100) return 100;
  return sum;
}

add(1, 30);
