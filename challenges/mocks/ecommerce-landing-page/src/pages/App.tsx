import { useContext } from "react";
import Header from "../components/Header";
import MenuOpenContext from "../contexts/MenuOpenContext";
import MenuOpenProvider from "../contexts/MenuOpenProvider";

const Main = () => {
  return <main></main>;
};

const Footer = () => {
  return <footer></footer>;
};

const Overlay = () => {
  const { isMenuOpen } = useContext(MenuOpenContext) ?? { isMenuOpen: false };
  return (
    isMenuOpen && (
      <div className="fixed top-0 left-0 z-5 h-screen w-full bg-black opacity-50"></div>
    )
  );
};

function App() {
  return (
    <MenuOpenProvider>
      <Overlay />
      <Header />
      <Main />
      <Footer />
    </MenuOpenProvider>
  );
}

export default App;
