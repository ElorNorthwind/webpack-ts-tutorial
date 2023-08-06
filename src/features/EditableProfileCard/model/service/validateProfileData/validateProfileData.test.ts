import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import { validateProfileData } from "./validateProfileData";
import { ValidateProfileError } from "../../const/const";

const data = {
  username: "admin",
  first: "Иван",
  lastname: "Ненастоящий",
  age: 35,
  country: Country.Russia,
  city: "Комсомольск-на-Амуре",
  currency: Currency.RUB,
  avatar: "https:/avatar.net/1/jpg",
};

describe("validateProfileData.test", () => {
  test("all valid", async () => {
    const result = validateProfileData(data);
    expect(result).toEqual([]);
  });

  test("no first and last name", async () => {
    const result = validateProfileData({ ...data, first: "", lastname: "" });
    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });

  test("incorrect age", async () => {
    const result = validateProfileData({ ...data, age: undefined });
    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });

  test("no country (for the old men)", async () => {
    const result = validateProfileData({ ...data, country: undefined });
    expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
  });

  test("incorrect all", async () => {
    const result = validateProfileData({});
    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
    ]);
  });
});
