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
