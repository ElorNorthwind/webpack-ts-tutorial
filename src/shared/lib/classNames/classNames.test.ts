import { classNames } from "./classNames";

describe("classNames", () => {
  test("with single param", () => {
    expect(classNames("class")).toBe("class");
  });

  test("with additional classes", () => {
    expect(classNames("class", {}, ["class1", "class2"])).toBe(
      "class class1 class2"
    );
  });

  test("with mods", () => {
    expect(classNames("class", { hover: true })).toBe("class hover");
  });

  test("with mods false", () => {
    const expected = "class scrollable";
    expect(classNames("class", { hover: false, scrollable: true })).toBe(
      expected
    );
  });

  test("with mods undefined", () => {
    expect(classNames("class", { hover: undefined })).toBe("class");
  });
});
