import { it, expect } from "vitest";
import { locales } from "../src/test.js";

it("should give multiple keys correctly for both langs", () => {
  expect(locales.localizationFor("hello")).toEqual({
    en: "Hello",
    es: "Hola",
  });
  expect(locales.localizationFor("inside.world")).toEqual({
    en: "World",
    es: "Mundo",
  });
    expect(locales.localizationFor("inside.another/object.key")).toEqual({
        en: "key inside",
        es: "key dentro",
    });

    expect(locales.localizationFor("inside")).toEqual({
        en: { world: 'World', 'another/object': { key: 'key inside' } },
        es: { world: 'Mundo', 'another/object': { key: 'key dentro' } }
    });
});
