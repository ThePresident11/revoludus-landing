import { header } from "./header";

export const translations = {
  header,
};

export type TranslationDomain = keyof typeof translations;
export type Language = keyof typeof header;
