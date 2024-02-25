import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { InputAccount } from "./InputAccount";

const user = userEvent.setup();

test("メールアドレス入力欄", async () => {
  render(<InputAccount />);
  // メールアドレス入力欄を取得
  const textbox = screen.getByRole("textbox", { name: "メールアドレス" });
  // ユーザーがメールアドレス欄にメールアドレスを入力しているのを再現
  const value = "taro.tanaka@example.com";
  await user.type(textbox, value);
  // 期待された値が入力され、フォーム構成要素が存在するか検証
  expect(screen.getByDisplayValue(value)).toBeInTheDocument();
});

test("パスワード入力欄", async () => {
  render(<InputAccount />);
  // type="password"はロールを持たないため、placeholderで判断する
  const password = screen.getByPlaceholderText("8文字以上で入力");
  const value = "abcd1234";
  await user.type(password, value);
  expect(screen.getByDisplayValue(value)).toBeInTheDocument();
});
