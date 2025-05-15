"use client";

import { FaChevronDown } from "react-icons/fa";
import CoachesIcon from "@/components/icons/CoachesIcon";
import ClubsIcon from "@/components/icons/ClubsIcon";
import AcademiesIcon from "@/components/icons/AcademiesIcon";
import FederationsIcon from "@/components/icons/FederationsIcon";
import MediaIcon from "@/components/icons/MediaIcon";
import ParentsIcon from "@/components/icons/ParentsIcon";
import { smoothScrollTo } from "@/utils/scrollToId";
import { title, subtitle, users } from "@/lib/i18n/translations/users";
import type { SupportedLang } from "@/lib/i18n/LanguageSelector";

const icons = [
  <CoachesIcon key="coach" />,
  <ClubsIcon key="club" />,
  <AcademiesIcon key="academy" />,
  <FederationsIcon key="federation" />,
  <MediaIcon key="media" />,
  <ParentsIcon key="parent" />,
];

interface UsersSectionProps {
  lang: string;
}

export default function UsersSection({ lang }: UsersSectionProps) {
  const key: SupportedLang = (
    Object.keys(title).includes(lang) ? lang : "hr"
  ) as SupportedLang;

  return (
    <section
      id="korisnici"
      className="scroll-mt-24 w-full py-10 px-6 md:px-12 lg:px-24 bg-white font-sans"
    >
      <div className="max-w-7xl mx-auto text-center mb-8">
        <h1 className="text-rev-orange">{title[key]}</h1>
        <h2>{subtitle[key]}</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
        {users[key].map((user, index) => (
          <div key={index} className="group card py-4">
            <div className="icon text-rev-blue group-hover:text-blue-800">
              {icons[index]}
            </div>

            <h3 className="text-rev-orange group-hover:text-orange-700 transition-colors duration-300 h-8 flex items-start justify-center mt-4">
              {user.name}
            </h3>

            <h4 className="text-center group-hover:text-rev-black transition-colors duration-300">
              {user.description}
            </h4>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-16">
        <button
          onClick={() => smoothScrollTo("paketi", 1000)}
          className="scroll-arrow text-rev-orange"
          aria-label="Prijeđi na sljedeću sekciju"
        >
          <FaChevronDown />
        </button>
      </div>
    </section>
  );
}
