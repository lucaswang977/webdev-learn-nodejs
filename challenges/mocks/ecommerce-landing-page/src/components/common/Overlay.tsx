import { twMerge } from "tailwind-merge";

interface OverlayProps {
  isShow: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const Overlay = ({ isShow, setShow }: OverlayProps) => {
  return (
    <>
      <div
        className={twMerge(
          "pointer-events-none fixed top-0 left-0 z-5 h-screen w-full bg-black transition-opacity duration-200",
          isShow ? "opacity-50" : "opacity-0",
        )}
      ></div>

      {isShow && (
        <div
          className="fixed top-0 left-0 z-5 h-screen w-full opacity-0"
          onClick={() => setShow(false)}
        ></div>
      )}
    </>
  );
};

export default Overlay;
