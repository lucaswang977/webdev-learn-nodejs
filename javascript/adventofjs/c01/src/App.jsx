import { useState, useRef, useEffect } from "react";
import "./App.css";

const AnimatedInput = ({ visible, ref, isAnimating }) => {
  return (
    <div key={visible} className="input-container">
      <input
        type={visible ? "text" : "password"}
        placeholder="Password"
        className="animated-input"
      />
      {(visible || isAnimating) && (
        <svg ref={ref} className="flash" xmlns="http://www.w3.org/2000/svg">
          <circle
            className={
              visible ? "circle-animation" : "circle-animation-reverse"
            }
            cx="100%"
            cy="0"
            r="0"
            fill="#65d6ce"
          />
        </svg>
      )}
    </div>
  );
};

function App() {
  const [visible, setVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const drawerRef = useRef < HTMLDivElement > null;

  useEffect(() => {
    drawerRef.current?.addEventListener("animationcancel", () => {
      setIsAnimating(false);
    });
    drawerRef.current?.addEventListener("animationend", () => {
      setIsAnimating(false);
    });
  }, [drawerRef.current]);
  return (
    <>
      <AnimatedInput
        visible={visible}
        ref={drawerRef}
        isAnimating={isAnimating}
      />
      <button onClick={() => setVisible(!visible)}>
        {visible ? "Hide" : "Show"}
      </button>
    </>
  );
}

export default App;
