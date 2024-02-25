import { render, screen } from "@testing-library/react";
import { Agreement } from "./Agreement";

test("fieldsetのアクセシブルネームは、legendを引用している", () => {
  render(<Agreement />);
  // <fieldset>要素のロールは"group"
  // <legend>に指定された文字列が<fieldset>のアクセシブルネームになる
  expect(
    screen.getByRole("group", { name: "利用規約の同意" })
  ).toBeInTheDocument();
});

test("チェックボックスにチェックが入っていない", () => {
  render(<Agreement />);
  expect(screen.getByRole("checkbox")).not.toBeChecked();
});
