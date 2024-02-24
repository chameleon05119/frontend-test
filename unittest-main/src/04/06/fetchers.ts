async function handleResponse(res: Response) {
  const data = await res.json();
  if (!res.ok) {
    throw data;
  }
  return data;
}

export type Article = {
  id: string;
  createdAt: string;
  tags: string[];
  title: string;
  body: string;
};

export type ArticleInput = {
  tags: string[];
  title: string;
  body: string;
};

const host = (path: string) => `https://myapi.testing.com${path}`;

export function postMyArticle(input: ArticleInput): Promise<Article> {
  return fetch(host("/my/articles"), {
    method: "POST",
    body: JSON.stringify(input),
  }).then(handleResponse);
}
