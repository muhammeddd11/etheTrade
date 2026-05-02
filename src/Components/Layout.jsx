const Layout = ({ children }) => {
  return (
    <div className="mx-auto w-full max-w-[1440px] bg-transparent p-1 animate-[fadeIn_0.6s_ease-out] sm:p-2">
      {children}
    </div>
  );
};

export default Layout;
