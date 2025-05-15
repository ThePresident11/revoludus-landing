import { header } from "./header";
import { footer } from "./footer";

export const translations = {
  header,
  footer,
};

export type TranslationDomain = keyof typeof translations;
export type Language = keyof typeof header;
