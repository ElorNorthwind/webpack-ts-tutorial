import { StateSchema } from "@/app/providers/StoreProvider";
import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import { getProfileForm } from "./getProfileForm";

describe("getProfileForm.test", () => {
  test("should return profile form data", () => {
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

    const state: DeepPartial<StateSchema> = {
      profile: {
        form: data,
      },
    };
    expect(getProfileForm(state as StateSchema)).toEqual(data);
  });

  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
