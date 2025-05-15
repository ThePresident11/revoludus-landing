"use client";

import React from "react";
import { languages } from "@/lib/i18n/languageData";
import { sortLanguages } from "@/lib/i18n/sortLanguages";

export type SupportedLang =
  | "hr"
  | "en"
  | "de"
  | "fr"
  | "es"
  | "it"
  | "sr-Latn"
  | "sr-Cyrl"
  | "bs"
  | "sl"
  | "mk"
  | "cnr"
  | "sq"
  | "hu"
  | "ro"
  | "ru"
  | "bg"
  | "pl"
  | "cs"
  | "sk"
  | "uk"
  | "nl"
  | "pt"
  | "tr"
  | "ar"
  | "zh"
  | "ja"
  | "el"
  | "fi"
  | "et"
  | "lt"
  | "lv"
  | "no"
  | "da"
  | "az"
  | "hy"
  | "he"
  | "is"
  | "kk"
  | "mt"
  | "sv"
  | "ka"
  | "ga"
  | "ca";

export type Language = SupportedLang;

interface LanguageSelectorProps {
  currentLang: Language;
  onChange: (lang: Language) => void;
  className?: string;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  currentLang,
  onChange,
}) => {
  const sortedLanguages = sortLanguages(languages, currentLang);

  return (
    <select
      lang={currentLang}
      value={currentLang}
      onChange={(e) => onChange(e.target.value as Language)}
      className="bg-white text-blue-800 px-2 py-1 rounded-lg text-sm font-medium shadow-sm"
    >
      {sortedLanguages.map(({ code, name }) => (
        <option key={code} value={code}>
          {name}
        </option>
      ))}
    </select>
  );
};

export default LanguageSelector;
