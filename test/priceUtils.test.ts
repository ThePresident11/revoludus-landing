import { describe, it, expect } from "vitest";
import { getModulePrice, getTotalPrice } from "@/utils/priceUtils";

describe("Cijene modula (BAM)", () => {
  it("računa mjesečnu cijenu jednog modula (Trening)", () => {
    const cijena = getModulePrice("Trening", "Nogomet", "Trener", "monthly", "BAM", "small");
    expect(cijena).toBe("19.99"); // 10 * 1.95583 ≈ 19.56 → najbliže 19.99
  });

  it("računa godišnju cijenu jednog modula (Trening)", () => {
    const cijena = getModulePrice("Trening", "Nogomet", "Trener", "yearly", "BAM", "small");
    expect(cijena).toBe("194.99"); // 10 * 12 * 0.83 * 1.95583 ≈ 194.07 → najbliže 194.99
  });

  it("računa cijenu paketa više modula (Trening + Testovi, mjesečno)", () => {
    const cijena = getTotalPrice(["Trening", "Testovi"], "Nogomet", "Trener", "monthly", "BAM", "small");
    expect(cijena).toBe("49.99"); // (10 + 15) * 1.95583 ≈ 48.89 → najbliže 49.99
  });

  it("računa cijenu paketa više modula (Trening + Testovi, godišnje)", () => {
    const cijena = getTotalPrice(["Trening", "Testovi"], "Nogomet", "Trener", "yearly", "BAM", "small");
    expect(cijena).toBe("486.99"); // (10 + 15) * 12 * 0.83 * 1.95583 ≈ 486.5 → najbliže 486.99
  });

  it("vrati 0.00 ako nema odabranih modula", () => {
    const cijena = getTotalPrice([], "Nogomet", "Trener", "monthly", "BAM", "small");
    expect(cijena).toBe("0.00");
  });
});
