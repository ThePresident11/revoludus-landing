"use client";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

import { smoothScrollTo } from "@/utils/scrollToId";
import { SupportedLang } from "@/lib/i18n/LanguageSelector";

import {
  title,
  description,
  placeholder,
  subscribeButton,
  slogan,
  socialLabel,
  navigationLabel,
  downloads,
  copyright,
  terms,
  privacy,
  links,
} from "@/lib/i18n/translations/footer";

export default function FooterSection({ lang }: { lang: SupportedLang }) {
  const key = (lang in title ? lang : "en") as SupportedLang;

  const navItems = links[key];

  if (!navItems || navItems.length < 7) {
    console.warn("⚠️ FOOTER LINKS INVALID:", navItems);
    return null;
  }

  const footerLinks = [
    { name: navItems[0], id: "pocetna" },
    { name: navItems[1], id: "prednosti" },
    { name: navItems[2], id: "moduli" },
    { name: navItems[3], id: "sportovi" },
    { name: navItems[4], id: "korisnici" },
    { name: navItems[5], id: "paketi" },
    { name: navItems[6], id: "kontakt" },
  ];

  return (
    <footer
      id="kontakt"
      className="scroll-mt-20 bg-gradient-to-br from-rev-blue via-rev-black to-rev-orange text-white px-6 md:px-12 pt-16 pb-8"
    >
      {/* CTA sekcija */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="normal-case drop-shadow-none">{title[key]}</h1>
        <p className="text-lg mb-6">{description[key]}</p>
        <form className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder={placeholder[key]}
            className="w-full sm:w-auto flex-grow px-4 py-2 rounded-xl text-black"
          />
          <button className="btn-white">{subscribeButton[key]}</button>
        </form>
      </div>

      {/* Glavni sadržaj footera */}
      <div className="max-w-7xl mx-auto border-t border-white/20 pt-12 px-6 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Lijeva zona: logo s nazivom ispod */}
          <div className="flex flex-col items-center">
            <img
              src="/images/Logo_Inverted.svg"
              alt="Revoludus logo"
              className="w-20 mb-2"
            />
            <p className="text-2xl text-center font-raleway uppercase font-bold tracking-wider mt-1">
              Revoludus
            </p>
            <div className="mt-12 text-lg italic text-rev-orange text-wrap balance truncate text-ellipsis max-w-full">
              {slogan[key]}
            </div>
          </div>

          {/* Sredina: društvene mreže centrirano */}
          <div className="flex flex-col items-center">
            <p className="text-center tracking-wider mb-8">
              {socialLabel[key]}
            </p>
            <div className="flex gap-4 text-2xl">
              <a href="#" className="hover:text-gray-300">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-gray-300">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-gray-300">
                <FaLinkedinIn />
              </a>
              <a href="#" className="hover:text-gray-300">
                <FaXTwitter />
              </a>
            </div>
          </div>

          {/* Navigacija */}
          <div className="flex flex-col items-center">
            <p className="text-center tracking-wider mb-8">
              {navigationLabel[key]}
            </p>
            <div className="grid grid-cols-2 gap-2 text-base w-80 mx-auto text-center">
              {footerLinks.map((link) => (
                <a
                  key={link.id}
                  href="#"
                  className="hover:underline"
                  onClick={(e) => {
                    e.preventDefault();
                    smoothScrollTo(link.id, 1000);
                  }}
                >
                  {link.name}
                </a>
              ))}
              <a href="#" className="hover:underline">
                {downloads[key]}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright i pravne napomene */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/20 text-sm flex flex-col md:flex-row justify-between items-center text-gray-300">
        <p>{copyright[key]}</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:underline">
            {terms[key]}
          </a>
          <a href="#" className="hover:underline">
            {privacy[key]}
          </a>
        </div>
      </div>
    </footer>
  );
}
