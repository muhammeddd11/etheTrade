import background from "../assets/background.jpg";

const MainLayout = ({ children }) => {
  return (
    <div
      className="min-h-screen bg-[#c7ad7d] bg-cover bg-center bg-repeat p-2 font-serif text-[#1d120b] sm:p-4"
      style={{ backgroundImage: `url(${background})` }}
    >
      {children}
    </div>
  );
};

export default MainLayout;
