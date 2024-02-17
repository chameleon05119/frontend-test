import * as Fetchers from "./fetchers";
import { getGreet } from "./index";

jest.mock("./fetchers");

test("データ取得成功時：ユーザー名がない場合は定型文を返す。", async () => {
  // getMyProfileが成功した時の値を再現
  jest.spyOn(Fetchers, "getMyProfile").mockResolvedValueOnce({
    id: "xxxxxxxx-123456",
    age: 20,
    email: "taroyamada@myapi.testing.com",
  });
  await expect(getGreet()).resolves.toBe("Hello, anonymous user!");
});

test("データ取得成功時：ユーザー名がある場合はユーザーへの挨拶を返す。", async () => {
  jest.spyOn(Fetchers, "getMyProfile").mockResolvedValueOnce({
    id: "xxxxxxxx-123456",
    name: "taro yamada",
    age: 20,
    email: "taroyamada@myapi.testing.com",
  });
  await expect(getGreet()).resolves.toBe("Hello, taro yamada!");
});
