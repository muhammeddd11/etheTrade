const Header = () => {
  return (
    <header className="mb-2.5 w-full pt-2 font-serif text-[#1d120b]">
      <div className="grid grid-cols-[44px_minmax(0,1fr)_72px] items-start gap-1.5 sm:grid-cols-[86px_minmax(0,1fr)_92px] sm:gap-4">
        <div className="flex justify-start">
          <div className="brand-mark-pulse flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#2a1a0f] sm:h-14 sm:w-14">
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
            Linking Markets. Elevating Art.
          </p>

          <h1 className="title-ink-sweep mx-auto m-0 max-w-full border-b-2 border-[#1d120b] pb-1 text-[clamp(1.58rem,7.2vw,2rem)] font-black uppercase leading-[0.95] tracking-[0.04em] text-black sm:text-[clamp(2rem,5.6vw,2.6rem)] sm:leading-[0.96] sm:tracking-[0.06em] lg:text-[clamp(2.45rem,4.6vw,4.45rem)] lg:leading-none lg:tracking-[0.08em]">
            <span className="block lg:inline">Ethe Art</span>
            <span className="block lg:inline lg:before:content-['\00a0']">
              Collective
            </span>
          </h1>

          <p className="mx-auto mt-2 max-w-[210px] text-[10px] font-bold uppercase leading-[1.15] text-black sm:max-w-none sm:text-base sm:leading-none">
            Building Brands. Connecting Markets.
          </p>
        </div>

        <div className="flex justify-end">
          <div className="min-w-[72px] border-2 border-[#2a1a0f] bg-[#cbb994]/55 px-2 py-2 text-center text-[8px] leading-tight sm:min-w-[84px] sm:text-[10px]">
            <p className="m-0 font-bold">Est. 2024</p>
            <p className="m-0">Dubai, UAE</p>
          </div>
        </div>
      </div>

      <div className="mt-3 border-2 border-[#2a1a0f] bg-[#cbb994]/45 px-3 py-1.5 text-center shadow-[inset_0_0_20px_rgba(61,40,23,0.1)]">
        <p className="m-0 text-[10px] font-bold uppercase leading-none sm:text-sm">
          Strategic Trade &amp; Creative Brand Development
        </p>
      </div>
    </header>
  );
};

export default Header;
