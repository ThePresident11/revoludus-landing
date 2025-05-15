"use client";

import { FaChevronDown } from "react-icons/fa";
import { useState, useEffect } from "react";
import { smoothScrollTo } from "@/utils/scrollToId";
import {
  getModulePrice,
  getTotalPrice,
  getCurrencySymbol,
  userGroups,
  sports,
  modulesByGroup,
  linkedModules,
  autoIncludedModules,
  getIconSrc,
} from "@/utils/priceUtils";
import { SupportedLang } from "@/lib/i18n/LanguageSelector";
import {
  title,
  subtitle,
  chooseSport,
  choosePlaceholder,
  chooseGroup,
  choosePackage,
  chooseModules,
  billingType,
  totalPrice,
  sports as transSports,
  userGroups as transUserGroups,
  billing,
  buttons,
  modules,
  tooltips,
} from "@/lib/i18n/translations/pricing";

export default function PricingSection({ lang }: { lang: string }) {
  const key = Object.keys(tooltips).includes(lang)
    ? (lang as SupportedLang)
    : "en";

  const getSportLabel = (id: string) => transSports[key]?.[id] ?? id;
  const getGroupLabel = (id: string) => transUserGroups[key]?.[id] ?? id;
  const getModuleLabel = (id: string) => modules[key]?.[id] ?? id;

  const [currency, setCurrency] = useState<string>("EUR");
  const [currencySymbol, setCurrencySymbol] = useState<string>("€");
  const [countryCode, setCountryCode] = useState<string>("EU");
  const [selectedSport, setSelectedSport] = useState<string>("");
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);
  const [selectedModules, setSelectedModules] = useState<string[]>([]);
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly"
  );
  const [packageSize, setPackageSize] = useState<
    "S" | "M" | "L" | "XL" | "XXL"
  >("S");
  const [autoInfoModules, setAutoInfoModules] = useState<Set<string>>(
    new Set()
  );
  const [blockedRemovalModules, setBlockedRemovalModules] = useState<
    Set<string>
  >(new Set());
  const [tooltipVisible, setTooltipVisible] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        const cur = data.currency || "EUR";
        const code = data.country_code || "EU";
        setCurrency(cur);
        setCurrencySymbol(getCurrencySymbol(cur));
        setCountryCode(code);
      })
      .catch(() => {
        setCurrency("EUR");
        setCurrencySymbol("€");
        setCountryCode("EU");
      });
  }, []);

  useEffect(() => {
    setPackageSize("S");
  }, [selectedSport, selectedGroup]);

  const toggleModule = (modul: string): void => {
    let updatedModules = [...selectedModules];
    const isLinked = linkedModules.includes(modul);
    const isAuto = autoIncludedModules.includes(modul);

    if (updatedModules.includes(modul)) {
      if (isAuto && selectedModules.some((m) => linkedModules.includes(m))) {
        setBlockedRemovalModules((prev) => {
          const newSet = new Set(prev).add(modul);
          setTimeout(() => {
            setBlockedRemovalModules((prev) => {
              const next = new Set(prev);
              next.delete(modul);
              return next;
            });
          }, 1000);
          return newSet;
        });
        return;
      }
      updatedModules = updatedModules.filter((m) => m !== modul);
      if (isLinked) {
        autoIncludedModules.forEach((auto) => {
          const stillRequired = updatedModules.some((m) =>
            linkedModules.includes(m)
          );
          if (!stillRequired) {
            updatedModules = updatedModules.filter((m) => m !== auto);
          }
        });
      }
    } else {
      updatedModules.push(modul);
      if (isLinked) {
        autoIncludedModules.forEach((auto) => {
          if (!updatedModules.includes(auto)) {
            updatedModules.push(auto);
            setAutoInfoModules((prev) => new Set(prev).add(auto));
            setTimeout(() => {
              setAutoInfoModules((prev) => {
                const next = new Set(prev);
                next.delete(auto);
                return next;
              });
            }, 1000);
          }
        });
      }
    }
    setSelectedModules(updatedModules);
  };

  const getTooltipText = (
    size: string,
    group: string,
    lang: SupportedLang
  ): string => {
    const key = lang in tooltips ? lang : "en";

    // Interne grupe koje se NE prevode i koriste se kao ključ
    const userGroupsWithTeams = ["trener", "roditelj"];

    // Definicije limita po veličini paketa
    const limits: Record<string, Record<string, number>> = {
      trener: { S: 1, M: 2, L: 3, XL: 5, XXL: 10 },
      klub: { S: 6, M: 12, L: 20, XL: 50, XXL: 100 },
      savez: { S: 50, M: 100, L: 200, XL: 500, XXL: 1000 },
      mediji: { S: 2, M: 4, L: 6, XL: 10, XXL: 20 },
      roditelj: { S: 1, M: 2, L: 3, XL: 5, XXL: 10 },
    };

    // Odabir pravog labelea
    const keyLabel = userGroupsWithTeams.includes(group)
      ? "maxTeams"
      : "maxUsers";
    const label = tooltips[key][keyLabel];

    // Dobivanje numeričke vrijednosti
    const value = limits[group]?.[size];

    // Povrat formatiranog stringa
    return value !== undefined ? `${label} ${value}` : "";
  };

  const getAdjustedModulePrice = (modul: string) =>
    getModulePrice(
      modul,
      selectedSport,
      selectedGroup || "Klub",
      billingCycle,
      currency,
      packageSize,
      countryCode
    );

  const getAdjustedTotalPrice = () =>
    getTotalPrice(
      selectedModules,
      selectedSport,
      selectedGroup || "Klub",
      billingCycle,
      currency,
      packageSize,
      countryCode
    );

  return (
    <section
      id="paketi"
      className="scroll-mt-24 px-4 md:px-8 py-8 min-h-[740px]"
      style={{
        backgroundImage: "url(/images/Bckg_Paketi.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "rgba(255, 255, 255, 0.85)",
        backdropFilter: "blur(2px)",
      }}
    >
      <div className="max-w-7xl mx-auto text-center mb-6">
        <h1 className="text-rev-blue">{title[key]}</h1>
        <h2 className="text-lg text-gray-600">{subtitle[key]}</h2>
      </div>

      {/* Odabir sporta i korisničke grupe */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-rev-orange/20 border border-rev-orange rounded-xl backdrop-blur-md px-4 py-2">
        {/* Odabir sporta */}
        <div className="basis-1/4 flex flex-row items-center justify-center md:justify-start text-rev-blue gap-2">
          <h5>{chooseSport[key]}:</h5>
          <select
            value={selectedSport}
            onChange={(e) => {
              setSelectedSport(e.target.value);
              setSelectedGroup(null);
              setSelectedModules([]);
            }}
            className="bg-white text-blue-800 border-2 px-2 py-1 rounded-md text-base font-medium shadow-sm w-full md:w-auto"
          >
            <option value="">{choosePlaceholder[key]}</option>
            {sports
              .sort((a, b) => getSportLabel(a).localeCompare(getSportLabel(b)))
              .map((id) => (
                <option key={id} value={id}>
                  {getSportLabel(id)}
                </option>
              ))}
          </select>
        </div>
        {/* Odabir korisničke grupe */}
        {selectedSport && (
          <div className="basis-3/4 flex flex-row items-center justify-center md:justify-end text-rev-blue gap-2 flex-wrap">
            <h5>{chooseGroup[key]}:</h5>
            <div className="flex flex-wrap justify-center gap-2">
              {userGroups.map((groupId) => (
                <button
                  key={groupId}
                  className={`btn-secondary text-sm px-2 py-1 ${
                    selectedGroup === groupId ? "bg-rev-blue text-white" : ""
                  }`}
                  onClick={() => {
                    setSelectedGroup(groupId);
                    setSelectedModules([]);
                  }}
                >
                  {getGroupLabel(groupId)}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {selectedSport && selectedGroup && (
        <>
          {/* Veličina paketa + vrsta pretplate */}
          <div className="mt-3 max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-rev-orange/20 border border-rev-orange rounded-xl backdrop-blur-md px-4 py-2">
            <div className="basis-1/2 flex flex-row items-center justify-center md:justify-start text-rev-blue gap-2 flex-wrap">
              <h5 className="whitespace-nowrap">{choosePackage[key]}:</h5>
              <div className="flex gap-1">
                {["S", "M", "L", "XL", "XXL"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setPackageSize(size as any)}
                    onMouseEnter={() => setTooltipVisible(size)}
                    onMouseLeave={() => setTooltipVisible(null)}
                    className={`relative btn-secondary w-14 text-sm px-4 py-1 ${
                      packageSize === size ? "bg-rev-blue text-white" : ""
                    }`}
                  >
                    {size}
                    {tooltipVisible === size && (
                      <div
                        className="
                          absolute 
                          top-[-30px] 
                          left-1/2 -translate-x-1/2 
                          md:left-0 md:translate-x-0
                          lg:left-1/2 lg:-translate-x-1/2 
                          bg-gray-800 text-white text-sm font-medium px-2 py-1 
                          rounded-md w-max text-center break-words z-10 pointer-events-none
                        "
                      >
                        {" "}
                        <p>{getTooltipText(size, selectedGroup, key)}</p>{" "}
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="basis-1/2 flex flex-row items-center justify-center md:justify-end text-rev-blue gap-2 flex-wrap">
              <h5 className="whitespace-nowrap">{billingType[key]}:</h5>
              <div className="flex gap-2">
                <button
                  className={`btn-secondary text-sm px-4 py-1 ${
                    billingCycle === "monthly" ? "bg-rev-blue text-white" : ""
                  }`}
                  onClick={() => setBillingCycle("monthly")}
                >
                  {billing[key].monthly}
                </button>
                <button
                  className={`relative btn-secondary text-sm px-4 py-1 ${
                    billingCycle === "yearly" ? "bg-rev-blue text-white" : ""
                  }`}
                  onClick={() => setBillingCycle("yearly")}
                  onMouseEnter={() => setTooltipVisible("yearly")}
                  onMouseLeave={() => setTooltipVisible(null)}
                >
                  <span>{billing[key].yearly}</span>
                  {tooltipVisible === "yearly" && (
                    <div
                      className="
                        absolute 
                        top-[-32px] 
                        right-0 left-auto translate-x-0 
                        lg:left-1/2 lg:-translate-x-1/2 
                        bg-yellow-200 text-red-600 text-sm font-semibold px-2 py-1 
                        border border-red-600 rounded-md w-max text-center break-words z-10 pointer-events-none
                      "
                    >
                      {" "}
                      {tooltips[key].yearlyDiscount}
                    </div>
                  )}
                </button>{" "}
              </div>
            </div>
          </div>
        </>
      )}
      {selectedSport && selectedGroup && (
        <>
          {/* Modul blok */}
          <div className="mt-3 max-w-5xl mx-auto">
            <div className="bg-rev-blue/20 border border-rev-blue rounded-xl backdrop-blur-md px-4 py-2">
              <div className="flex justify-between items-center mb-2">
                <h5 className="text-rev-blue">{chooseModules[key]}:</h5>
                <button
                  onClick={() => {
                    const allModules = modulesByGroup[selectedGroup];
                    const allSelected = allModules.every((m) =>
                      selectedModules.includes(m)
                    );
                    setSelectedModules(allSelected ? [] : allModules);
                  }}
                  className="btn-secondary text-sm px-4 py-1"
                >
                  {selectedModules.length > 0 &&
                  modulesByGroup[selectedGroup].every((m) =>
                    selectedModules.includes(m)
                  )
                    ? buttons[key].deselectAll
                    : buttons[key].selectAll}
                </button>
              </div>
              <div className="grid gap-2 grid-cols-1 md:grid-cols-2 md:grid-rows-8 lg:grid-cols-3 lg:grid-rows-5">
                {modulesByGroup[selectedGroup].map((modul) => {
                  const isSelected = selectedModules.includes(modul);
                  const modulePrice = getAdjustedModulePrice(modul);
                  const isAutoInfo = autoInfoModules.has(modul);
                  const isBlockedRemoval = blockedRemovalModules.has(modul);

                  const moduleIcon = getIconSrc(selectedSport);

                  return (
                    <div
                      key={modul}
                      onClick={() => toggleModule(modul)}
                      className={`cursor-pointer flex flex-col items-start justify-center p-2 rounded-xl transition-colors shadow-sm border bg-white relative overflow-hidden ${
                        isSelected
                          ? "text-rev-orange border-rev-orange ring-1 ring-rev-orange"
                          : "text-rev-blue border-gray-200"
                      } ${
                        !isAutoInfo && !isBlockedRemoval
                          ? "hover:text-rev-orange hover:border-rev-orange"
                          : ""
                      }`}
                    >
                      {isAutoInfo || isBlockedRemoval ? (
                        <div
                          className={`w-full flex items-center justify-center text-center p-0.5 h-full rounded-lg fade-in-out shadow-sm ${
                            isBlockedRemoval
                              ? "border-2 border-red-400 bg-red-100 shake"
                              : "border-2 border-yellow-400 bg-yellow-100"
                          }`}
                        >
                          <p
                            className={`font-medium leading-none text-sm ${
                              isBlockedRemoval
                                ? "text-red-800"
                                : "text-yellow-800"
                            }`}
                          >
                            {isBlockedRemoval
                              ? tooltips[key].mandatoryModule
                              : tooltips[key].autoAddedModule}
                          </p>
                        </div>
                      ) : (
                        <div className="flex items-center justify-between w-full">
                          <div className="flex items-center space-x-2">
                            <img
                              src={moduleIcon}
                              alt={selectedSport}
                              className="w-5 h-5"
                            />
                            <span className="text-base font-semibold">
                              {getModuleLabel(modul)}
                            </span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <span className="text-base font-semibold">
                              {modulePrice} {currencySymbol}
                            </span>
                            {isSelected && (
                              <svg
                                className="w-6 h-6 text-green-600"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Cijena i gumb */}
            <div className="mt-3 max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-rev-orange/20 border border-rev-orange rounded-xl backdrop-blur-md px-4 py-2">
              <div className="basis-2/4 flex flex-row items-center justify-center md:justify-start">
                <h5 className="whitespace-nowrap text-rev-blue">
                  {totalPrice[key]} ({currency}) –{" "}
                  {billing[key][billingCycle as "monthly" | "yearly"]}:
                </h5>
              </div>
              <div className="basis-1/4 flex flex-row items-center justify-center md:justify-start flex-wrap">
                <p className="text-2xl font-bold text-rev-blue whitespace-nowrap">
                  {new Intl.NumberFormat(undefined, {
                    style: "decimal",
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }).format(Number(getAdjustedTotalPrice()))}{" "}
                  {currencySymbol}
                </p>
              </div>
              <div className="basis-1/4 flex flex-row items-center justify-center md:justify-end flex-wrap">
                <button
                  className="btn-accent px-4 py-1"
                  onClick={() => console.log("Kupi kliknut")}
                >
                  {buttons[key].buy}
                </button>
              </div>
            </div>
          </div>

          {/* Strelica */}
          <div className="flex justify-center mt-16">
            <button
              onClick={() => smoothScrollTo("kontakt", 1000)}
              className="text-rev-blue text-2xl animate-bounce hover:opacity-80 transition-opacity"
              aria-label=""
            >
              <FaChevronDown />
            </button>
          </div>
        </>
      )}
    </section>
  );
}
