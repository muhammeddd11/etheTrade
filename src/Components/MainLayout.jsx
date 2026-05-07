import { useEffect, useRef } from "react";
import backgroundDesktop from "../assets/background-desktop.jpg";

const MainLayout = ({ children }) => {
  const shellRef = useRef(null);

  useEffect(() => {
    const shell = shellRef.current;

    if (!shell) {
      return undefined;
    }

    const updatePointer = (event) => {
      shell.style.setProperty("--cursor-x", `${event.clientX}px`);
      shell.style.setProperty("--cursor-y", `${event.clientY}px`);
    };

    window.addEventListener("pointermove", updatePointer, { passive: true });

    return () => {
      window.removeEventListener("pointermove", updatePointer);
    };
  }, []);

  return (
    <div
      ref={shellRef}
      className="site-background relative min-h-screen overflow-hidden bg-[#c7ad7d] bg-cover bg-center bg-repeat p-2 font-serif text-[#1d120b] sm:p-4"
      style={{
        "--background-mobile": `url(${backgroundDesktop})`,
        "--background-desktop": `url(${backgroundDesktop})`,
        "--cursor-x": "50vw",
        "--cursor-y": "45vh",
      }}
    >
      <div className="ambient-light ambient-light--one" />
      <div className="ambient-light ambient-light--two" />
      <div className="engraved-map" />
      <div className="cursor-spotlight" />
      <div className="paper-sheen" />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default MainLayout;
