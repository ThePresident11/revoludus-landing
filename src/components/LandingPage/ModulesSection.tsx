"use client";

import { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { smoothScrollTo } from "@/utils/scrollToId";
import { title, subtitle, modules } from "@/lib/i18n/translations/modules";
import type { SupportedLang } from "@/lib/i18n/LanguageSelector";

const moduleList = [
  "administracija",
  "plan",
  "takticka_ploca",
  "biblioteka",
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
];

function toImageName(id: string) {
  return {
    administracija: "Administracija.png",
    plan: "Plan.png",
    takticka_ploca: "Takticka-ploca.png",
    biblioteka: "Biblioteka.png",
    trening: "Trening.png",
    testovi: "Testovi.png",
    natjecanje: "Natjecanje.png",
    utakmica: "Utakmica.png",
    skauting: "Skauting.png",
    statistika: "Statistika.png",
    medicina: "Medicina.png",
    nutricionizam: "Nutricionizam.png",
    oprema: "Oprema.png",
    infrastruktura: "Infrastruktura.png",
    komunikacija: "Komunikacija.png",
  }[id];
}

export default function ModulesSection({ lang }: { lang: SupportedLang }) {
  const t = modules[lang] || modules.en;
  const [activeModule, setActiveModule] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Klik izvan sekcije poništava odabir (na mobilnim/srednjim)
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setActiveModule(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section
      id="moduli"
      className="w-full py-16 px-6 md:px-12 lg:px-24 bg-rev-white font-sans"
    >
      {/* Naslov i podnaslov */}
      <div className="max-w-7xl mx-auto text-center mb-8">
        <h1 className="text-rev-orange">{title[lang] || title.en}</h1>
        <h2>{subtitle[lang] || subtitle.en}</h2>
      </div>

      {/* Glavni sadržaj */}
      <div
        ref={containerRef}
        className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-4 gap-8"
      >
        {/* Lista modula */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3 lg:col-span-3 lg:gap-x-4 lg:gap-y-8 text-wrap balance">
          {moduleList.map((id) => (
            <div key={id} className="col-span-1">
              <div
                onClick={() => {
                  if (window.innerWidth < 1024) {
                    setActiveModule((prev) => (prev === id ? null : id));
                  }
                }}
                onMouseEnter={() => {
                  if (window.innerWidth >= 1024) {
                    setActiveModule(id);
                  }
                }}
                onMouseLeave={() => {
                  if (window.innerWidth >= 1024) {
                    setActiveModule(null);
                  }
                }}
                className={`p-3 h-16 flex items-center justify-center text-center uppercase text-base font-bold tracking-wide border-2 rounded-2xl shadow-sm cursor-pointer transition-all duration-300 text-wrap balance truncate text-ellipsis max-w-full ${
                  activeModule === id
                    ? "border-rev-orange text-rev-orange"
                    : "border-rev-blue text-rev-blue hover:border-rev-orange hover:text-rev-orange"
                }`}
              >
                {t[id]?.name}
              </div>

              {/* Prikaz ispod gumba za mobile/tablet */}
              <div className="block lg:hidden mt-2">
                {activeModule === id && (
                  <div className="flex flex-col items-center justify-center border-2 border-rev-orange rounded-2xl p-6 text-center">
                    <div className="w-full max-w-[180px] aspect-square mb-4">
                      <img
                        src={`/images/${toImageName(id)}`}
                        alt={t[id].name}
                        loading="eager"
                        className="w-full h-full object-contain rounded-xl shadow-md"
                      />
                    </div>
                    <h3 className="text-lg text-rev-orange">{t[id].name}</h3>
                    <h4 className="max-w-md">{t[id].desc}</h4>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Prikaz sa strane za desktop */}
        <div className="hidden lg:flex flex-col items-center justify-center border-2 border-rev-orange rounded-2xl p-6 text-center">
          {activeModule && (
            <>
              <img
                src={`/images/${toImageName(activeModule)}`}
                alt={t[activeModule].name}
                className="mb-8 max-w-full h-auto rounded-xl shadow-md"
              />
              <h3 className="text-lg text-rev-orange">
                {t[activeModule].name}
              </h3>
              <h4 className="max-w-md">{t[activeModule].desc}</h4>
            </>
          )}
        </div>
      </div>

      {/* Scroll gumb */}
      <div className="flex justify-center mt-16">
        <button
          onClick={() => smoothScrollTo("sportovi", 1000)}
          className="scroll-arrow text-rev-orange"
          aria-label="Prijeđi na sljedeću sekciju"
        >
          <FaChevronDown />
        </button>
      </div>
    </section>
  );
}
