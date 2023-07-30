import { StateSchema } from "app/providers/StoreProvider";
import { getProfileValidateErrors } from "./getProfileValidateErrors";
import { ValidateProfileError } from "../../types/EditableProfileCardSchema";

describe("getProfileValidateErrors.test", () => {
  test("should return isLoading", () => {
    const errors = [ValidateProfileError.INCORRECT_AGE, ValidateProfileError.INCORRECT_USER_DATA];

    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: errors,
      },
    };
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(errors);
  });

  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
  });
});
