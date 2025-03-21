// https://codepen.io/GemmaCroad/pen/bNGBXGV

import "./App.css";

const Logo = () => {
  return (
    <h2 className="logo">
      <span className="title-light">craft</span>
      <span className="title-secondary">&grind</span>
    </h2>
  );
};

const NavMenu = () => {
  return (
    <ul className="header-menu">
      <li className="header-menu-item">home</li>
      <li className="header-menu-item">shop</li>
      <li className="header-menu-item">about</li>
      <li className="header-menu-item">subscriptions</li>
      <li className="header-menu-item">blog</li>
    </ul>
  );
};

function App() {
  return (
    <main className="main">
      <header className="header-main">
        <Logo />
        <NavMenu />
        <div className="header-links">
          <button className="light-outline-btn">login</button>
          <button className="accent-filled-btn">shop now</button>
        </div>
      </header>
    </main>
  );
}

export default App;
