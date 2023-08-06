import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import { TestAsyncThunk } from "@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { updateProfileData } from "./updateProfileData";
import { ValidateProfileError } from "../../const/const";

const data = {
  id: "1",
  username: "admin",
  first: "Иван",
  lastname: "Ненастоящий",
  age: 35,
  country: Country.Russia,
  city: "Комсомольск-на-Амуре",
  currency: Currency.RUB,
  avatar: "https:/avatar.net/1/jpg",
};

describe("updateProfileData.test", () => {
  test("success", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: { form: data },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ data }));
    const result = await thunk.callThunk(undefined);

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(data);
  });

  test("server error", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: { form: data },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk(undefined);

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
  });

  test("validate error", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: { form: { ...data, first: "" } },
    });
    const result = await thunk.callThunk(undefined);

    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });
});
