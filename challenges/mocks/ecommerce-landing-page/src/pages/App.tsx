import { useState } from "react";

import Overlay from "@components/common/Overlay";
import Header from "@components/header/Header";
import Main from "@components/main/Main";
import MenuOpenProvider from "@contexts/MenuOpenProvider";

const Footer = () => {
  return <footer></footer>;
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <MenuOpenProvider value={{ isMenuOpen, setIsMenuOpen }}>
      <Overlay isShow={isMenuOpen} setShow={setIsMenuOpen} />
      <Header />
      <Main />
      <Footer />
    </MenuOpenProvider>
  );
}

export default App;
