"use client";

import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import React, { useState, useEffect, useRef } from "react";
import { smoothScrollTo } from "@/utils/scrollToId";
import { sportsTranslations } from "@/lib/i18n/translations/sports";
import type { SupportedLang } from "@/lib/i18n/LanguageSelector";

// Tipovi
type Benefit = {
  modulId: string;
  benefitId: string;
};

type Sport = {
  id: string;
  image: string;
  size: string;
  numbers: string[];
};

const getText = (t: any, key: string) => t[key as keyof typeof t] ?? key;

const benefits: Benefit[] = [
  { modulId: "takticka_ploca", benefitId: "tereni" },
  { modulId: "takticka_ploca", benefitId: "takticke_formacije" },
  { modulId: "biblioteka", benefitId: "vjezbe" },
  { modulId: "biblioteka", benefitId: "treninzi" },
  { modulId: "biblioteka", benefitId: "trenazni_ciklusi" },
  { modulId: "biblioteka", benefitId: "takticke_situacije" },
  { modulId: "trening", benefitId: "trening_obrasci" },
  { modulId: "testovi", benefitId: "testovi" },
  { modulId: "testovi", benefitId: "baterije_testova" },
  { modulId: "natjecanje", benefitId: "formati_natjecanja" },
  { modulId: "utakmica", benefitId: "plan_utakmice" },
  { modulId: "skauting", benefitId: "skauting_obrasci" },
];

const sports: Sport[] = [
  {
    id: "americki_nogomet",
    image: "/images/Americki-nogomet.svg",
    size: "w-24 h-24",
    numbers: [
      "18",
      "50+",
      "3000+",
      "400+",
      "50+",
      "600+",
      "5",
      "40+",
      "10",
      "14",
      "40+",
      "4",
    ],
  },
  {
    id: "futsal",
    image: "/images/Futsal.svg",
    size: "w-20 h-20",
    numbers: [
      "12",
      "50+",
      "4000+",
      "400+",
      "50+",
      "600+",
      "5",
      "40+",
      "10",
      "14",
      "40+",
      "4",
    ],
  },
  {
    id: "hokej_na_ledu",
    image: "/images/Hokej-na-ledu.svg",
    size: "w-12 h-12",
    numbers: [
      "18",
      "50+",
      "5000+",
      "400+",
      "50+",
      "600+",
      "5",
      "40+",
      "10",
      "14",
      "40+",
      "4",
    ],
  },
  {
    id: "hokej_na_travi",
    image: "/images/Hokej-na-travi.svg",
    size: "w-12 h-12",
    numbers: [
      "18",
      "50+",
      "6000+",
      "400+",
      "50+",
      "600+",
      "5",
      "40+",
      "10",
      "14",
      "40+",
      "4",
    ],
  },
  {
    id: "kosarka",
    image: "/images/Kosarka.svg",
    size: "w-24 h-24",
    numbers: [
      "18",
      "50+",
      "7000+",
      "400+",
      "50+",
      "600+",
      "5",
      "40+",
      "10",
      "14",
      "40+",
      "4",
    ],
  },
  {
    id: "nogomet",
    image: "/images/Nogomet.svg",
    size: "w-24 h-24",
    numbers: [
      "18",
      "50+",
      "8000+",
      "400+",
      "50+",
      "600+",
      "5",
      "40+",
      "10",
      "14",
      "40+",
      "4",
    ],
  },
  {
    id: "odbojka",
    image: "/images/Odbojka.svg",
    size: "w-24 h-24",
    numbers: [
      "18",
      "50+",
      "9000+",
      "400+",
      "50+",
      "600+",
      "5",
      "40+",
      "10",
      "14",
      "40+",
      "4",
    ],
  },
  {
    id: "ragbi",
    image: "/images/Ragbi.svg",
    size: "w-24 h-24",
    numbers: [
      "19",
      "50+",
      "3000+",
      "400+",
      "50+",
      "600+",
      "5",
      "40+",
      "10",
      "14",
      "40+",
      "4",
    ],
  },
  {
    id: "rukomet",
    image: "/images/Rukomet.svg",
    size: "w-20 h-20",
    numbers: [
      "20",
      "50+",
      "3000+",
      "400+",
      "50+",
      "600+",
      "5",
      "40+",
      "10",
      "14",
      "40+",
      "4",
    ],
  },
  {
    id: "tenis",
    image: "/images/Tenis.svg",
    size: "w-12 h-12",
    numbers: [
      "21",
      "50+",
      "3000+",
      "400+",
      "50+",
      "600+",
      "5",
      "40+",
      "10",
      "14",
      "40+",
      "4",
    ],
  },
  {
    id: "vaterpolo",
    image: "/images/Vaterpolo.svg",
    size: "w-24 h-24",
    numbers: [
      "22",
      "50+",
      "3000+",
      "400+",
      "50+",
      "600+",
      "5",
      "40+",
      "10",
      "14",
      "40+",
      "4",
    ],
  },
];

export default function SportsSection({ lang }: { lang: SupportedLang }) {
  const t = sportsTranslations[lang] ?? sportsTranslations.en;
  const [hoveredSport, setHoveredSport] = useState<Sport | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedSportIndex, setSelectedSportIndex] = useState<number | null>(
    null
  );
  const sectionRef = useRef<HTMLDivElement>(null);
  const selectedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        sectionRef.current &&
        !sectionRef.current.contains(e.target as Node)
      ) {
        setSelectedSportIndex(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  useEffect(() => {
    if (selectedRef.current && window.innerWidth < 1024) {
      const headerOffset = 120; // visina zaglavlja u px
      const elementPosition =
        selectedRef.current.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  }, [selectedSportIndex]);

  const renderInfoBox = (sport: Sport) => (
    <div
      ref={selectedRef}
      className="w-full h-full p-3 bg-white border-2 border-rev-blue rounded-lg flex flex-col justify-center"
    >
      <h3 className="text-xl text-center text-rev-blue uppercase mb-2">
        {getText(t, sport.id)}
      </h3>
      <div className="flex items-center bg-rev-blue rounded-md text-white text-sm text-center font-medium tracking-wide px-3 py-2 mb-2">
        <div className="basis-[40%]">{t.modulesHeader}</div>
        <div className="basis-[40%]">{t.benefitsHeader}</div>
        <div className="basis-[20%]">{t.numberHeader}</div>
      </div>
      <div className="space-y-1">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex items-center bg-gray-100 rounded-md px-3 py-1"
          >
            <div className="basis-[40%] text-gray-600 text-sm">
              {getText(t, benefit.modulId)}
            </div>
            <div className="basis-[40%] text-gray-800 text-sm">
              {getText(t, benefit.benefitId)}
            </div>
            <div className="basis-[20%] font-semibold text-gray-900 text-sm text-center">
              {sport.numbers[index]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const [colsPerRow, setColsPerRow] = useState(2);

  useEffect(() => {
    const updateCols = () => {
      const width = window.innerWidth;
      if (width < 768) setColsPerRow(2);
      else if (width < 1024) setColsPerRow(3);
      else setColsPerRow(4);
    };
    updateCols();
    window.addEventListener("resize", updateCols);
    return () => window.removeEventListener("resize", updateCols);
  }, []);

  const groupedSports = () => {
    const rows: Sport[][] = [];
    for (let i = 0; i < sports.length; i += colsPerRow) {
      rows.push(sports.slice(i, i + colsPerRow));
    }
    return rows;
  };

  return (
    <section
      id="sportovi"
      ref={sectionRef}
      className="scroll-mt-24 w-full py-2 px-6 md:px-12 lg:px-24 bg-white font-sans"
    >
      <div className="max-w-7xl mx-auto text-center mb-6">
        <h1 className="text-rev-blue">{t.sectionTitle}</h1>
        <h2>{t.sectionSubtitle}</h2>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-6 gap-8">
          {/* Lijevi info box za large ekrane */}
          <div className="hidden lg:flex col-span-2 flex-col justify-start h-full">
            {hoveredSport ? (
              renderInfoBox(hoveredSport)
            ) : (
              <div className="w-full h-full p-3 rounded-lg border-2 border-rev-blue flex items-center justify-center">
                <div className="flex items-center gap-2">
                  <h3 className="text-rev-orange uppercase text-center mb-0 whitespace-nowrap">
                    {t.chooseSport}
                  </h3>
                  <button
                    className="text-rev-orange text-xl animate-pulse"
                    aria-label="Odaberite sport"
                  >
                    <FaChevronRight />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Grid sportova */}
          <div className="col-span-6 lg:col-span-4 w-full">
            {groupedSports().map((row, rowIndex) => (
              <React.Fragment key={rowIndex}>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
                  {row.map((sport, index) => {
                    const absoluteIndex = rowIndex * colsPerRow + index;
                    return (
                      <div key={sport.id} className="col-span-1 w-full">
                        <div
                          className="py-4 group flex flex-col items-center space-y-1 cursor-pointer transform transition-transform duration-300 hover:scale-110"
                          onMouseEnter={() => {
                            if (window.innerWidth >= 1024) {
                              setHoveredSport(sport);
                              setHoveredIndex(absoluteIndex);
                            }
                          }}
                          onMouseLeave={() => {
                            if (window.innerWidth >= 1024) {
                              setHoveredSport(null);
                              setHoveredIndex(null);
                            }
                          }}
                          onClick={() => {
                            if (window.innerWidth < 1024) {
                              setSelectedSportIndex((prev) =>
                                prev === absoluteIndex ? null : absoluteIndex
                              );
                            }
                          }}
                        >
                          <div className="h-28 flex items-center justify-center">
                            <img
                              src={sport.image}
                              alt={getText(t, sport.id)}
                              className={`${
                                sport.size
                              } transition-transform duration-300 shadow-3d ${
                                hoveredIndex === absoluteIndex
                                  ? "animate-rotateZ"
                                  : ""
                              }`}
                            />
                          </div>
                          <h3 className="text-base text-rev-orange text-center uppercase transition-colors duration-300 group-hover:text-rev-blue mb-0">
                            {getText(t, sport.id)}
                          </h3>
                        </div>
                      </div>
                    );
                  })}
                </div>
                {/* Info box nakon reda na mobile/tablet */}
                {selectedSportIndex !== null &&
                  Math.floor(selectedSportIndex / colsPerRow) === rowIndex &&
                  window.innerWidth < 1024 && (
                    <div className="col-span-full w-full mt-4">
                      {renderInfoBox(sports[selectedSportIndex])}
                    </div>
                  )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <button
            onClick={() => smoothScrollTo("moduli", 1000)}
            className="scroll-arrow text-rev-blue"
            aria-label="Prijeđi na sljedeću sekciju"
          >
            <FaChevronDown />
          </button>
        </div>
      </div>
    </section>
  );
}
