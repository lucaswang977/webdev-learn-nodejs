import "./App.css";

function App() {
  return (
    <main className="main">
      <header className="header-main">
        <h2 className="header-title">
          <span className="header-title-light">craft</span>
          <span className="header-title-secondary">&grind</span>
        </h2>
        <ul className="header-menu">
          <li className="header-menu-item">home</li>
          <li className="header-menu-item">shop</li>
          <li className="header-menu-item">about</li>
          <li className="header-menu-item">subscriptions</li>
          <li className="header-menu-item">blog</li>
        </ul>
        <div className="header-links">
          <button className="light-outline-btn">login</button>
          <button className="accent-filled-btn">shop now</button>
        </div>
      </header>
    </main>
  );
}

export default App;
