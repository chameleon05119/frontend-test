// レスポンスを再現するテスト用データ(フィクスチャー)

export type Article = {
  id: string;
  createdAt: string;
  tags: string[];
  title: string;
  body: string;
};

export type Articles = {
  articles: Article[];
};

export const getMyArticlesData: Articles = {
  articles: [
    {
      id: "howto-testing-with-typescript-ipt",
      createdAt: "2022-07-19T22:38:41.005Z",
      tags: ["testing"],
      title: "Typescriptを使ったテストの書き方",
      body: "テストを書くとき、Typescriptを使うことで、テストの保守性が向上します...",
    },
    {
      id: "nextjs-link-component",
      createdAt: "2022-07-19T22:38:41.005Z",
      tags: ["nextjs"],
      title: "Next.jsのLinkコンポーネント",
      body: "Next.jsの画面遷移には、Linkコンポーネントを使用します...",
    },
    {
      id: "react-component-testing-with-jest",
      createdAt: "2022-07-19T22:38:41.005Z",
      tags: ["testing", "react"],
      title: "Jestで始めるReactのコンポーネントテスト",
      body: "Jestは単体テストとして、UIコンポーネントのテストが可能です...",
    },
  ],
};
