import { it, expect } from "vitest";
import { locales } from "../src/test.js";

it("should return values with interpolations replaced", () => {
  expect(locales.get("interp.hello", { int: 'noway' }, 'en')).toBe("Hello noway");

  // test to handle nonexistent interpolaitons, should return the normal {{}} string
  expect(locales.get("interp.hello", {}, 'en')).toBe("Hello {{int}}");
});