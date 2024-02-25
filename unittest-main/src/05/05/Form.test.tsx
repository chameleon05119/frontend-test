import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Form } from "./Form";

const user = userEvent.setup();

test("初期状態では「サインアップ」ボタンが非活性", () => {
  render(<Form />);
  expect(screen.getByRole("button", { name: "サインアップ" })).toBeDisabled();
});

test("「利用規約の同意」チェックボックスを押下すると「サインアップ」ボタンが活性状態になる", async () => {
  render(<Form />);
  await user.click(screen.getByRole("checkbox"));
  expect(screen.getByRole("button", { name: "サインアップ" })).toBeEnabled();
});
