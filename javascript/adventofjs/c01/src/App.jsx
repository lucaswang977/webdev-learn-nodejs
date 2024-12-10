import { useState } from "react";
import "./App.css";

const AnimatedInput = ({ visible }) => {
  return (
    <div key={visible} className="input-container">
      <input
        type={visible ? "text" : "password"}
        placeholder="Password"
        className="animated-input"
      />
      <svg className="flash" xmlns="http://www.w3.org/2000/svg">
        <circle
          className={visible ? "circle-animation" : "circle-animation-reverse"}
          cx="100%"
          cy="0"
          r="0"
          fill="#65d6ce"
        />
      </svg>
    </div>
  );
};

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <AnimatedInput visible={visible} />
      <button onClick={() => setVisible(!visible)}>
        {visible ? "Hide" : "Show"}
      </button>
    </>
  );
}

export default App;
