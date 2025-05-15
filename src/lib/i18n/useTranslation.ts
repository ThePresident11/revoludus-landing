"use client";

import { useState, useEffect } from "react";
import { translations, TranslationDomain, Language } from "./translations";

export function useTranslation(externalLang: Language = "en") {
  const [language, setLanguage] = useState<Language>(externalLang);

  useEffect(() => {
    setLanguage(externalLang);
  }, [externalLang]);

  function t<T = string>(domain: TranslationDomain, key?: string): T {
    const domainData = translations[domain];
    if (!domainData) return `${domain}.${key ?? ""}` as T;

    const langData = domainData[language] ?? domainData["en"];

    if (!key) {
      return langData as T;
    }

    const value = langData?.[key as keyof typeof langData];
    return (value ?? `${domain}.${key}`) as T;
  }

  const i18n = { language, setLanguage };

  return { t, i18n };
}
