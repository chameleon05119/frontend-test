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
