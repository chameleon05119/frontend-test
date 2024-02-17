import * as Fetchers from "./fetchers";
import { getGreet } from "./index";

jest.mock("./fetchers");
jest.spyOn(Fetchers, "getMyProfile").mockResolvedValueOnce({
  id: "xxxxxxxx-123456",
  age: 20,
  email: "taroyamada@myapi.testing.com",
});

test("データ取得成功時：ユーザー名がない場合は定型文を返す。", async () => {
  // getMyProfileが成功した時の値を再現
  jest.spyOn(Fetchers, "getMyProfile").mockResolvedValueOnce({
    id: "xxxxxxxx-123456",
    age: 20,
    email: "taroyamada@myapi.testing.com",
  });
  await expect(getGreet()).resolves.toBe("Hello, anonymous user!");
});
