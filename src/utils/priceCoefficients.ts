export const sportCoefficients: Record<string, number> = {
  "Američki nogomet": 1.2,
  Futsal: 1.1,
  "Hokej na ledu": 1.3,
  "Hokej na travi": 1.1,
  Košarka: 1.4,
  Nogomet: 1.0,
  Odbojka: 1.2,
  Ragbi: 1.2,
  Rukomet: 1.1,
  Tenis: 1.0,
  Vaterpolo: 1.1,
};

export const groupCoefficients: Record<string, number> = {
  Trener: 1.0,
  Klub: 1.5,
  Savez: 2.0,
  Mediji: 0.5,
  Roditelj: 0.3,
};

export const packageSizeMultiplier: Record<
  "S" | "M" | "L" | "XL" | "XXL",
  number
> = {
  S: 1,
  M: 1.3,
  L: 1.6,
  XL: 2.0,
  XXL: 3.0,
};

export const countryCoefficients: Record<string, number> = {
  AD: 1.0,
  AE: 1.0,
  AF: 1.0,
  AG: 1.0,
  AI: 1.0,
  AL: 1.0,
  AM: 1.0,
  AO: 1.0,
  AQ: 1.0,
  AR: 1.0,
  AS: 1.0,
  AT: 1.0,
  AU: 1.0,
  AW: 1.0,
  AX: 1.0,
  AZ: 1.0,
  BA: 1.0,
  BB: 1.0,
  BD: 1.0,
  BE: 1.0,
  BF: 1.0,
  BG: 1.0,
  BH: 1.0,
  BI: 1.0,
  BJ: 1.0,
  BL: 1.0,
  BM: 1.0,
  BN: 1.0,
  BO: 1.0,
  BQ: 1.0,
  BR: 1.0,
  BS: 1.0,
  BT: 1.0,
  BV: 1.0,
  BW: 1.0,
  BY: 1.0,
  BZ: 1.0,
  CA: 1.0,
  CC: 1.0,
  CD: 1.0,
  CF: 1.0,
  CG: 1.0,
  CH: 1.0,
  CI: 1.0,
  CK: 1.0,
  CL: 1.0,
  CM: 1.0,
  CN: 1.0,
  CO: 1.0,
  CR: 1.0,
  CU: 1.0,
  CV: 1.0,
  CW: 1.0,
  CX: 1.0,
  CY: 1.0,
  CZ: 1.0,
  DE: 1.0,
  DJ: 1.0,
  DK: 1.0,
  DM: 1.0,
  DO: 1.0,
  DZ: 1.0,
  EC: 1.0,
  EE: 1.0,
  EG: 1.0,
  EH: 1.0,
  ER: 1.0,
  ES: 1.0,
  ET: 1.0,
  FI: 1.0,
  FJ: 1.0,
  FK: 1.0,
  FM: 1.0,
  FO: 1.0,
  FR: 1.0,
  GA: 1.0,
  GB: 1.0,
  GD: 1.0,
  GE: 1.0,
  GF: 1.0,
  GG: 1.0,
  GH: 1.0,
  GI: 1.0,
  GL: 1.0,
  GM: 1.0,
  GN: 1.0,
  GP: 1.0,
  GQ: 1.0,
  GR: 1.0,
  GS: 1.0,
  GT: 1.0,
  GU: 1.0,
  GW: 1.0,
  GY: 1.0,
  HK: 1.0,
  HM: 1.0,
  HN: 1.0,
  HR: 1.0,
  HT: 1.0,
  HU: 1.0,
  ID: 1.0,
  IE: 1.0,
  IL: 1.0,
  IM: 1.0,
  IN: 1.0,
  IO: 1.0,
  IQ: 1.0,
  IR: 1.0,
  IS: 1.0,
  IT: 1.0,
  JE: 1.0,
  JM: 1.0,
  JO: 1.0,
  JP: 1.0,
  KE: 1.0,
  KG: 1.0,
  KH: 1.0,
  KI: 1.0,
  KM: 1.0,
  KN: 1.0,
  KP: 1.0,
  KR: 1.0,
  KW: 1.0,
  KY: 1.0,
  KZ: 1.0,
  LA: 1.0,
  LB: 1.0,
  LC: 1.0,
  LI: 1.0,
  LK: 1.0,
  LR: 1.0,
  LS: 1.0,
  LT: 1.0,
  LU: 1.0,
  LV: 1.0,
  LY: 1.0,
  MA: 1.0,
  MC: 1.0,
  MD: 1.0,
  ME: 1.0,
  MF: 1.0,
  MG: 1.0,
  MH: 1.0,
  MK: 1.0,
  ML: 1.0,
  MM: 1.0,
  MN: 1.0,
  MO: 1.0,
  MP: 1.0,
  MQ: 1.0,
  MR: 1.0,
  MS: 1.0,
  MT: 1.0,
  MU: 1.0,
  MV: 1.0,
  MW: 1.0,
  MX: 1.0,
  MY: 1.0,
  MZ: 1.0,
  NA: 1.0,
  NC: 1.0,
  NE: 1.0,
  NF: 1.0,
  NG: 1.0,
  NI: 1.0,
  NL: 1.0,
  NO: 1.0,
  NP: 1.0,
  NR: 1.0,
  NU: 1.0,
  NZ: 1.0,
  OM: 1.0,
  PA: 1.0,
  PE: 1.0,
  PF: 1.0,
  PG: 1.0,
  PH: 1.0,
  PK: 1.0,
  PL: 1.0,
  PM: 1.0,
  PN: 1.0,
  PR: 1.0,
  PS: 1.0,
  PT: 1.0,
  PW: 1.0,
  PY: 1.0,
  QA: 1.0,
  RE: 1.0,
  RO: 1.0,
  RS: 1.0,
  RU: 1.0,
  RW: 1.0,
  SA: 1.0,
  SB: 1.0,
  SC: 1.0,
  SD: 1.0,
  SE: 1.0,
  SG: 1.0,
  SH: 1.0,
  SI: 1.0,
  SJ: 1.0,
  SK: 1.0,
  SL: 1.0,
  SM: 1.0,
  SN: 1.0,
  SO: 1.0,
  SR: 1.0,
  SS: 1.0,
  ST: 1.0,
  SV: 1.0,
  SX: 1.0,
  SY: 1.0,
  SZ: 1.0,
  TC: 1.0,
  TD: 1.0,
  TF: 1.0,
  TG: 1.0,
  TH: 1.0,
  TJ: 1.0,
  TK: 1.0,
  TL: 1.0,
  TM: 1.0,
  TN: 1.0,
  TO: 1.0,
  TR: 1.0,
  TT: 1.0,
  TV: 1.0,
  TW: 1.0,
  TZ: 1.0,
  UA: 1.0,
  UG: 1.0,
  UM: 1.0,
  US: 1.0,
  UY: 1.0,
  UZ: 1.0,
  VA: 1.0,
  VC: 1.0,
  VE: 1.0,
  VG: 1.0,
  VI: 1.0,
  VN: 1.0,
  VU: 1.0,
  WF: 1.0,
  WS: 1.0,
  YE: 1.0,
  YT: 1.0,
  ZA: 1.0,
  ZM: 1.0,
  ZW: 1.0,
};

export const getCanonicalKey = (str: string): string =>
  str.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase();
