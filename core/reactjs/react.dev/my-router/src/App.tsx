import { useState, useEffect } from 'react';
import './App.css';

const Wow = () => {
  return (
    <div>
      <p>Wow, it works!</p>
      <button onClick={() => window.history.back()}>Go back</button>
    </div>
  );
};

const App = () => {
  const [curPath, setCurPath] = useState(window.location.pathname);

  useEffect(() => {
    function updatePath() {
      setCurPath(window.location.pathname);
    }
    window.addEventListener('popstate', updatePath);
    return () => {
      window.removeEventListener('popstate', updatePath);
    };
  }, []);

  const renderResult = () => {
    if (curPath === '/wow-link') {
      return <Wow />;
    }
    return <div></div>;
  };

  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      {curPath === '/' && (
        <a
          href="wow-link"
          className="link"
          onClick={(e) => {
            e.preventDefault();
            setCurPath('/wow-link');
            window.history.pushState(null, '', '/wow-link');
          }}
        >
          Show Wow!
        </a>
      )}
      {renderResult()}
    </div>
  );
};

export default App;
