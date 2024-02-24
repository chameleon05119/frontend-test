import { checkLength } from ".";
import * as Features from "./fetchers";
import { ArticleInput, postMyArticle } from "./fetchers";
import { postMyArticleData } from "./fixtures";

type HttpError = {
  err: { message: string };
};
export const httpError: HttpError = {
  err: { message: "internal server error" },
};

jest.mock("./fetchers");

function mockPostMyArticle(input: ArticleInput, status = 200) {
  if (status > 299) {
    return jest
      .spyOn(Features, "postMyArticle")
      .mockRejectedValueOnce(httpError);
  }
  try {
    checkLength(input.title);
    checkLength(input.body);
    return jest
      .spyOn(Features, "postMyArticle")
      .mockResolvedValue({ ...postMyArticleData, ...input });
  } catch (err) {
    return jest
      .spyOn(Features, "postMyArticle")
      .mockRejectedValueOnce(httpError);
  }
}

function inputFactory(input?: Partial<ArticleInput>): ArticleInput {
  return {
    tags: ["testing"],
    title: "TypeScriptを使ったテストの書き方",
    body: "テストを書くとき、Typescriptを使うことで、テストの保守性が向上します。",
    ...input,
  };
}

test("バリデーションに成功した場合、成功レスポンスが返る", async () => {
  // バリデーションを通過するオブジェクトを生成
  const input = inputFactory();
  // 入力値を含んだ成功レスポンスが返るよう、モックを施す
  const mock = mockPostMyArticle(input);
  // テスト対象の関数に、inputを与えて実行
  const data = await postMyArticle(input);
  // 取得したデータに、入力内容が含まれているかを検証
  expect(data).toMatchObject(expect.objectContaining(input));
  // モック関数が呼び出されたかを検証
  expect(mock).toHaveBeenCalled();
});
