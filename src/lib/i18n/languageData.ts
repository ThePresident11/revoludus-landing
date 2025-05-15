// src/lib/i18n/languageData.ts

export interface LanguageOption {
  code: string;
  name: string;
  script: "latin" | "cyrillic" | "arabic" | "han" | "other";
}

export const languages: LanguageOption[] = [
  { code: "ar", name: "العربية", script: "arabic" },
  { code: "az", name: "Azərbaycan dili", script: "latin" },
  { code: "bg", name: "Български", script: "cyrillic" },
  { code: "bs", name: "Bosanski", script: "latin" },
  { code: "ca", name: "Català", script: "latin" },
  { code: "cnr", name: "Crnogorski", script: "latin" },
  { code: "cs", name: "Čeština", script: "latin" },
  { code: "da", name: "Dansk", script: "latin" },
  { code: "de", name: "Deutsch", script: "latin" },
  { code: "el", name: "Ελληνικά", script: "other" },
  { code: "en", name: "English", script: "latin" },
  { code: "es", name: "Español", script: "latin" },
  { code: "et", name: "Eesti", script: "latin" },
  { code: "fi", name: "Suomi", script: "latin" },
  { code: "fr", name: "Français", script: "latin" },
  { code: "ga", name: "Gaeilge", script: "latin" },
  { code: "he", name: "עברית", script: "other" },
  { code: "hr", name: "Hrvatski", script: "latin" },
  { code: "hu", name: "Magyar", script: "latin" },
  { code: "hy", name: "Հայերեն", script: "cyrillic" },
  { code: "is", name: "Íslenska", script: "latin" },
  { code: "it", name: "Italiano", script: "latin" },
  { code: "ja", name: "日本語", script: "han" },
  { code: "ka", name: "ქართული", script: "cyrillic" },
  { code: "kk", name: "Қазақ тілі", script: "cyrillic" },
  { code: "lt", name: "Lietuvių", script: "latin" },
  { code: "lv", name: "Latviešu", script: "latin" },
  { code: "mk", name: "Македонски", script: "cyrillic" },
  { code: "mt", name: "Malti", script: "latin" },
  { code: "nl", name: "Nederlands", script: "latin" },
  { code: "no", name: "Norsk", script: "latin" },
  { code: "pl", name: "Polski", script: "latin" },
  { code: "pt", name: "Português", script: "latin" },
  { code: "ro", name: "Română", script: "latin" },
  { code: "ru", name: "Русский", script: "cyrillic" },
  { code: "sk", name: "Slovenčina", script: "latin" },
  { code: "sl", name: "Slovenščina", script: "latin" },
  { code: "sq", name: "Shqip", script: "latin" },
  { code: "sr-Cyrl", name: "Српски (Ћир.)", script: "cyrillic" },
  { code: "sr-Latn", name: "Srpski (Lat.)", script: "latin" },
  { code: "sv", name: "Svenska", script: "latin" },
  { code: "tr", name: "Türkçe", script: "latin" },
  { code: "uk", name: "Українська", script: "cyrillic" },
  { code: "zh", name: "中文", script: "han" },
];
