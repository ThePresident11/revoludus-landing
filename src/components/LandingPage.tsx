"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

import HeaderSection from "@/components/LandingPage/HeaderSection";
import HeroSection from "@/components/LandingPage/HeroSection";
import AdvantagesSection from "@/components/LandingPage/AdvantagesSection";
import ModulesSection from "@/components/LandingPage/ModulesSection";
import SportsSection from "@/components/LandingPage/SportsSection";
import UsersSection from "@/components/LandingPage/UsersSection";
import PricingSection from "@/components/LandingPage/PricingSection";
import FooterSection from "@/components/LandingPage/FooterSection";

export default function LandingPage() {
  const { lang } = useLanguage(); // koristi globalni jezik iz konteksta

  return (
    <main className="select-none w-full min-h-screen bg-white text-gray-900">
      <HeaderSection />
      <HeroSection lang={lang} />
      <AdvantagesSection lang={lang} />
      <ModulesSection lang={lang} />
      <SportsSection lang={lang} />
      <UsersSection lang={lang} />
      <PricingSection lang={lang} />
      <FooterSection lang={lang} />
    </main>
  );
}
