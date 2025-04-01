import { useContext } from "react";
import Header from "../components/Header";
import { MenuOpenProvider, MenuOpenContext } from "../contexts/MenuOpenContext";

const Main = () => {
  return <main></main>;
};

const Footer = () => {
  return <footer></footer>;
};

const Overlay = () => {
  return (
    <div className="fixed top-0 left-0 z-5 h-screen w-full bg-black opacity-50"></div>
  );
};

function App() {
  const menuOpenContext = useContext(MenuOpenContext);

  return (
    <MenuOpenProvider>
      {menuOpenContext?.isMenuOpen && <Overlay />}
      <Header />
      <Main />
      <Footer />
    </MenuOpenProvider>
  );
}

export default App;
