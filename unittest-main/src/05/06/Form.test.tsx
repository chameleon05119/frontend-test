import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Form } from "./Form";

const user = userEvent.setup();

// 連絡先を入力するインタラクション
async function inputContactNumber(
  inputValues = {
    name: "田中太郎",
    phoneNumber: "000-0000-0000",
  }
) {
  await user.type(
    screen.getByRole("textbox", { name: "お名前" }),
    inputValues.name
  );
  await user.type(
    screen.getByRole("textbox", { name: "電話番号" }),
    inputValues.phoneNumber
  );
  return inputValues;
}

// お届け先を入力するインタラクション
async function inputDeliveryAddress(
  inputValues = {
    postalCode: "167-0051",
    performances: "東京都",
    municipalities: "杉並区荻窪1",
    streetNumber: "00-00",
  }
) {
  await user.type(
    screen.getByRole("textbox", { name: "郵便番号" }),
    inputValues.postalCode
  );
  await user.type(
    screen.getByRole("textbox", { name: "都道府県" }),
    inputValues.performances
  );
  await user.type(
    screen.getByRole("textbox", { name: "市区町村" }),
    inputValues.municipalities
  );
  await user.type(
    screen.getByRole("textbox", { name: "番地番号" }),
    inputValues.streetNumber
  );
}

describe("過去のお届け先がない場合", () => {
  test("連絡先/お届け先入力欄がある", () => {
    render(<Form />);
    expect(screen.getByRole("group", { name: "連絡先" })).toBeInTheDocument();
    expect(screen.getByRole("group", { name: "お届け先" })).toBeInTheDocument();
  });
});
