import { render, screen } from "@testing-library/react";
import { ArticleListItem, ItemProps } from "./ArticleListItem";

const item: ItemProps = {
  id: "howto-testing-with-typescript",
  title: "Typescriptを使ったテストの書き方",
  body: "テストを書くとき、Typescriptを使うことで、テストの保守性が向上します...",
};

test("IDに紐づいたリンクが表示される", () => {
  render(<ArticleListItem {...item} />);
  expect(screen.getByRole("link", { name: "もっと見る" })).toHaveAttribute(
    "href",
    "/articles/howto-testing-with-typescript"
  );
});
