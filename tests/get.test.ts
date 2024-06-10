import { it, expect } from "vitest";
import { locales } from "../src/test.js";

it("should give multiple keys correctly for both langs", () => {
  expect(locales.get("hello", {}, 'en')).toBe("Hello");
  expect(locales.get("hello", {}, 'es')).toBe("Hola");
  expect(locales.get("hello")).toBe("Hello");
  expect(locales.get("inside.world", {}, 'en')).toBe("World");
});
