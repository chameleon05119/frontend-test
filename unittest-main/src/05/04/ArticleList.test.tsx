import { render, screen, within } from "@testing-library/react";
import { ArticleList } from "./ArticleList";
import { items } from "./fixture";

test("itemsの数だけ一覧表示される", () => {
  render(<ArticleList items={items} />);
  const list = screen.getByRole("list");
  expect(list).toBeInTheDocument();
  // withinでテスト対象のulを絞り込む
  expect(within(list).getAllByRole("listitem")).toHaveLength(3);
});

test("itemsが空の場合、「投稿記事がありません」が表示", () => {
  render(<ArticleList items={[]} />);
  // getByRoleでは指定した要素が見つからない場合テストがエラー終了するため、
  // queryByRoleを使用する
  const list = screen.queryByRole("list");
  expect(list).not.toBeInTheDocument();
  expect(list).toBeNull();
  expect(screen.getByText("投稿記事がありません。")).toBeInTheDocument();
});
