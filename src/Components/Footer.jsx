const Footer = () => {
  return (
    <footer className="mt-3 border-t-4 border-double border-[#2a1a0f] pt-2">
      <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#1d120b]">
        <div className="flex items-center gap-1.5">
          <span>+</span>
          <span className="font-semibold">Premium Edition</span>
          <span>+</span>
        </div>

        <div className="border border-[#2a1a0f] bg-[#c9b896]/55 px-3 py-1 font-semibold shadow-[inset_0_0_14px_rgba(139,115,85,0.3)]">
          Ethe Trade
        </div>

        <div className="flex items-center gap-1.5">
          <span>+</span>
          <span className="font-semibold">Dubai 2024</span>
          <span>+</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
