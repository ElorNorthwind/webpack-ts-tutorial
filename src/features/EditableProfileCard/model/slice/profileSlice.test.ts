import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { updateProfileData } from "../service/updateProfileData/updateProfileData";
import { profileActions, profileReducer } from "./profileSlice";
import { ProfileSchema } from "../types/EditableProfileCardSchema";
import { ValidateProfileError } from "../const/const";

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

describe("profileSlice.test", () => {
  test("test set readonly", () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };
    expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true))).toEqual({
      readonly: true,
    });
  });

  test("test cancel edit", () => {
    const state: DeepPartial<ProfileSchema> = {
      data,
      form: { username: "" },
      readonly: false,
      validateErrors: [ValidateProfileError.INCORRECT_COUNTRY],
    };
    expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit())).toEqual({
      readonly: true,
      validateErrors: undefined,
      data,
      form: data,
    });
  });

  test("test update profile", () => {
    const state: DeepPartial<ProfileSchema> = {
      form: { first: "Василий" },
    };
    expect(
      profileReducer(state as ProfileSchema, profileActions.updateProfile({ first: "Иван" })),
    ).toEqual({ form: { first: "Иван" } });
  });

  test("test update profile service pending", () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.INCORRECT_COUNTRY],
    };
    expect(profileReducer(state as ProfileSchema, updateProfileData.pending)).toEqual({
      isLoading: true,
      validateErrors: undefined,
    });
  });

  test("test update profile service fullfiled", () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    };
    expect(
      profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, "", undefined)),
    ).toEqual({
      isLoading: false,
      validateErrors: undefined,
      readonly: true,
      form: data,
      data,
    });
  });
});
