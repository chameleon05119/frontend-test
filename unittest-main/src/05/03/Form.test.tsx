import { render, screen } from "@testing-library/react";
import { Form } from "./Form";

test("名前の表示", () => {
  render(<Form name="taro" />);
  // レンダリングされた結果に、"taro"という文字列が含まれたDOM要素が含まれるか確認
  expect(screen.getByText("taro")).toBeInTheDocument();
});

test("ボタンの表示", () => {
  render(<Form name="taro" />);
  expect(screen.getByRole("button")).toBeInTheDocument();
});
