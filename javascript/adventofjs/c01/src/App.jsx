import "./App.css";

const AnimatedInput = () => {
  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Type here..."
        className="animated-input"
      />
      <svg className="flash" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100%" cy="0" r="0" />
      </svg>
    </div>
  );
};

function App() {
  return (
    <>
      <AnimatedInput />
    </>
  );
}

export default App;
