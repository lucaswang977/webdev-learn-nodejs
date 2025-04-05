import { useContext } from "react";
import MenuOpenContext from "../contexts/MenuOpenContext";

const Overlay = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(MenuOpenContext);
  return (
    <>
      <div
        className={
          (isMenuOpen ? "opacity-50" : "opacity-0") +
          " pointer-events-none fixed top-0 left-0 z-5 h-screen w-full bg-black transition-opacity duration-200"
        }
      ></div>

      {isMenuOpen && (
        <div
          className="fixed top-0 left-0 z-5 h-screen w-full opacity-0"
          onClick={() => isMenuOpen && setIsMenuOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Overlay;
