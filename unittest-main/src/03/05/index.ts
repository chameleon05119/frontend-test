export function add(a: number, b: number) {
  // 例外スロー
  if (a < 0 || a > 100)
    throw new Error("aの入力値は0〜100の間でしか受け付けられません。");
  if (b < 0 || b > 100)
    throw new Error("bの入力値は0〜100の間でしか受け付けられません。");

  const sum = a + b;
  if (sum > 100) return 100;
  return sum;
}

add(1, 30);
