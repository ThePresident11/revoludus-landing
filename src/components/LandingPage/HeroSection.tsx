"use client";

import { useEffect, useRef, useState } from "react";
import { smoothScrollTo } from "@/utils/scrollToId";
import { FaChevronDown } from "react-icons/fa";

interface Props {
  lang: string;
}

import { heroTranslations } from "@/lib/i18n/translations/hero";

export default function HeroSection({ lang }: Props) {
  const ballRef = useRef<SVGImageElement>(null);
  const [ballHref, setBallHref] = useState<string>("");

  const balls = [
    "americki-nogomet.svg",
    "futsal.svg",
    "hokej-na-ledu.svg",
    "hokej-na-travi.svg",
    "kosarka.svg",
    "nogomet.svg",
    "odbojka.svg",
    "ragbi.svg",
    "rukomet.svg",
    "tenis.svg",
    "vaterpolo.svg",
  ];

  useEffect(() => {
    const fallback = heroTranslations["en"];
    const selected = heroTranslations.hasOwnProperty(lang)
      ? heroTranslations[lang]
      : fallback;
    const { sports, users, modules } = selected;

    let index = 0;
    let mainInterval: NodeJS.Timeout;
    let userTimeout: NodeJS.Timeout;
    let moduleTimeout: NodeJS.Timeout;
    let fadeTimeout: NodeJS.Timeout;

    const clearLabels = () => {
      ["#sport-label", "#user-label", "#module-label"].forEach((id) => {
        const label = document.querySelector(id) as HTMLDivElement | null;
        if (label) label.textContent = "";
      });
    };

    const updateText = (labelId: string, value: string) => {
      const label = document.querySelector(labelId) as HTMLDivElement | null;
      const wrapper = document.querySelector(
        "#svg-wrapper"
      ) as HTMLDivElement | null;
      if (!label || !wrapper) return;

      label.textContent = value;
      const wrapperWidth = wrapper.offsetWidth;
      const labelWidth = label.offsetWidth;
      const distance = wrapperWidth + labelWidth;

      label.style.transform = "translateX(0px)";
      label.style.transition = "none";
      void label.offsetWidth;
      label.style.transition = "transform 6s linear";
      label.style.transform = `translateX(-${distance}px)`;
    };

    const updateBall = (src: string) => {
      setBallHref(""); // spriječi prikaz starih/prijelaznih slika
      fadeTimeout = setTimeout(() => {
        setBallHref(`/images/${src}`);
      }, 100); // kratak delay da se izbjegne "flash"
    };

    const startWave = () => {
      const sport = sports[index % sports.length];
      const ball = balls[index % balls.length];
      const user = users[index % users.length];
      const mod = modules[index % modules.length];

      updateBall(ball);
      updateText("#sport-label", sport);

      userTimeout = setTimeout(() => {
        updateText("#user-label", user);
      }, 2000);

      moduleTimeout = setTimeout(() => {
        updateText("#module-label", mod);
      }, 4000);

      index++;
    };

    const startAnimation = () => {
      clearInterval(mainInterval);
      clearTimeout(userTimeout);
      clearTimeout(moduleTimeout);
      clearTimeout(fadeTimeout);
      clearLabels();
      index = 0;
      startWave();
      mainInterval = setInterval(startWave, 6000);
    };

    startAnimation();

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        startAnimation();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      clearInterval(mainInterval);
      clearTimeout(userTimeout);
      clearTimeout(moduleTimeout);
      clearTimeout(fadeTimeout);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      clearLabels();
    };
  }, [lang]);

  return (
    <section id="pocetna" className="w-full py-12">
      <div className="flex flex-col items-center text-center">
        <div
          id="svg-wrapper"
          className="relative w-full mx-auto mb-6 overflow-hidden"
        >
          <div className="relative mx-auto w-[90%] max-w-[420px] sm:max-w-[460px] md:max-w-[500px] lg:max-w-[520px] z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 600 530"
              className="w-full mb-2 drop-shadow-[0_4px_2px_rgba(0,0,0,0.25)]"
            >
              <path
                className="fill-rev-blue"
                d="M395.23,313.71,528.84,519.13A7,7,0,0,1,522.92,530h-56c-20.5,0-38.12-9.55-49.28-26.71L305.21,330.43a22.9,22.9,0,0,0-19.71-10.69H11.8a11.5,11.5,0,0,1-10.42-6.31,11.45-11.45,0,0,1,.77-12.12l37.64-54a11.43,11.43,0,0,1,9.65-5H323.62a89.22,89.22,0,0,0,19.28-2q55.83-11.73,60.37-70.54c.18-2.32.24-4.29.2-6.61q-.77-45-44.93-58.59a44.66,44.66,0,0,0-13.76-2.06H115.29a11.73,11.73,0,0,1-9.64-18.44L148.2,23a11.43,11.43,0,0,1,9.64-5H342.43a134,134,0,0,1,36.4,4.8q95.49,25.61,106.86,130.55a134.28,134.28,0,0,1-.45,34.11Q475,263.63,397.89,303.63a7,7,0,0,0-2.66,10.08Z"
              />
              <path
                className="top-line"
                d="M118.18,199.48l22.57-42.23a8.56,8.56,0,0,1,7.68-4.75H293.15a8.4,8.4,0,0,1,6.81,3.41,9.52,9.52,0,0,1,1.87,7.75l-7.64,42.23a8.91,8.91,0,0,1-8.67,7.61H125.87a8.55,8.55,0,0,1-7.64-4.66,9.7,9.7,0,0,1,0-9.36Z"
                fill="#202020"
              />
              <path
                className="bottom-line"
                d="M97.26,411.48l23.94-42.23a9.18,9.18,0,0,1,8.16-4.75H257.61a9.39,9.39,0,0,1,9.21,11.16l-8.1,42.23a9.31,9.31,0,0,1-9.21,7.61H105.41a9.38,9.38,0,0,1-8.15-14Z"
                fill="#202020"
              />
              {ballHref && (
                <image
                  ref={ballRef}
                  id="ball-head"
                  href={ballHref}
                  x="480"
                  y="0"
                  width="120"
                  height="120"
                  className="transition-opacity duration-400"
                />
              )}
            </svg>
          </div>

          <div
            id="sport-label"
            className="text-label top-[0%] lg:top-[7%] text-rev-black"
          ></div>
          <div
            id="user-label"
            className="text-label top-[30%] text-rev-blue"
          ></div>
          <div
            id="module-label"
            className="text-label top-[69%] text-rev-orange"
          ></div>
        </div>

        <button
          onClick={() => smoothScrollTo("prednosti", 1000)}
          className="scroll-arrow text-rev-orange"
          aria-label="Prijeđi na sljedeću sekciju"
        >
          <FaChevronDown />
        </button>
      </div>
    </section>
  );
}
