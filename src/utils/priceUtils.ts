import baseModulePrices from "@/utils/basePrices";
import {
  sportCoefficients,
  groupCoefficients,
  packageSizeMultiplier,
  countryCoefficients,
} from "@/utils/priceCoefficients";
import exchangeRates from "@/utils/exchangeRates";
import {
  sports as transSports,
  userGroups as transUserGroups,
} from "@/lib/i18n/translations/pricing";

export const userGroups: string[] = [
  "klub",
  "trener",
  "savez",
  "mediji",
  "roditelj",
];

export const sports: string[] = [
  "americki_nogomet",
  "futsal",
  "hokej_na_ledu",
  "hokej_na_travi",
  "kosarka",
  "nogomet",
  "odbojka",
  "ragbi",
  "rukomet",
  "tenis",
  "vaterpolo",
];

export const modulesByGroup: Record<string, string[]> = {
  trener: [
    "takticka_ploca",
    "biblioteka",
    "administracija",
    "plan",
    "trening",
    "testovi",
    "natjecanje",
    "utakmica",
    "skauting",
    "statistika",
    "komunikacija",
  ],
  klub: [
    "takticka_ploca",
    "biblioteka",
    "administracija",
    "plan",
    "trening",
    "testovi",
    "natjecanje",
    "utakmica",
    "skauting",
    "statistika",
    "medicina",
    "nutricionizam",
    "oprema",
    "infrastruktura",
    "komunikacija",
  ],
  savez: [
    "takticka_ploca",
    "biblioteka",
    "administracija",
    "plan",
    "trening",
    "testovi",
    "natjecanje",
    "utakmica",
    "skauting",
    "statistika",
    "medicina",
    "nutricionizam",
    "oprema",
    "infrastruktura",
    "komunikacija",
  ],
  mediji: ["takticka_ploca", "natjecanje", "statistika"],
  roditelj: ["komunikacija"],
};

export const linkedModules: string[] = [
  "trening",
  "testovi",
  "natjecanje",
  "skauting",
];

export const autoIncludedModules: string[] = ["administracija", "plan"];

export const getCurrencySymbol = (cur: string): string => {
  switch (cur) {
    case "BAM":
      return "KM";
    case "RSD":
      return "RSD";
    case "HRK":
      return "kn";
    case "USD":
      return "$";
    case "GBP":
      return "£";
    case "JPY":
      return "¥";
    case "CHF":
      return "CHF";
    case "CAD":
      return "C$";
    case "AUD":
      return "A$";
    case "CZK":
      return "Kč";
    case "DKK":
      return "kr";
    case "HUF":
      return "Ft";
    case "SEK":
      return "kr";
    default:
      return "€";
  }
};

export const getIconSrc = (sport: string): string => {
  const formatted = sport
    .split(/[_\s]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("-");
  return `/images/${formatted}.svg`;
};

function roundToEnding99(amount: number): string {
  if (amount === 0) return "0.00";
  const floored = Math.floor(amount);
  const lower = floored - 1 + 0.99;
  const upper = floored + 0.99;
  const diffLower = Math.abs(amount - lower);
  const diffUpper = Math.abs(amount - upper);
  const final = diffLower <= diffUpper ? lower : upper;
  return final.toFixed(2);
}

function resolveLabels(sportId: string, groupId: string, countryCode: string) {
  const key = "hr";
  const sportLabel = transSports[key]?.[sportId] ?? sportId;
  const groupLabel = transUserGroups[key]?.[groupId] ?? groupId;
  const countryCoeff = countryCoefficients[countryCode] ?? 1.0;
  return { sportLabel, groupLabel, countryCoeff };
}

export function getModulePrice(
  moduleName: string,
  sport: string,
  group: string,
  billingCycle: "monthly" | "yearly" = "monthly",
  currency: string,
  size: "S" | "M" | "L" | "XL" | "XXL" = "S",
  countryCode: string = "EU"
): string {
  const { sportLabel, groupLabel, countryCoeff } = resolveLabels(
    sport,
    group,
    countryCode
  );

  const base = baseModulePrices[moduleName] || 0;
  const sportCoeff = sportCoefficients[sportLabel] ?? 1.0;
  const groupCoeff = groupCoefficients[groupLabel] ?? 1.0;
  const sizeCoeff = packageSizeMultiplier[size] ?? 1.0;

  let price = base * sportCoeff * groupCoeff * sizeCoeff * countryCoeff;
  if (billingCycle === "yearly") {
    price = price * 12 * 0.83;
  }
  const rate = exchangeRates[currency] ?? 1;
  const localized = price * rate;
  return roundToEnding99(localized);
}

export function getTotalPrice(
  selectedModules: string[],
  sport: string,
  group: string,
  billingCycle: "monthly" | "yearly" = "monthly",
  currency: string,
  size: "S" | "M" | "L" | "XL" | "XXL" = "S",
  countryCode: string = "EU"
): string {
  if (selectedModules.length === 0) {
    return "0.00";
  }

  const total = selectedModules.reduce((sum, mod) => {
    const priceStr = getModulePrice(
      mod,
      sport,
      group,
      billingCycle,
      currency,
      size,
      countryCode
    );
    const priceNum = parseFloat(priceStr);
    return sum + (isNaN(priceNum) ? 0 : priceNum);
  }, 0);

  return total.toFixed(2);
}

export function calculateLocalizedPrices(
  eurAmount: number,
  currency: string
): {
  monthly: string;
  yearly: string;
} {
  const rate = exchangeRates[currency] ?? 1;
  const monthlyRaw = eurAmount * rate;
  const yearlyRaw = eurAmount * 0.83 * 12 * rate;

  return {
    monthly: roundToEnding99(monthlyRaw),
    yearly: roundToEnding99(yearlyRaw),
  };
}

export function calculateFinalModulePrice(
  moduleName: string,
  sport: string,
  group: string,
  size: "S" | "M" | "L" | "XL" | "XXL" = "S",
  billingCycle: "monthly" | "yearly" = "monthly",
  currency: string = "EUR",
  countryCode: string = "EU"
): number {
  const { sportLabel, groupLabel, countryCoeff } = resolveLabels(
    sport,
    group,
    countryCode
  );

  const base = baseModulePrices[moduleName] || 0;
  const sportCoeff = sportCoefficients[sportLabel] ?? 1.0;
  const groupCoeff = groupCoefficients[groupLabel] ?? 1.0;
  const sizeCoeff = packageSizeMultiplier[size] ?? 1.0;

  let price = base * sportCoeff * groupCoeff * sizeCoeff * countryCoeff;
  if (billingCycle === "yearly") {
    price = price * 12 * 0.83;
  }

  const rate = exchangeRates[currency] ?? 1;
  return parseFloat((price * rate).toFixed(2));
}
