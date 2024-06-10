import { it, expect } from "vitest";
import { locales } from "../src/test.js";

it("should give multiple keys correctly for both langs", () => {
  expect(locales.t("hello", {}, 'en')).toBe("Hello");
  expect(locales.t("hello", {}, 'es')).toBe("Hola");
  expect(locales.t("hello")).toBe("Hello");
  expect(locales.t("inside.world", {}, 'en')).toBe("World");
});
