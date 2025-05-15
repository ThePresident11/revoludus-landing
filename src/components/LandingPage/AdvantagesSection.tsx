"use client";

import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { smoothScrollTo } from "@/utils/scrollToId";
import { title, subtitle, features } from "@/lib/i18n/translations/advantages";
import type { SupportedLang } from "@/lib/i18n/LanguageSelector";
import PuzzleIcon from "@/components/icons/PuzzleIcon";
import SportsIcon from "@/components/icons/SportsIcon";
import ProductIcon from "@/components/icons/ProductIcon";
import SpeedIcon from "@/components/icons/SpeedIcon";
import ProtectIcon from "@/components/icons/ProtectIcon";
import LanguagesIcon from "@/components/icons/LanguagesIcon";

const icons = [
  <PuzzleIcon />,
  <SportsIcon />,
  <ProductIcon />,
  <SpeedIcon />,
  <ProtectIcon />,
  <LanguagesIcon />,
];

export default function AdvantagesSection({
  lang,
}: {
  lang: SupportedLang | string;
}) {
  const key = (lang in title ? lang : "en") as SupportedLang;

  return (
    <section
      id="prednosti"
      className="w-full py-16 px-6 md:px-12 lg:px-24 bg-white font-sans"
    >
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-rev-blue">{title[key]}</h1>
        <h2>{subtitle[key]}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
        {(features[key] || []).map((feature, index) => (
          <div key={index} className="group card py-6">
            <div className="icon text-rev-orange group-hover:text-orange-700 mb-6">
              {React.cloneElement(icons[index], { key: index })}
            </div>

            <h3 className="text-rev-blue group-hover:text-blue-800 transition-colors duration-300 h-20 flex items-center justify-center">
              {feature.title}
            </h3>

            <h4 className="text-center group-hover:text-rev-black transition-colors duration-300">
              {feature.desc}
            </h4>
          </div>
        ))}
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
    </section>
  );
}
