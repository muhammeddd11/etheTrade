const Header = ({ content, activeLanguage, languages, onLanguageChange }) => {
  return (
    <header className="mb-2.5 w-full pt-2 font-serif text-[#1d120b]">
      <div className="grid grid-cols-[44px_minmax(0,1fr)_72px] items-start gap-1.5 sm:grid-cols-[86px_minmax(0,1fr)_92px] sm:gap-4">
        <div className="flex justify-start">
          <div className="brand-mark-pulse compass-mark flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#2a1a0f] sm:h-14 sm:w-14">
            <svg
              viewBox="0 0 48 48"
              aria-label="Ethe Trade mark"
              className="h-5 w-5 text-[#1d120b] sm:h-7 sm:w-7"
            >
              <circle
                cx="24"
                cy="24"
                r="10"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M24 8v32M8 24h32M18 18l12 12M30 18 18 30"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="1.5"
              />
              <circle cx="24" cy="24" r="3" fill="currentColor" />
            </svg>
          </div>
        </div>

        <div className="min-w-0 text-center">
          <p className="mb-1.5 text-[10px] font-bold italic leading-tight sm:mb-2 sm:text-sm sm:leading-none">
            {content.eyebrow}
          </p>

          <h1 className="title-ink-sweep title-etch mx-auto m-0 max-w-full border-b-2 border-[#1d120b] pb-1 text-[clamp(1.58rem,7.2vw,2rem)] font-black uppercase leading-[0.95] tracking-[0.04em] text-black sm:text-[clamp(2rem,5.6vw,2.6rem)] sm:leading-[0.96] sm:tracking-[0.06em] lg:text-[clamp(2.45rem,4.6vw,4.45rem)] lg:leading-none lg:tracking-[0.08em]">
            <span className="block lg:inline">{content.headerTitleLineOne}</span>
            <span className="block lg:ml-[0.28em] lg:inline">
              {content.headerTitleLineTwo}
            </span>
          </h1>

          <p className="mx-auto mt-2 max-w-[210px] text-[10px] font-bold uppercase leading-[1.15] text-black sm:max-w-none sm:text-base sm:leading-none">
            {content.tagline}
          </p>
        </div>

        <div className="flex flex-col items-end gap-2">
          <div className="min-w-[72px] border-2 border-[#2a1a0f] bg-[#cbb994]/55 px-2 py-2 text-center text-[8px] leading-tight sm:min-w-[84px] sm:text-[10px]">
            <p className="m-0 font-bold">{content.established}</p>
            <p className="m-0">{content.location}</p>
          </div>

          <div
            className="language-switcher inline-flex border-2 border-[#2a1a0f] bg-[#cbb994]/65 p-0.5 shadow-[inset_0_0_14px_rgba(139,115,85,0.24)]"
            aria-label="Select language"
          >
            {languages.map((language) => {
              const isActive = activeLanguage.code === language.code;

              return (
                <button
                  key={language.code}
                  type="button"
                  aria-pressed={isActive}
                  title={language.label}
                  onClick={() => onLanguageChange(language.code)}
                  className={`nav-button min-w-8 px-2 py-1 text-[9px] font-black uppercase leading-none transition sm:text-[10px] ${
                    isActive
                      ? "bg-[#1a0f0a] text-[#e8dcc4]"
                      : "text-[#1a0f0a] hover:bg-[#1a0f0a] hover:text-[#e8dcc4]"
                  }`}
                >
                  {language.shortLabel}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-3 border-2 border-[#2a1a0f] bg-[#cbb994]/45 px-3 py-1.5 text-center shadow-[inset_0_0_20px_rgba(61,40,23,0.1)]">
        <p className="m-0 text-[10px] font-bold uppercase leading-none sm:text-sm">
          {content.descriptor}
        </p>
      </div>
    </header>
  );
};

export default Header;
