const Header = () => {
  return (
    <header className="mb-2.5 w-full pt-2 font-serif text-[#1d120b]">
      <div className="grid grid-cols-[52px_minmax(0,1fr)_72px] items-start gap-2 sm:grid-cols-[86px_minmax(0,1fr)_92px] sm:gap-4">
        <div className="flex justify-start">
          <div className="brand-mark-pulse flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#2a1a0f] sm:h-14 sm:w-14">
            <svg
              viewBox="0 0 48 48"
              aria-label="Ethe Trade mark"
              className="h-6 w-6 text-[#1d120b] sm:h-7 sm:w-7"
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
          <p className="mb-2 text-[10px] font-bold italic leading-none sm:text-sm">
            Linking Markets. Elevating Art.
          </p>

          <h1 className="title-ink-sweep mx-auto m-0 max-w-full border-b-2 border-[#1d120b] pb-1 text-[clamp(1.9rem,6vw,4.45rem)] font-black uppercase leading-none tracking-[0.05em] text-black sm:tracking-[0.08em]">
            Ethe Art Collective
          </h1>

          <p className="m-0 mt-2 text-[11px] font-bold uppercase leading-none text-black sm:text-base">
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
