import * as Fetchers from "./fetchers";
import { getMyArticlesData } from "./fixtures";
import { getMyArticleLinksByCategory } from "./index";

type HttpError = {
  err: { message: string };
};
export const httpError: HttpError = {
  err: { message: "internal server error" },
};

jest.mock("./fetchers");

function mockGetMyArticles(status = 200) {
  if (status > 299) {
    return jest
      .spyOn(Fetchers, "getMyArticles")
      .mockRejectedValueOnce(httpError);
  }
  return jest
    .spyOn(Fetchers, "getMyArticles")
    .mockResolvedValueOnce(getMyArticlesData);
}

test("指定したタグを持つ記事が一件もない場合、nullが返る", async () => {
  mockGetMyArticles();
  const data = await getMyArticleLinksByCategory("playwright");
  expect(data).toBeNull();
});

test("指定したタグを持つ記事が一件以上ある場合、リンク一覧が返る", async () => {
  mockGetMyArticles();
  const data = await getMyArticleLinksByCategory("testing");
  expect(data).toMatchObject([
    {
      link: "/articles/howto-testing-with-typescript-ipt",
      title: "Typescriptを使ったテストの書き方",
    },
    {
      link: "/articles/react-component-testing-with-jest",
      title: "Jestで始めるReactのコンポーネントテスト",
    },
  ]);
});
