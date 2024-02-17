// テスト対象の関数
export function greet(name: string) {
  return `Hello! ${name}.`;
}

// テストを実施するにあたって都合の悪い、未実装な関数
export function sayGoodBye(name: string) {
  throw new Error("この関数は未実装です。");
}
