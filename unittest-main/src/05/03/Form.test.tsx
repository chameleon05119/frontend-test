import { fireEvent, render, screen } from "@testing-library/react";
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

test("見出しの表示", () => {
  render(<Form name="taro" />);
  // レンダリングされた結果に、"アカウント情報"という文字列が含まれたheading DOM要素が含まれるか確認
  expect(screen.getByRole("heading")).toHaveTextContent("アカウント情報");
});

test("ボタンを押下すると、イベントハンドラが実行される", () => {
  const mockFn = jest.fn();
  render(<Form name="taro" onSubmit={mockFn} />);
  fireEvent.click(screen.getByRole("button"));
  expect(mockFn).toHaveBeenCalled();
});
