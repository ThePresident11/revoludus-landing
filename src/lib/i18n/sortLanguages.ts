import { LanguageOption } from "./languageData";

export function sortLanguages(
  languages: LanguageOption[],
  currentLang: string
): LanguageOption[] {
  const collator = new Intl.Collator(currentLang, {
    sensitivity: "base",
    ignorePunctuation: true,
  });

  return [...languages].sort((a, b) => collator.compare(a.name, b.name));
}
