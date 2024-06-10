import { it, expect } from "vitest";
import { locales } from "../src/test.js";

it("should return values with interpolations replaced", () => {
  expect(locales.t("interp.hello", { int: 'noway' }, 'en')).toBe("Hello noway");

  // test to handle nonexistent interpolaitons, should return the normal {{}} string
  expect(locales.t("interp.hello", {}, 'en')).toBe("Hello {{int}}");
});