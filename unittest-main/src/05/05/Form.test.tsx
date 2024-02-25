import { render, screen } from "@testing-library/react";
import { Form } from "./Form";

test("初期状態では「サインアップ」ボタンが非活性", () => {
  render(<Form />);
  expect(screen.getByRole("button", { name: "サインアップ" })).toBeDisabled();
});
