import backgroundDesktop from "../assets/background-desktop.jpg";
import backgroundMobile from "../assets/background-mobile.jpg";

const MainLayout = ({ children }) => {
  return (
    <div
      className="site-background min-h-screen bg-[#c7ad7d] bg-cover bg-center bg-repeat p-2 font-serif text-[#1d120b] sm:p-4"
      style={{
        "--background-mobile": `url(${backgroundMobile})`,
        "--background-desktop": `url(${backgroundDesktop})`,
      }}
    >
      {children}
    </div>
  );
};

export default MainLayout;
