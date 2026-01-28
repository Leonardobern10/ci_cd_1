import somar from "../src/index";

describe("Somar", () => {
  it("A soma de 1 + 2 deve ser igual a 3", () => {
    expect(somar(1, 2)).toBe(3);
  });
});
