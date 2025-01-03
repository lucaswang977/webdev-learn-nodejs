import { useState, useRef, forwardRef, useImperativeHandle } from "react";
import { flushSync } from "react-dom";
import "./App.css";

const FocusInput = forwardRef((props, ref) => {
  const realInputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus() {
      realInputRef.current.focus();
    },
  }));

  return <input ref={realInputRef} {...props} />;
});
FocusInput.displayName = "FocusInput";

function App() {
  const [catList] = useState(setupCatList);
  const itemsRef = useRef(null);
  const focusInputRef = useRef(null);
  const [items, setItems] = useState(
    Array(20)
      .fill()
      .map((_, i) => `Item #${i}`)
  );
  const [text, setText] = useState("");
  const listRef = useRef(null);

  const scrollTo = (index) => {
    itemsRef.current.get(index).scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };
  return (
    <>
      <h2>1. Scroll with a map of ref nodes</h2>
      <div className="buttons">
        <button onClick={() => scrollTo(5)}>Scroll to 5</button>
        <button onClick={() => scrollTo(10)}>Scroll to 10</button>
        <button onClick={() => scrollTo(15)}>Scroll to 15</button>
      </div>
      <div className="catlist">
        {catList.map((url, i) => (
          <img
            key={i}
            src={url}
            ref={(node) => {
              if (itemsRef.current === null) {
                itemsRef.current = new Map();
              }

              itemsRef.current.set(i, node);
            }}
          />
        ))}
      </div>

      <h2>2. Custom input focus with imperative handle</h2>
      <div>
        <FocusInput ref={focusInputRef} />
        <button onClick={() => focusInputRef.current.focus()}>Focus</button>
      </div>

      <h2>3. Add an item then scroll to it with flushSync()</h2>
      <div style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />{" "}
        <button
          onClick={() => {
            flushSync(() => {
              setItems([...items, text]);
              setText("");
            });

            listRef.current.lastChild.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
            });
          }}
        >
          Add
        </button>
      </div>
      <div className="listBox">
        <ul ref={listRef}>
          {items.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

function setupCatList() {
  const catList = [];
  for (let i = 0; i < 20; i++) {
    catList.push("https://loremflickr.com/320/240/cat?lock=" + i);
  }

  return catList;
}

export default App;
