export function getUser() {
  const obj = {
    age: 25,
    sex: "man",
    mony: 0,
    inJapan: true,
    account: null,
    note: "",
  };
  return obj;
}

export function getGreeting() {
  const greeting = "こんにちは世界";
  return greeting;
}

export function getApiResponse() {
  const response = {
    status: 200,
    msg: "こんにちは世界",
  };
  return response;
}

export const tags = ["Jest", "Storybook", "Playwright", "React", "Next.js"];

export const obj1 = {
  name: "田中",
  age: 34,
};
export const obj2 = {
  name: "山田",
  age: 23,
};
export const obj3 = {
  name: "鈴木",
  age: 37,
};

export const userList = [obj1, obj2];
