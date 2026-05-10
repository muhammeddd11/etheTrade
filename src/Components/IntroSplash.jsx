import { useEffect, useState } from "react";

const INTRO_STORAGE_KEY = "ethe-art-collective-intro-seen";
const DESKTOP_INTRO_DURATION = 3200;
const MOBILE_INTRO_DURATION = 2400;

const getIntroStorageKey = () => {
  const viewport = window.matchMedia("(max-width: 767px)").matches
    ? "mobile"
    : "desktop";

  return `${INTRO_STORAGE_KEY}-${viewport}`;
};

const getIntroDuration = () =>
  window.matchMedia("(max-width: 767px)").matches
    ? MOBILE_INTRO_DURATION
    : DESKTOP_INTRO_DURATION;

const shouldShowIntro = () => {
  const introKey = getIntroStorageKey();
  const introSeen = sessionStorage.getItem(introKey);

  if (!introSeen) {
    sessionStorage.setItem(introKey, "true");
    return true;
  }

  return false;
};

const IntroSplash = ({ content }) => {
  const [showIntro, setShowIntro] = useState(shouldShowIntro);

  useEffect(() => {
    if (!showIntro) return undefined;

    const timer = window.setTimeout(() => {
      setShowIntro(false);
    }, getIntroDuration());

    return () => window.clearTimeout(timer);
  }, [showIntro]);

  if (!showIntro) {
    return null;
  }

  return (
    <div
      className="intro-splash fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#1a0f0a] px-6 text-[#ead9b8]"
      aria-label="Opening animation"
    >
      <div className="intro-splash__grain" />
      <div className="intro-splash__halo" />

      <div className="relative z-10 text-center">
        <p className="intro-splash__eyebrow mb-4 text-xs font-bold uppercase tracking-[0.55em] text-[#c8a96d] sm:text-sm">
          {content.introEyebrow}
        </p>

        <h2 className="intro-splash__title text-[clamp(2.2rem,10vw,7rem)] font-black uppercase leading-[0.86] tracking-[0.08em]">
          {content.headerTitleLineOne}
          <span className="block">{content.headerTitleLineTwo}</span>
        </h2>

        <div className="intro-splash__rule mx-auto mt-6 h-px max-w-[420px] bg-[#c8a96d]" />

        <p className="intro-splash__subtitle mt-5 text-xs font-bold uppercase tracking-[0.32em] text-[#dbcaa5] sm:text-sm">
          {content.introSubtitle}
        </p>
      </div>
    </div>
  );
};

export default IntroSplash;
