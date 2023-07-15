import { getQueryParams } from "./addQueryParams";

describe("shared/url/addQueryParams", function () {
  test("single parameter", () => {
    const params = getQueryParams({
      test: "value",
    });
    expect(params).toBe("?test=value");
  });
  test("multiple parameter", () => {
    const params = getQueryParams({
      test: "value",
      query: "123",
    });
    expect(params).toBe("?test=value&query=123");
  });
  test("undefined parameter", () => {
    const params = getQueryParams({
      test: "value",
      query: undefined,
    });
    expect(params).toBe("?test=value");
  });
});
