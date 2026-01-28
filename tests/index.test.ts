import { somar, subtracao } from "../src/index";

describe("Somar", () => {
  it("A soma de 1 + 2 deve ser igual a 3", () => {
    expect(somar(1, 2)).toBe(3);
  });
});

describe("Subtrair", () => {
  it("A subtração de 3 - 1 deve ser igual a 2", () => {
    expect(subtracao(3, 1)).toBe(2);
  });
});
