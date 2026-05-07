const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Us" },
  { id: "products", label: "Products" },
  { id: "contact", label: "Contact Us" },
];

const NavBar = ({ activePage, onNavigate }) => {
  return (
    <nav className="mb-3 border-y-4 border-double border-[#2a1a0f] bg-[#c9b896]/45 px-2 py-2 shadow-[inset_0_0_18px_rgba(139,115,85,0.2)]">
      <div className="flex flex-wrap items-center justify-center gap-2">
        {navItems.map((item) => {
          const isActive = activePage === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onNavigate(item.id)}
              className={`nav-button border-2 px-3 py-1.5 font-serif text-xs font-black uppercase tracking-[0.12em] transition duration-200 sm:text-sm ${
                isActive
                  ? "nav-button--active border-[#1a0f0a] bg-[#1a0f0a] text-[#e8dcc4] shadow-[0_4px_14px_rgba(0,0,0,0.24)]"
                  : "border-[#2a1a0f] bg-[#d4c4a8]/65 text-[#1a0f0a] hover:bg-[#1a0f0a] hover:text-[#e8dcc4]"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default NavBar;
